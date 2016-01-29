import { GraphQLString, GraphQLList } from 'graphql';
import { RepoInfoType } from './types';
import axios from 'axios';

// Functions to create common field objects

export function usersFollowing() {
  return {
    type: new GraphQLList(RepoInfoType),
    description: "Fields about the people you this person follows",
    resolve: (obj) => {
      const brackIndex = obj.following_url.indexOf("{"),
            url =  obj.following_url.slice(0, brackIndex);
      return axios.get(url)
                  .then(function(response) {
                    return response.data;
                  });
    }
  };
}

export function followingUrl() {
  return {
    type: GraphQLString,
    description: "URI to get data on the people this person follows",
    resolve: (obj) => {
      const brackIndex = obj.following_url.indexOf("{");
      return obj.following_url.slice(0, brackIndex);
    }
  };
}
