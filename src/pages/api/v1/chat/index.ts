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
    console.log(req.body);
    res.status(200).json([
      {
        message: "A message can be simple as a plain text",
      },
      {
        message: "A message can be a rich message containing metadata",
        metadata: {
          contentType: "300",
          templateId: "6",
          payload: [
            {
              title: "Suggested Reply button 1",
              message: "Suggested Reply button 1",
            },
            {
              title: "Suggested Reply button 2",
              message: "Suggested Reply button 2",
            },
          ],
        },
      },
    ]);
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
