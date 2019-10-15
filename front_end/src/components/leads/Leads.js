import React, { Component } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { getLeads } from "../../actions/leads";
/*

Process Flow:

1. actions/leads.js sends action to actions/types.js
2. actions/types.js evaluates action from leads.js and sends it to src/components/Leads.js
3.

*/
export class Leads extends Component {
  static propTypes = {
    leads: PropTypes.array.isRequired
  };
  render() {
    return (
      <div>
        <h1>Leads List</h1>
      </div>
    );
  }
}
// mapState
const mapStateToProps = state => ({
  leads: state.leads.leads // Send Lead Reducer
});

export default connect(mapStateToProps)(Leads); //
