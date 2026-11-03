import { createBrowserRouter } from "react-router";
import App from "./App";
import Index, {loader as IndexLoader} from "./pages/Index";

const router = createBrowserRouter([
  {
    path: '/',
    Component: App,
    children: [
      { index: true, Component: Index, loader: IndexLoader }
    ]
  },
]);

export default router;