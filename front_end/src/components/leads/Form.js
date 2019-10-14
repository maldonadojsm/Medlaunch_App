import React, { Component } from "react";

export class Form extends Component {
  render() {
    return (
      <div>
        <h1>Add Lead</h1>
        <form class="form-inline my-2 my-lg-0">
          <button class="btn btn-outline-success my-2 my-sm-0" type="submit">
            Search
          </button>
        </form>
      </div>
    );
  }
}

export default Form;
