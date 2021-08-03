// import store from "./redux/store";

import Section from "./components/section/Section";
import TaskForm from "./components/tasks/TaskForm";
import TaskList from "./components/tasks/TaskList";
import UserForm from "./components/users/UserForm";
import UserList from "./components/users/UserList";


function App() {
  return (
    <Section>
      <TaskForm />
      <TaskList />
      <UserForm />
      <UserList/>
    </Section>
    
  );
}


export default App;


