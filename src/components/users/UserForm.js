import React, { Component } from 'react';
import { connect } from "react-redux";
import { addUser } from '../../redux/users/usersActions';
import { v4 as uuidv4 } from "uuid";

const initialState = {
  name: "",
  email: "",
};

class UserForm extends Component {
  state = {...initialState
  }
  
  onHandleChange = (e) => {
    const { name, value } = e.target;
    this.setState({ [name]: value });
  }

  onHandleSubmit = (e) => {
    e.preventDefault();
    this.props.addUser({ ...this.state, id: uuidv4() });
    this.setState({ ...initialState });
  }
  render() {
    return (
      <form onSubmit={this.onHandleSubmit}>
        <label>
          <input type="text" name="name" value={ this.state.name}  onChange={this.onHandleChange}/>
        </label>
         <label>
          <input type="text" name="email" value={ this.state.email} onChange={this.onHandleChange} />
        </label>
        <button type="submit">Add user</button>
      </form>
    );
  }
}


const mapDispatchToProps = { addUser };


export default connect(null,mapDispatchToProps )(UserForm);