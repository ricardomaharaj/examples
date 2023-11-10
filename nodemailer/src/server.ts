import { createSchema, createYoga } from 'graphql-yoga'
import nodemailer from 'nodemailer'
import { createServer } from 'node:http'
import { env } from './env'

const schema = createSchema({
  typeDefs: /* GraphQL */ `
    scalar Any

    type Query {
      sendTestMail(to: String!, msg: String!): Any
      sendTestSAMail(to: String!, msg: String!): Any
    }
  `,
  resolvers: {
    Query: {
      sendTestMail: async function (_, args: { to: string; msg: string }) {
        try {
          const transport = nodemailer.createTransport({
            service: 'gmail',
            auth: {
              type: 'OAuth2',
              user: env.PERSONAL_GMAIL,
              clientId: env.GOOGLE_OAUTH_CLIENT_ID,
              clientSecret: env.GOOGLE_OAUTH_CLIENT_SECRET,
              refreshToken: env.REFRESH_TOKEN,
            },
          })

          const res = await transport.sendMail({
            from: env.PERSONAL_GMAIL,
            to: args.to,
            subject: `Test Email @ ${new Date().toJSON()}`,
            html: `<p>${args.msg}</p>`,
          })

          return res
        } catch (error) {
          console.error(error)
          return error
        }
      },
      sendTestSAMail: async function (_, args: { to: string; msg: string }) {
        try {
          const transport = nodemailer.createTransport({
            service: 'gmail',
            auth: {
              type: 'OAuth2',
              user: env.GOOGLE_SA_CLIENT_EMAIL,
              serviceClient: env.GOOGLE_SA_CLIENT_ID,
              privateKey: env.GOOGLE_SA_PRIVATE_KEY,
            },
          })

          const res = await transport.sendMail({
            from: env.GOOGLE_SA_CLIENT_EMAIL,
            to: args.to,
            subject: `Test Email @ ${new Date().toJSON()}`,
            html: `<p>${args.msg}</p>`,
          })

          return res
        } catch (error) {
          console.error(error)
          return error
        }
      },
    },
  },
})

const yoga = createYoga({
  schema,
  graphqlEndpoint: '/',
})

const server = createServer(yoga)

server.listen({ port: 4000 })

console.log('http://localhost:4000')
