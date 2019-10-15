// Stores actions which will fire based on HTTP requests.
// We'll be using Axios, an HTTP API to process HTTP requests from Front End to
// Backend. Actions will be dispatched to the Reducer.

import axios from "axios";
import { GET_LEADS } from "./types";

// GET LEADS Actions

//PRO TIP: => in JavaScript symbolizes Arrow Functions: Functions that don't
// require a Function declaration to use.
export const getLeads = () => dispatch => {
  axios
    .get("/api/leads/") // Get HTTP
    .then(res => {
      // Then perform the following action
      dispatch({
        // Send to reducer
        type: GET_LEADS,
        payloads: res.data
      });
    })
    .catch((err = console.log())); // Catch Errors and push to console log
};
