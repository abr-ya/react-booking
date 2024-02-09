import { Route, createRoutesFromElements, createBrowserRouter, RouterProvider } from "react-router-dom";

import { Error404, Home, Hotel, SearchPage } from "./pages";
import Layout from "./layout/Layout";

const routes = createRoutesFromElements(
  <Route path="/" element={<Layout />}>
    <Route path="/" element={<Home />} />
    <Route path="/search" element={<SearchPage />} />
    <Route path="/hotel/:id" element={<Hotel />} />
    <Route path="*" element={<Error404 />} />
  </Route>,
);
const router = createBrowserRouter(routes);

const App = () => <RouterProvider router={router} />;

export default App;
