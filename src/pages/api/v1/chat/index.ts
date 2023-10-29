import { getSeesion } from "@/services/lex-aws";
import {
  LexRuntimeV2,
  RecognizeTextCommand,
  StartConversationCommand,
  StartConversationRequestEventStream,
} from "@aws-sdk/client-lex-runtime-v2";
import { NextApiRequest, NextApiResponse } from "next";

export default async (req: NextApiRequest, res: NextApiResponse) => {
  if (req.method === "POST") {
    const { kommunicate_message } = req.body;
    const {
      AWS_BOT_REGION_SERVER,
      AWS_IAM_KOMMUNICATE_USER_ACCESS_KEY,
      AWS_IAM_KOMMUNICATE_USER_SECRET_KEY,
    } = process.env;
    let er = null;
    console.log("miau");
    try {
      const lexRuntimeClient = new LexRuntimeV2({
        region: AWS_BOT_REGION_SERVER!, // Change to your desired AWS region
      });
      let cmd = new RecognizeTextCommand({
        botId: process.env.AWS_BOT_ID,
        botAliasId: process.env.AWS_BOT_ALIAS_ID,
        localeId: process.env.AWS_BOT_LOCALE_ID,
        sessionId: "0efcf67e-d9b8-4c03-a3d5-5859e690ee18",
        text: "olá",
      });
      const data = await lexRuntimeClient.send(cmd);
      console.log("Success. Response is: ", data);
    } catch (error) {
      console.log(error);
      er = error;
    }

    //getSeesion();

    res.status(200).json({ message: "message", error: er });
  } else {
    res.status(405).end();
  }
};

/*
const botName = (req: NextApiRequest, res: NextApiResponse) => {
  const command = new RecognizeTextCommand(params);

  client
    .send(command)
    .then((data) => {
      console.log(data);
    })
    .catch((error) => {
      console.error(error);
    });
  res.status(200).send(params);
};
*/
