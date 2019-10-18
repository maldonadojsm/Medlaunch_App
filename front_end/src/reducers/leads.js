//Function that takes a FrontEnd Actions  and sends down a state to Backend

import { GET_LEADS, DELETE_LEAD, ADD_LEAD } from "../actions/types.js";

const initialState = {
  leads: []
};

export default function(state = initialState, action) {
  switch (action.type) {
    case GET_LEADS:
      return {
        ...state, //Returns everything inside state (states)
        leads: action.payload
      };
    case DELETE_LEAD:
      return {
        ...state,
        // Iterate through ID and keep those that don't match "action.payload" (ID we're delete).
        // Remove ID from Server and UI
        leads: state.leads.filter(lead => lead.id !== action.payload)
      };
    case ADD_LEAD:
      return {
        ...state,
        leads: [...state.leads, action.payload]
      };

    default:
      return state;
  }
}
