import React, { Component } from "react";

export class AddContact extends Component {
  constructor(props) {
    super(props);

    this.nameIpnut = React.createRef();
    this.emailIpnut = React.createRef();
    this.phoneIpnut = React.createRef();
  }
  onSubmit = e => {
    e.preventDefault();

    const contact = {
      name: this.nameIpnut.current.value,
      email: this.emailIpnut.current.value,
      phone: this.phoneIpnut.current.value
    };
    console.log(contact);
  };

  static defaultProps = {
    name: "Fred Smith",
    email: "fred@yahoo.com",
    phone: "4764 17815"
  };

  render() {
    const { name, email, phone } = this.props;
    return (
      <div className="card mb-3">
        <div className="card-header">Conctact</div>
        <div className="card-body">
          <form onSubmit={this.onSubmit}>
            <div className="form-group">
              <label htmlFor="email">Name</label>
              <input
                type="text"
                name="name"
                className=" form-control form-control-lg"
                placeholder="Enter name...."
                defaultValue={name}
                ref={this.nameIpnut}
              />
            </div>
            <div className="form-group">
              <label htmlFor="name">Name</label>
              <input
                type="email"
                name="email"
                className=" form-control form-control-lg"
                placeholder="Enter email...."
                defaultValue={email}
                ref={this.emailIpnut}
              />
            </div>
            <div className="form-group">
              <label htmlFor="phone">Name</label>
              <input
                type="text"
                name="phone"
                className=" form-control form-control-lg"
                placeholder="Enter phone...."
                defaultValue={phone}
                ref={this.phoneIpnut}
              />
            </div>
            <input
              type="submit"
              value="Add Contact"
              className=" btn btn-block btn-light"
            />
          </form>
        </div>
      </div>
    );
  }
}

export default AddContact;
