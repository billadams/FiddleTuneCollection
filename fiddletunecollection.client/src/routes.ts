import { createBrowserRouter } from "react-router";
import App from "./App";
import Index, {loader as IndexLoader} from "./pages/Index";

const router = createBrowserRouter([
  {
    path: '/',
    Component: App,
    loader: IndexLoader,
    children: [
      { index: true, Component: Index}
    ]
  },
]);

export default router;