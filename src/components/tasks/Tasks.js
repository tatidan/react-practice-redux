import React, { Component } from "react";
import { connect } from "react-redux";
import { getTasksOperation } from "../../redux/tasks/tasksOperations";
// import TaskForm from "./TaskForm";

class Tasks extends Component {
  state = {};

  componentDidMount() {
    this.props.getTasksOperation();
  }

  render() {
    return (
      <>
        <h2>Tasks</h2>
        {/* <TaskForm />
        <TaskList /> */}
      </>
    );
  }
}

export default connect(null, { getTasksOperation })(Tasks);
