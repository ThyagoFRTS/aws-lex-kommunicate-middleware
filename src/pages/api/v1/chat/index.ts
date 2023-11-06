import { KommunicateAPIRequest } from "@/global/types/kommunicate";
import { getRecognizeCMD, lexRuntimeClient } from "@/services/lex-aws";
import { formatKommunicateMessageResponse } from "@/utils/format-json";
import { NextApiRequest, NextApiResponse } from "next";

export const POST = async (req: NextApiRequest, res: NextApiResponse) => {
  //const { kommunicate_message } = req.body;
  const kommunicateRequest: KommunicateAPIRequest = req.body;
  const { message, from: userId } = kommunicateRequest;

  const command = getRecognizeCMD(userId, message);
  try {
    const data = await lexRuntimeClient.send(command);
    const kommunicateResponse = formatKommunicateMessageResponse(data.messages);
    res.status(200).json(kommunicateResponse);
  } catch (error) {
    console.log(error);
    res.status(500).send(error);
  }
};

export default POST;
