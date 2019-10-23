import { CREATE_MESSAGE } from "./types";

//CREATE Message
export const createMessage = msg => {
  return {
    type: CREATE_MESSAGE,
    payload: msg
  };
};
