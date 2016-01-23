import {
  GraphQLSchema,
  GraphQLObjectType,
  GraphQLInt,
  GraphQLString,
  GraphQLList,
  GraphQLNonNull,
  GraphQLID,
  GraphQLBoolean,
  GraphQLFloat
} from 'graphql';

const query = new GraphQLObjectType({
  name: "Query",
  description: "First GraphQL Server Config - Yay!",
  fields: () => ({
    hello: {
      type: GraphQLString,
      description: "Accepts a name so you can be nice and say hi",
      args: {
        name: {
          type: new GraphQLNonNull(GraphQLString),
          description: "Name you want to say hi to :)",
        }
      },
      resolve: (_,args) => {
        return `Hello, ${args.name}!!!`;
      }
    },
    luckyNumber: {
      type: GraphQLInt,
      description: "A lucky number",
      resolve: () => {
        return 888;
      }
    }
  })
});

const schema = new GraphQLSchema({
  query
});

export default schema;
