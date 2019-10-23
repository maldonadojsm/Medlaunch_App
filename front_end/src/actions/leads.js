// Stores actions which will fire based on HTTP requests.
// We'll be using Axios, an HTTP API to process HTTP requests from Front End to
// Backend. Actions will be dispatched to the Reducer.

import axios from "axios";
import { createMessage } from "./messages";
import { GET_LEADS, DELETE_LEAD, ADD_LEAD, GET_ERRORS } from "./types";

// GET LEADS Actions: Sends leads to front end

//PRO TIP: => in JavaScript symbolizes Arrow Functions: Functions that don't
// require a Function declaration to use.
export const getLeads = () => dispatch => {
  axios
    .get("/api/leads/")
    .then(res => {
      dispatch({ type: GET_LEADS, payload: res.data });
    })
    .catch(err => console.log(err)); // Catch Errors and push to console log
};

// DELETE LEADS: Delete lead using "id"
export const deleteLead = id => dispatch => {
  axios
    .delete(`/api/leads/${id}/`)
    .then(res => {
      dispatch(createMessage({ deleteLead: "Lead Deleted" }));
      dispatch({ type: DELETE_LEAD, payload: id });
    })
    .catch(err => console.log(err)); // Catch Errors and push to console log
};

// ADD LEAD : Delete lead using "id"
export const addLead = lead => dispatch => {
  axios
    .post("/api/leads/", lead)
    .then(res => {
      dispatch(createMessage({ addLead: "Lead Added" }));
      dispatch({ type: ADD_LEAD, payload: res.data });
    })
    .catch(err => {
      const errors = {
        msg: err.response.data,
        status: err.response.status
      };
      dispatch({
        type: GET_ERRORS,
        payload: errors
      });
    });
};
