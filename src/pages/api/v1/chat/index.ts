import {
  LexRuntimeV2,
  RecognizeTextCommand,
  StartConversationCommand,
  StartConversationRequestEventStream,
} from "@aws-sdk/client-lex-runtime-v2";
import { NextApiRequest, NextApiResponse } from "next";

export default async (req: NextApiRequest, res: NextApiResponse) => {
  if (req.method === "POST") {
    //const { kommunicate_message } = req.body;

    res.status(200).json({ message: req.body });
  } else {
    console.log("not allowed");
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
