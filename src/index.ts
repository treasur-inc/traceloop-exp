import * as traceloop from "@traceloop/node-server-sdk";

traceloop.initialize({
  disableBatch: true,
  apiKey: process.env.TRACELOOP_KEY,
});
