import React from 'react';
import { connect } from "react-redux";

const TaskList = ({tasks}) => {
  return (
    <ul>
      {tasks.map(item => <li key={item.id}>
        <h2>Task: {item.taskName}</h2>
        <p>Priority: {item.priority}</p>
        <p>User: {item.user}</p>
      </li>)}
    </ul>
  )
}

const mapStateToProps = (state) => {
  return {
    tasks: state.tasks.items,
  }
}


export default connect(mapStateToProps )(TaskList);
