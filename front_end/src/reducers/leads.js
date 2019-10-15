//Function that takes an FrontEnd Actions  and sends down a state to Backend

import { GET_LEADS } from "../actions/types.js";

const initialState = {
  leads: []
};

export default function(state = initialState, action) {
  switch (action.type) {
    case GET_LEADS:
      return {
        ...state, //Returns everything inside state
        leads: action.payload
      };
    default:
      return state;
  }
}
