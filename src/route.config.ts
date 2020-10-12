import App from "./pages/App";
import Login from "./pages/Login";
export default [
  {
    isExact: true,
    path: "/",
    component: App,
  },
  {
    path: "/index.html",
    component: App,
  },
  {
    path: "/login",
    component: Login,
  },
];
