import { createBrowserRouter } from "react-router";
import App from "./App";
import Index from "./pages/Index";

const router = createBrowserRouter([
  {
    path: '/',
    Component: App,
    children: [
      { index: true, Component: Index }
    ]
  },
]);

export default router;