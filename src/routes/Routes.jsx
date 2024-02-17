import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";
import Applayout from "../components/layout/Applayout";
import { About, Contact, Home, Service } from "../pages";
import Error from "../components/layout/Error";

export const routes = createBrowserRouter(
  createRoutesFromElements(
    <Route>
      <Route element={<Applayout />} path="/" errorElement={<Error />}>
        <Route index path="/" element={<Home />} />
        <Route path="contact" element={<Contact />} />
        <Route path="about" element={<About />} />
        <Route path="service" element={<Service />} />
      </Route>
    </Route>
  ),
  {
    basename: "/",
  }
);
