import { newServer } from "./newServer";
import { context } from "./context";

newServer(context).then((server) =>
  server.listen().then(({ url }) => {
    console.log(`🚀 Server ready at ${url}`);
  })
);
