# NextJS

- server code and client code in one place
- can write your entire backend for nextjs

## NextAuth

- must use at least one provider
- has many database adapters
- must manually provide module augmentation to match your database types
- must manually forward database fields to the session

## Prisma

- must provide some default tables for nextauth
- nextauth tables can be largely ignored as you wont interface with them directly

# GraphQL

- a spec that details what an api can return and how to ask for what
- the schema language is like a contract that the client and server sign

## Yoga

- a server that implements the gql spec
- can be exported on a nextjs api route

## Pothos

- a library that helps write both gql and typescript at once
- has a powerful prisma plugin that can write it's own sql

## Prisma

- filtering, sorting, and searching must all be handled carefully in prisma queries
- undefined will be ignored in prisma queries

## Urql

- client side gql cache
- auto updates stale data based on type + id
- type safety with `gql<Data, Vars>`
