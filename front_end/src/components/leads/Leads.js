import React, { Component, Fragment } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { getLeads, deleteLead } from "../../actions/leads";
/*

Process Flow:

1. actions/leads.js sends action to actions/types.js
2. actions/types.js evaluates action from leads.js and sends it to src/components/Leads.js
3.

*/
export class Leads extends Component {
  static propTypes = {
    leads: PropTypes.array.isRequired,
    getLeads: PropTypes.func.isRequired,
    deleteLead: PropTypes.func.isRequired
  };

  // Call action

  componentDidMount() {
    this.props.getLeads();
  }

  render() {
    return (
      // React Fragment (HTML Injection)
      <Fragment>
        <h2>Leads</h2>
        {/* Insert Table, Label Table Headers */}
        <table className="table table-striped">
          <thead>
            <tr>
              <th>ID</th>
              <th>Name</th>
              <th>Email</th>
              <th>Message</th>
              {/* Empty <th /> for Button */}
              <th />
            </tr>
          </thead>
          {/* Table Contents  */}
          <tbody>
            {/* Iterate through map props.leads using ID as key. Fill table with information */}
            {this.props.leads.map(lead => (
              <tr key={lead.id}>
                <td>{lead.id}</td>
                <td>{lead.name}</td>
                <td>{lead.email}</td>
                <td>{lead.messages}</td>
                {/*! Delete Button */}
                <td>
                  {/* When you click "Delete Button", send ID of lead */}
                  <button
                    onClick={this.props.deleteLead.bind(this, lead.id)}
                    className="btn btn-danger btn-sm"
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </Fragment>
    );
  }
}
// mapState
const mapStateToProps = state => ({
  leads: state.leads.leads // Send Lead Reducer
});

export default connect(
  mapStateToProps,
  { getLeads, deleteLead }
)(Leads); //
