# GitHub GraphQL Server

This is the GitHub repo to hold the code use in my blog post on medium on [GraphQL: Learn by doing](https://edgecoders.com/graphql-learn-by-doing-part-1-of-3-9b04cadeacfa#.vcvcrcvms).  You can go to the other branches to follow along.  The master branch will alway be current and will not have all the code from past blogs because it may of been test data or have been refactored.

This assumes you have node 4.2.x and npm installed and configured.

Run the command to install

```
npm install
```
Then this command to start the GraphQL Server

```
npm start
```

TODO:
* Make more Types

Go to your browser and type http://localhost:8888/GraphQL

Here is a sample query

```javascript
{
	gitHubUser(username:"apaquino") {
    login
    avatar_url
    following
    following_url
    users_following {
      login
      avatar_url
    }
    user_followers {
      login
      avatar_url
      following_url

    }
  }
}
```
