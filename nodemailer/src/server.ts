import { createSchema, createYoga } from 'graphql-yoga'
import { createServer } from 'node:http'
import nodemailer from 'nodemailer'
import { env } from './env'

const schema = createSchema({
  typeDefs: /* GraphQL */ `
    scalar Any

    type Query {
      sendTestMail(to: String!, msg: String!): Any
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
    },
  },
})

const yoga = createYoga({
  schema,
  graphqlEndpoint: '/',
})

const server = createServer(yoga)

server.listen({ port: env.PORT })
console.log(`http://localhost:${env.PORT}`)
