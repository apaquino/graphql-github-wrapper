import express from 'express';
import GraphQLHTTP from 'express-graphql';
import schema from './data/schema';

const app = express();
const PORT = 8888;

app.use("/GraphQL", GraphQLHTTP({
    schema,
    graphiql: true
  })
);

app.listen(PORT, () => {
  console.log("GraphQL server running.  listening on port", PORT);
});
