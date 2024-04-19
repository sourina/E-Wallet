import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/Home/Home";
import AddCard from "../pages/AddCard/AddCard";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/addCard",
    element: <AddCard />,
  },
]);

export default router;
