import {
  GraphQLObjectType,
  GraphQLInt,
  GraphQLString,
  GraphQLList,
  GraphQLNonNull,
  GraphQLBoolean,
} from 'graphql';

import { usersFollowing, userFollowers, followingUrl } from './commonFields';

// Types for query object

export const UserInfoType = new GraphQLObjectType({
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
    "following_url": followingUrl(),
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
    "users_following": usersFollowing(),
    "user_followers": userFollowers(),
  })
});

export const OwnerRepoInfoType = new GraphQLObjectType({
  name: "RepoInfo",
  description: "Basic information on a GitHub user",
  fields: () => ({
    "login": { type: GraphQLString },
    "id": { type: GraphQLInt },
    "avatar_url": { type: GraphQLString },
    "gravatar_id": { type: GraphQLString },
    "url": { type: GraphQLString },
    "html_url": { type: GraphQLString },
    "followers_url": { type: GraphQLString },
    "following_url": followingUrl(),
    "gists_url": { type: GraphQLString },
    "starred_url": { type: GraphQLString },
    "subscriptions_url": { type: GraphQLString },
    "organizations_url": { type: GraphQLString },
    "repos_url": { type: GraphQLString },
    "events_url": { type: GraphQLString },
    "received_events_url": { type: GraphQLString },
    "type": { type: GraphQLString },
    "site_admin": { type: GraphQLBoolean },
    "users_following": usersFollowing(),
  })
});
