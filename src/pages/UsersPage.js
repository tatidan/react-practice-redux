import React from "react";
import UserForm from "../components/users/UserForm";
import UserList from "../components/users/UserList";
import { connect } from "react-redux";
//import { setFilter } from "../redux/users/usersActions";
// import Filter from "../components/Filter";

const UsersPage = ({ setFilter }) => {
  return (
    <>
      <UserForm />
      <UserList />
      {/* <Filter ident="users" callBack={setFilter} /> */}
    </>
  );
};

// export default UsersPage;
export default connect()(UsersPage);
