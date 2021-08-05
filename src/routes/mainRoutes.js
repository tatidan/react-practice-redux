import UsersPage from "../pages/UsersPage";
import TasksPage from "../pages/TasksPage";

const mainRoutes = [
  {
    name: "users",
    path: "/users",
    component: UsersPage,
    exact: true,
  },
  {
    name: "tasks",
    path: "/tasks",
    component: TasksPage,
    exact: true,
  },
];

export default mainRoutes;
