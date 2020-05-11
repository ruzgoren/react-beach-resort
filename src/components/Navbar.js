import React, { Component } from "react";
import { FaAlignRight } from "react-icons/fa";
import { NavLink } from "react-router-dom";
import logo from "../images/logo.svg";

class Navbar extends Component {
  state = {
    isOpen: false,
  };

  handleToggle = () => {
    this.setState({ isOpen: !this.state.isOpen });
  };

  render() {
    return (
      <>
        <nav className="navbar">
          <div className="nav-center">
            <div className="nav-header">
              <NavLink to="/home">
                <img src={logo} alt="Logo" />
              </NavLink>
              <button
                type="button"
                className="nav-btn"
                onClick={this.handleToggle}
              >
                <FaAlignRight className="nav-icon" />
              </button>
            </div>
            <ul
              className={this.state.isOpen ? "nav-links show-nav" : "nav-links"}
              onMouseLeave={this.state.isOpen ? this.handleToggle : null}
            >
              <li>
                <NavLink
                  exact
                  to="/home"
                  activeClassName="myactive"
                  onClick={this.state.isOpen ? this.handleToggle : null}
                >
                  Home
                </NavLink>
              </li>
              <li>
                <NavLink
                  exact
                  to="/"
                  activeClassName="myactive"
                  onClick={this.state.isOpen ? this.handleToggle : null}
                >
                  Rooms
                </NavLink>
              </li>
            </ul>
          </div>
        </nav>
      </>
    );
  }
}

export { Navbar };
