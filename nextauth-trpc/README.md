# NextAuth tRPC

A NextJS app with NextAuth authentication (Todo CRUD)

### Features

- NextAuth authentication using Google OAuth
- Prisma ORM with sqlite database
- API routes protected by authentication

### Usage

required `.env` variables:

```
NEXTAUTH_URL: 'http://localhost:3000/api/auth
NEXTAUTH_SECRET: `generate a random string`

`acquire your own google credentials`
GOOGLE_CLIENT_ID:
GOOGLE_CLIENT_SECRET:
```
