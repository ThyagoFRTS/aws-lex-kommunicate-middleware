import { KommunicateAPIResponse } from "./../global/types/kommunicate";
import { Message } from "@aws-sdk/client-lex-runtime-v2";

export const formatKommunicateMessageResponse = (
  messages?: Message[]
): KommunicateAPIResponse[] => {
  if (messages) {
    return messages.map((item) => ({
      message: item.content || "",
    }));
  } else {
    return [];
  }
};
