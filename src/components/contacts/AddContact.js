import React, { Component } from "react";
import AddContactInput from "../layout/AddContactInput";
import { Consumer } from "../../context";
//import uuid from "uuid";
import axios from "axios";

export class AddContact extends Component {
  constructor() {
    super();
    this.state = {
      name: "",
      email: "",
      phone: "",
      errors: {}
    };
  }

  onSubmit = (dispatch, e) => {
    e.preventDefault();

    const { name, email, phone } = this.state;

    if (name === "") {
      this.setState({ errors: { name: "Name is required" } });
      return;
    }
    if (email === "") {
      this.setState({ errors: { email: "Email is required" } });
      return;
    }
    if (phone === "") {
      this.setState({ errors: { phone: "Phone is required" } });
      return;
    }

    const newContact = {
      //id: uuid()
      name,
      email,
      phone
    };

    axios
      .post(`https://jsonplaceholder.typicode.com/users`, newContact)
      .then(res => dispatch({ type: "ADD_CONTACT", payload: res.data }));

    //..
    // nemusí být pokud nastane redirect
    this.setState({
      name: "",
      email: "",
      phone: "",
      errors: {}
    });

    this.props.history.push("/");
  };

  handleChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };
  render() {
    const { name, email, phone, errors } = this.state;

    return (
      <Consumer>
        {value => {
          const { dispatch } = value;
          return (
            <div className="card mb-3">
              <div className="card-header">Conctact</div>
              <div className="card-body">
                <form onSubmit={this.onSubmit.bind(this, dispatch)}>
                  <AddContactInput
                    label="Name"
                    name="name"
                    placeholder="Enter Name"
                    value={name}
                    onChange={this.handleChange}
                    error={errors.name}
                  />
                  <AddContactInput
                    label="Email"
                    type="email"
                    name="email"
                    placeholder="Enter Email"
                    value={email}
                    onChange={this.handleChange}
                    error={errors.email}
                  />
                  <AddContactInput
                    label="Phone"
                    name="phone"
                    placeholder="Enter Phone"
                    value={phone}
                    onChange={this.handleChange}
                    error={errors.phone}
                  />
                  <input
                    type="submit"
                    value="Add Contact"
                    className=" btn btn-block btn-light"
                  />
                </form>
              </div>
            </div>
          );
        }}
      </Consumer>
    );
  }
}

export default AddContact;
