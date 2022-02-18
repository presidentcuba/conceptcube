import Contact from "../Pages/Contact/Contact";
import Home from "../Pages/Home/Home";
import Teams from "./../Pages/Teams/Teams";
import Works from "./../Pages/Works/Works";
const routes = [
  {
    path: "/",
    exact: true,
    element: <Home />,
  },
  {
    path: "/contact",
    exact: false,
    element: <Contact />,
  },
  {
    path: "/works",
    exact: false,
    element: <Works />,
  },
  {
    path: "/teams",
    exact: false,
    element: <Teams />,
  },
];

export default routes;
