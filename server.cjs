const { ApolloServer } = require('@apollo/server');
const { startStandaloneServer } = require('@apollo/server/standalone');
const gql = require('graphql-tag');

// Sample type definitions
const typeDefs = gql`
  type Query {
    hello: String
  }
`;

// Sample resolvers
const resolvers = {
  Query: {
    hello: () => 'Hello world!',
  },
};

// Create an Apollo Server instance
const server = new ApolloServer({ typeDefs, resolvers });

// Start the server
startStandaloneServer(server, {
  listen: { port: 1420 },
}).then(({ url }) => {
  console.log(`🚀 Server ready at ${url}`);
});
