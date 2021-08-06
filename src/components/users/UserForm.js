import React, { Component } from "react";
import { connect } from "react-redux";
// import { addUser, setError, setLoader } from "../../redux/users/usersActions";
// import { addUserApi } from "../../services/users/UsersApi";
import { addUserOperation } from "../../redux/users/usersOperations";
// import { v4 as uuidv4 } from "uuid";

const initialState = {
  name: "",
  email: "",
};

class UserForm extends Component {
  state = { ...initialState };

  onHandleChange = (e) => {
    const { name, value } = e.target;
    this.setState({ [name]: value });
  };

  onHandleSubmit = async (e) => {
    e.preventDefault();

    this.props.addUserOperation({ ...this.state });

    this.setState({ ...initialState });
  };
  render() {
    return (
      <>
        {this.props.isLoading && <p>Loading...</p>}
        <form onSubmit={this.onHandleSubmit}>
          <label>
            <input
              type="text"
              name="name"
              value={this.state.name}
              onChange={this.onHandleChange}
            />
          </label>
          <label>
            <input
              type="text"
              name="email"
              value={this.state.email}
              onChange={this.onHandleChange}
            />
          </label>
          <button type="submit">Add user</button>
        </form>
      </>
    );
  }
}
const mapStateToProps = (state) => {
  return {
    isLoading: state.users.isLoading,
  };
};

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    addUserOperation: (user) => {
      dispatch(addUserOperation(user));
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(UserForm);
