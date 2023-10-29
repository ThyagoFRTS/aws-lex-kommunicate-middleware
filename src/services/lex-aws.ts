import {
  LexRuntimeV2Client,
  GetSessionCommand,
} from "@aws-sdk/client-lex-runtime-v2";

const client = new LexRuntimeV2Client({ region: "us-east-1" }); // Specify your desired AWS region.

const params = {
  botId: "yourBotId",
  botAliasId: "yourBotAliasId",
  localeId: "en_US",
  sessionState: "yourSessionState",
  text: "user input text",
};

export const getSeesion = () => {
  const command = new GetSessionCommand({
    botAliasId: process.env.AWS_BOT_ALIAS_ID,
    botId: process.env.AWS_BOT_ID!,
    localeId: process.env.AWS_BOT_LOCALE_ID,
    sessionId: "$6716gge731ge3",
  });
  return command;
};
