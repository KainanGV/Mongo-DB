import 'reflect-metadata'

import { ApolloServer } from 'apollo-server'

import './database'
import './database/schemas/Tweet'

import schemaFn from './schemas'

const app = async () => {
    const schema = await schemaFn()

    const server = new ApolloServer({ schema })

    server.listen().then(() => console.log(`Server started ...`))
}

app()