import {
  LexRuntimeV2,
  RecognizeTextCommand,
} from "@aws-sdk/client-lex-runtime-v2";

const {
  AWS_BOT_REGION_SERVER,
  AWS_BOT_ID,
  AWS_BOT_ALIAS_ID,
  AWS_BOT_LOCALE_ID,
  AWS_ACCESS_KEY_ID,
  AWS_SECRET_ACCESS_KEY,
} = process.env;

export const lexRuntimeClient = new LexRuntimeV2({
  credentials: {
    accessKeyId: AWS_ACCESS_KEY_ID!,
    secretAccessKey: AWS_SECRET_ACCESS_KEY!,
  },
  region: AWS_BOT_REGION_SERVER!,
});

export const getRecognizeCMD = (sessionId: string, text: string) => {
  return new RecognizeTextCommand({
    botId: AWS_BOT_ID,
    botAliasId: AWS_BOT_ALIAS_ID,
    localeId: AWS_BOT_LOCALE_ID,
    sessionId,
    text,
  });
};
