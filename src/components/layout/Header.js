import React, { Component } from "react";
import { Link } from "react-router-dom";

export class Header extends Component {
  render() {
    const { branding } = this.props;
    return (
      <div>
        <nav className="navbar navbar-expand-sm navbar-dark bg-danger mb-3 py-0">
          <div className="container">
            <a href="/" className="navbar-brand">
              {branding}
            </a>
            <div>
              <ul className="navbar-nav mr-auto">
                <li className="nav-item mr-2">
                  <Link to="/" className="nav-link">
                    <i className="fas fa-home mr-2" />
                    Home
                  </Link>
                </li>
                <li className="nav-item mr-2">
                  <Link to="/contact/add" className="nav-link">
                    <i className="fas fa-plus mr-2" />
                    Add
                  </Link>
                </li>
                <li className="nav-item mr-2 ">
                  <Link to="/About" className="nav-link">
                    <i className="fa fa-question mr-2" />
                    About
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </div>
    );
  }
}

export default Header;
