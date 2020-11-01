import express, { Request, Response } from 'express'
import cors from 'cors'
import { ApolloServer } from 'apollo-server-express'
import { displayTitle } from './lib/displayTitle'
import { createConnection } from 'typeorm'
import { buildSchema } from 'type-graphql'
import { UserResolver } from './resolvers/User/user.resolver'
import { User } from './entities/User'

const entry = async () => {
  displayTitle()
  const connection = await createConnection({
    type: 'sqlite',
    database: './database/database.sqlite3',
    entities: [User]
  })
  await connection.dropDatabase() // TODO dev only - drop previous db
  await connection.synchronize()

  const schema = await buildSchema({
    resolvers: [UserResolver]
  })

  const server = new ApolloServer({ schema, playground: true })
  // const server = new ApolloServer({ typeDefs, resolvers, playground: true })

  const app = express()
  server.applyMiddleware({ app })
  app
    .use(cors())
    .get('/', function (req: Request, res: Response) {
      res.json({
        data: {
          message: 'trunalimunumaprzure'
        }
      })
    })
    .listen(3050)
}

entry()
