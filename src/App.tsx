import { Route, createRoutesFromElements, createBrowserRouter, RouterProvider } from "react-router-dom";

import { Error404, Home, Hotel, List } from "./pages";
import Layout from "./layout/Layout";

const routes = createRoutesFromElements(
  <Route path="/" element={<Layout />}>
    <Route path="/" element={<Home />} />
    <Route path="/hotels" element={<List />} />
    <Route path="/hotels/:id" element={<Hotel />} />
    <Route path="*" element={<Error404 />} />
  </Route>,
);
const router = createBrowserRouter(routes);

const App = () => <RouterProvider router={router} />;

export default App;
