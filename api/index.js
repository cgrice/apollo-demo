import { ApolloServer, gql } from 'apollo-server'
import { prisma } from './generated/prisma-client'


const typeDefs = gql`
  type Todo {
    id: ID!
    text: String!
    done: Boolean!
  }

  type Query {
    todos: [Todo]
  }
  
  type Mutation {
      addTodo(text: String!): Todo
      changeTodoStatus(id: ID!, done: Boolean): Todo
  }
`

const resolvers = {
    Query: {
        todos: () => {
            return prisma.todoes({
                orderBy: "createdAt_ASC"
            })
        }
    },
    Mutation: {
        addTodo: (_, args) => {
            return prisma.createTodo({
                text: args.text,
                done: false,
            })
        },
        changeTodoStatus: (_, args) => {
            return prisma.updateTodo({
                where: { id: args.id },
                data: { done: args.done },
            })
        }
    }

}

const server = new ApolloServer({ typeDefs, resolvers })

server.listen(3333).then(({ url }) => {
  console.log(`🚀  Server ready at ${url}`)
})

