import {
  Route,
  Routes,
  // createBrowserRouter,
  // createRoutesFromElements,
} from "react-router-dom";
import Applayout from "../components/layout/Applayout";
import { About, Buy, Contact, Faq, Home, NotFound, Service } from "../pages";
import Error from "../components/layout/Error";
import { HelmetProvider } from "react-helmet-async";

export const helmetContext = {};

export const routes = () => {
  return (
    <Routes>
      <Route element={<Applayout />} path="/" errorElement={<Error />}>
        <Route index path="/" element={<Home />} />
        {/* <Route path="*" element={<NotFound />} /> */}
        <Route path="contact" element={<Contact />} />
        <Route path="faq" element={<Faq />} />
        <Route path="about" element={<About />} />
        <Route path="service" element={<Service />} />
        <Route path="not-found" element={<NotFound />} />
        {/* <Route path="buy" element={<Buy />} /> */}
      </Route>
    </Routes>
  );
};

export const Router = () => {
  return <HelmetProvider context={helmetContext}>{routes()}</HelmetProvider>;
};

