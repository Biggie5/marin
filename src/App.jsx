import React from "react";
import "./App.scss";
import {
  createBrowserRouter,
  createRoutesFromChildren,
  Route,
  RouterProvider,
} from "react-router-dom";
import Main from "./Layout/Main";
import { Home, Services, About, Contact } from "./Pages";

const router = createBrowserRouter(
  createRoutesFromChildren(
    <>
      <Route path="/" element={<Main />}>
        <Route index element={<Home />} />
        <Route path="services" element={<Services />} />
        <Route path="about" element={<About />} />
        <Route path="contact" element={<Contact />} />
      </Route>
    </>
  )
);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
