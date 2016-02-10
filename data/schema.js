import {
  GraphQLSchema,
  GraphQLObjectType,
  GraphQLString,
  GraphQLNonNull,
} from 'graphql';

import { UserInfoType } from './types';
import axios from 'axios';

// Query object
const query = new GraphQLObjectType({
  name: "Query",
  description: "First GraphQL Server Config - Yay!",
  fields: () => ({
    gitHubUser: {
      type: UserInfoType,
      description: "GitHub user API data with enhanced and additional data",
      args: {
        username: {
          type: new GraphQLNonNull(GraphQLString),
          description: "The GitHub user login you want information on",
        },
      },
      resolve: (_,{username}) => {
        const url = `https://api.github.com/users/${username}`;
        return axios.get(url)
                    .then(function(response) {
                      return response.data;
                    });
      }
    },
  })
});

// Schema
const schema = new GraphQLSchema({
  query
});

export default schema;
