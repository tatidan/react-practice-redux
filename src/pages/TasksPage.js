import React from "react";
import TaskForm from "../components/tasks/TaskForm";
import TaskList from "../components/tasks/TaskList";
// import { connect } from "react-redux";

const TasksPage = () => {
  return (
    <>
      <TaskForm />
      <TaskList />
    </>
  );
};

export default TasksPage;
// export default connect()(TasksPage);
