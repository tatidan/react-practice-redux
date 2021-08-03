import React, { Component } from 'react';
import { addTask } from '../../redux/tasks/actions';
import { connect } from "react-redux";

const priorityValues = ["high", "medium", "low"]

const initialState = {
  taskName: "",
  priority: priorityValues[0]
};

class TaskForm extends Component {
  state = {
    ...initialState
  }

  onHandleChange = (e) => {
  const { name, value } = e.target;
  this.setState(
    { [name]: value }
  )
  }
  
  onHandleSubmit = (e) => {
    e.preventDefault();
    this.props.addTask(this.state);
    this.setState({ ...initialState });
    

  }
  render() {
    return (
      <form onSubmit={this.onHandleSubmit}>
        <label>
          New task <input type="text" name="taskName" value={ this.state.taskName}  onChange={this.onHandleChange}/>
        </label>
        <select name="priority" onChange={this.onHandleChange}>
          {priorityValues
            .map(item => <option key={item.name }value={item.name}>{item.toUpperCase()}</option>)}

        </select>

        <button type="submit">Add task</button>
      </form>
    );
  }
}

const mapStateToProps = (state) => {
  return {
  filter: state.tasks.filter,
  }
}

const mapDispatchToProps = { addTask };

export default connect(mapStateToProps, mapDispatchToProps)(TaskForm);

