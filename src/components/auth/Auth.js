import React, { Component } from "react";
import { connect } from "react-redux";
import { registerUserOperation } from "../../redux/auth/authOperation";

class Auth extends Component {
  state = {
    email: "",
    password: "",
  };

  onHandleChange = (e) => {
    const { name, value } = e.target;
    this.setState({ [name]: value });
  };

  onHandleSubmit = (e) => {
    e.preventDefault();
    this.props.registerUserOperation(this.state);
  };

  render() {
    const { email, password } = this.state;

    return (
      <form onSubmit={this.onHandleSubmit}>
        <label htmlFor="">
          Email:
          <input
            type="text"
            name="email"
            onChange={this.onHandleChange}
            value={email}
            placeholder="email"
          />
        </label>
        <label htmlFor="">
          Password:
          <input
            type="text"
            name="password"
            onChange={this.onHandleChange}
            value={password}
            placeholder="password"
          />
        </label>
        <button type="submit"></button>
      </form>
    );
  }
}

export default connect(null, { registerUserOperation })(Auth);
