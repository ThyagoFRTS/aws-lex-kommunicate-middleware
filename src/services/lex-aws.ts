import {
  LexRuntimeV2,
  RecognizeTextCommand,
} from "@aws-sdk/client-lex-runtime-v2";

const {
  AWS_BOT_REGION_SERVER,
  AWS_BOT_ID,
  AWS_BOT_ALIAS_ID,
  AWS_BOT_LOCALE_ID,
} = process.env;

export const lexRuntimeClient = new LexRuntimeV2({
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

//const data = await lexRuntimeClient.send(cmd);
