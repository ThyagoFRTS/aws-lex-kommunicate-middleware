import { v4 as uuidv4 } from "uuid";

const retrieveSession = () => {
  let storage = window.sessionStorage || window.localStorage;

  if (!storage) {
    console.error("Neither sessionStorage nor localStorage is available.");
    return null;
  }

  let sessionId = storage.getItem("AWS_SESSION_ID");

  if (!sessionId) {
    sessionId = uuidv4();
    storage.setItem("AWS_SESSION_ID", sessionId);
  }

  return sessionId;
};

export default retrieveSession;
