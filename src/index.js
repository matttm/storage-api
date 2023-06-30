require("source-map-support/register");
const awsServerlessExpress = require("@vendia/serverless-express");
const createApp = require("./app");

let serverlessExpressInstance;

async function setup(event, context) {
  const app = await createApp();
  serverlessExpressInstance = awsServerlessExpress({ app });
  return serverlessExpressInstance(event, context);
}

function handler(event, context) {
  if (serverlessExpressInstance)
    return serverlessExpressInstance(event, context);

  return setup(event, context);
}

module.exports.handler = handler;
