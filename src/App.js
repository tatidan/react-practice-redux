import CartList from "./components/cart/CartList";
import PhoneList from "./components/phones/PhoneList";
import LaptopsList from "./components/laptops/LaptopsList";
import Section from "./components/section/Section";
// import TaskForm from "./components/tasks/TaskForm";
// import TaskList from "./components/tasks/TaskList";
// import UserForm from "./components/users/UserForm";
// import UserList from "./components/users/UserList";


function App() {
  return (
    <main>

    {/* <Section>
      <TaskForm />
      <TaskList />
      <UserForm />
      <UserList />
    </Section> */}
      
    <Section>
      <CartList/>
      <PhoneList />
      <LaptopsList/>
    </Section>
      
    </main>
  );
}


export default App;


