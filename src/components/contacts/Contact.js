import React, { Component } from "react";
import PropTypes from "prop-types";
import { Consumer } from "../../context";
import axios from "axios";

export class contact extends Component {
  constructor() {
    super();
    this.state = {
      showContactInfo: false
    };
  }

  onDeleteClick = (id, dispatch) => {
    axios
      .delete(`https://jsonplaceholder.typicode.com/users/${id}`)
      .then(() => dispatch({ type: "DELETE_CONTACT", payload: id }));
  };
  render() {
    const { id, name, phone, email } = this.props.contact;
    return (
      <Consumer>
        {value => {
          const { dispatch } = value;
          return (
            <div className="card card-body mb-3">
              <h4>
                {name}
                <i
                  onClick={() =>
                    this.setState({
                      showContactInfo: !this.state.showContactInfo
                    })
                  }
                  className="fas fa-sort-down"
                  style={{ cursor: "pointer" }}
                />
                <i
                  className="fas fa-times"
                  onClick={this.onDeleteClick.bind(this, id, dispatch)}
                  style={{ cursor: "pointer", float: "right", color: "red" }}
                />
              </h4>
              {this.state.showContactInfo ? (
                <ul className="list-group">
                  <li className="list-group-item">id: {id}</li>
                  <li className="list-group-item">{email}</li>
                  <li className="list-group-item">{phone}</li>
                </ul>
              ) : null}
            </div>
          );
        }}
      </Consumer>
    );
  }
}

contact.propTypes = {
  contact: PropTypes.object.isRequired
};

export default contact;
