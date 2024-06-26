import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";
import App from "../App";
import { Todos } from "../pages";
const Index = () => {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="" element={<App />}>
        <Route index element={<Todos />} />
      </Route>
    )
  );
  return <RouterProvider router={router} />;
};

export default Index;
