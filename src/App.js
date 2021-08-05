import React from "react";
import Header from "./components/header/Header";
import Main from "./components/main/Main";
import languageHoc from "./hoc/languageHoc";
// import { createContext } from "react";
// import languageHoc from "./hoc/languageHoc";

// import Section from "./components/section/Section";
// import TaskForm from "./components/tasks/TaskForm";
// import TaskList from "./components/tasks/TaskList";
// import UserForm from "./components/users/UserForm";
// import UserList from "./components/users/UserList";

//import CartList from "./components/cart/CartList";
// import PhoneList from "./components/phones/PhoneList";
// import LaptopsList from "./components/laptops/LaptopsList";

// const context = createContext();
// const { Consumer: LangConsumer, Provider: LanguageProvider } = createContext();
// export const LanguageConsumer = LangConsumer;

const App = () => {
  return (
    <>
      {/* <LanguageProvider value={{ language, list, changeLanguage }}> */}
      <Header />
      <Main />

      {/* 
    <Section>
      <TaskForm />
      <TaskList />
      <UserForm />
      <UserList />
    </Section>
       */}
      {/* <Section>
      <CartList/>
      <PhoneList />
      <LaptopsList/>
    </Section> */}
      {/* </LanguageProvider> */}
    </>
  );
};

export default languageHoc(App);
