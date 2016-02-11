import { GraphQLString, GraphQLList } from 'graphql';
import { OwnerRepoInfoType, DetailedRepoInfoType } from './types';
import axios from 'axios';

// Functions to create common field objects

export function usersFollowing() {
  return {
    type: new GraphQLList(OwnerRepoInfoType),
    description: "Fields about the people this user follows",
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

export function userFollowers() {
  return {
    type: new GraphQLList(OwnerRepoInfoType),
    description: "Fields about the people following this user",
    resolve: (obj) => {
      const url =  obj.followers_url;
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

export function userRepos() {
  return {
    type: new GraphQLList(DetailedRepoInfoType),
    description: "Fields about the user's repos",
    resolve: (obj) => {
      const url =  obj.repos_url;
      return axios.get(url)
                  .then(function(response) {
                    return response.data;
                  });
    }
  };
}

export function starredRepos() {
  return {
    type: new GraphQLList(DetailedRepoInfoType),
    description: "Fields about the repos user starred",
    resolve: (obj) => {
      const brackIndex = obj.starred_url.indexOf("{"),
            url =  obj.starred_url.slice(0, brackIndex);
      return axios.get(url)
                  .then(function(response) {
                    return response.data;
                  });
    }
  };
}
