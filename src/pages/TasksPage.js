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

// import React from "react";
// import Tasks from "../components/tasks/Tasks";

// const TaskPage = () => {
//   return (
//     <>
//       <h2>TaskPage</h2>
//       <Tasks />
//     </>
//   );
// };

// export default TaskPage;
