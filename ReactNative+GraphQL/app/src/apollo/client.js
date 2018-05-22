import { split } from "apollo-link";
import { ApolloClient } from "apollo-client";
import { HttpLink } from "apollo-link-http";
import { WebSocketLink } from "apollo-link-ws";
import { SubscriptionClient } from "subscriptions-transport-ws";
import { InMemoryCache } from "apollo-cache-inmemory";
import { getMainDefinition } from "apollo-utilities";

const URI_HTTP = "https://api.graph.cool/simple/v1/cjhdfp63i3mgr0180hcl51zoe";
const URI_WSS =
  "wss://subscriptions.us-west-2.graph.cool/v1/cjhdfp63i3mgr0180hcl51zoe";

const httpLink = new HttpLink({
  uri: URI_HTTP
});

const wsLink = new WebSocketLink({
  uri: URI_WSS,
  options: { reconnect: true }
});

const subscription = new SubscriptionClient(URI_HTTP, {
  reconnect: true
});

const link = split(
  ({ query }) => {
    const { kind, operation } = getMainDefinition(query);
    return kind === "OperationDefinition" && operation === "subscription";
  },
  wsLink,
  httpLink
);

const client = new ApolloClient({
  link,
  cache: new InMemoryCache(),
  networkInterface: subscription
});

export default client;
