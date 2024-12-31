import { Route, createRoutesFromElements, createBrowserRouter, RouterProvider } from "react-router-dom";

import { Error404, Home, HotelPage, Login, Register, SearchPage } from "./pages";
import Layout from "./layout/Layout";
import { AdminHome } from "./pages2admin";

const routes = createRoutesFromElements(
  <Route path="/" element={<Layout />}>
    <Route path="/" element={<Home />} />
    <Route path="/hotel/:id" element={<HotelPage />} />
    <Route path="/login" element={<Login />} />
    <Route path="/register" element={<Register />} />
    <Route path="/search" element={<SearchPage />} />
    <Route path="*" element={<Error404 />} />
    <Route path="/admin" element={<AdminHome />} />
  </Route>,
);
const router = createBrowserRouter(routes);

const App = () => <RouterProvider router={router} />;

export default App;
