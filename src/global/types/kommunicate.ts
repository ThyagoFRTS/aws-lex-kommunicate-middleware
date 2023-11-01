export interface KommunicateAPIRequest {
  botId: string;
  key: string;
  from: string;
  message: string;
  groupId: number;
  metadata: Request;
  contentType: number;
  applicationId: string;
  source: number;
  createdAt: number;
  eventName: string;
}

interface Request {
  KM_CHAT_CONTEXT: KMChatContext;
}

interface KMChatContext {
  kmUserLocale: string;
  groupId: string;
  botId: string;
  messageSource: string;
  applicationId: string;
  from: string;
  attachments: any[];
}

export interface KommunicateAPIResponse {
  message: string;
  metadata?: MetadataResponse;
}

interface MetadataResponse {
  contentType: string;
  templateId: string;
  payload: Payload[];
}

interface Payload {
  title: string;
  message: string;
}
