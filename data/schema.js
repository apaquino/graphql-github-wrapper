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

import axios from 'axios';

const userInfoType = new GraphQLObjectType({
  name: "UserInfo",
  description: "Basic information on a GitHub user",
  fields: () => ({
    "login": { type: GraphQLString },
    "id": { type: GraphQLInt },
    "avatar_url": { type: GraphQLString },
    "gravatar_id": { type: GraphQLString },
    "url": { type: GraphQLString },
    "html_url": { type: GraphQLString },
    "followers_url": { type: GraphQLString },
    "following_url": {
      type: GraphQLString,
      resolve: (obj) => {
        const brackIndex = obj.following_url.indexOf("{");
        return obj.following_url.slice(0, brackIndex);
      }
    },
    "gists_url": { type: GraphQLString },
    "starred_url": { type: GraphQLString },
    "subscriptions_url": { type: GraphQLString },
    "organizations_url": { type: GraphQLString },
    "repos_url": { type: GraphQLString },
    "events_url": { type: GraphQLString },
    "received_events_url": { type: GraphQLString },
    "type": { type: GraphQLString },
    "site_admin": { type: GraphQLBoolean },
    "name": { type: GraphQLString },
    "company": { type: GraphQLString },
    "blog": { type: GraphQLString },
    "location": { type: GraphQLString },
    "email": { type: GraphQLString },
    "hireable": { type: GraphQLBoolean },
    "bio": { type: GraphQLString },
    "public_repos": { type: GraphQLInt },
    "public_gists": { type: GraphQLInt },
    "followers": { type: GraphQLInt },
    "following": { type: GraphQLInt },
    "created_at": { type: GraphQLString },
    "updated_at": { type: GraphQLString },
    "users_following": {
      type: new GraphQLList(followinInfoType),
      resolve: (obj) => {
        const brackIndex = obj.following_url.indexOf("{"),
              url =  obj.following_url.slice(0, brackIndex);
        return axios.get(url)
                    .then(function(response) {
                      return response.data;
                    });
      }
    },
  })
});

const followinInfoType = new GraphQLObjectType({
  name: "FollowingInfo",
  description: "Basic information on a GitHub user",
  fields: () => ({
    "login": { type: GraphQLString },
    "id": { type: GraphQLInt },
    "avatar_url": { type: GraphQLString },
    "gravatar_id": { type: GraphQLString },
    "url": { type: GraphQLString },
    "html_url": { type: GraphQLString },
    "followers_url": { type: GraphQLString },
    "following_url": {
      type: GraphQLString,
      resolve: (obj) => {
        const brackIndex = obj.following_url.indexOf("{");
        return obj.following_url.slice(0, brackIndex);
      }
    },
    "gists_url": { type: GraphQLString },
    "starred_url": { type: GraphQLString },
    "subscriptions_url": { type: GraphQLString },
    "organizations_url": { type: GraphQLString },
    "repos_url": { type: GraphQLString },
    "events_url": { type: GraphQLString },
    "received_events_url": { type: GraphQLString },
    "type": { type: GraphQLString },
    "site_admin": { type: GraphQLBoolean }
  })
});

const query = new GraphQLObjectType({
  name: "Query",
  description: "First GraphQL Server Config - Yay!",
  fields: () => ({
    gitHubUser: {
      type: userInfoType,
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

const schema = new GraphQLSchema({
  query
});

export default schema;
