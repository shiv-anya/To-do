import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { Provider } from "react-redux";
import { store } from "./app/store";
import {
  Route,
  RouterProvider,
  Routes,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";
import Layout from "./components/UI/Layout";
import Today from "./pages/Today";
import AllTodos from "./pages/AllTodos";
import Upcoming from "./pages/Upcoming";
import Previous from "./pages/Previous";
import Priority from "./pages/Priority";
import StickyNotes from "./pages/StickyNotes";

const root = ReactDOM.createRoot(document.getElementById("root"));
const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Layout />}>
      <Route path="" element={<AllTodos />} />
      <Route path="today" element={<Today />} />
      <Route path="upcoming" element={<Upcoming />} />
      <Route path="previous" element={<Previous />} />
      <Route path="priority/" element={<Priority />}>
        <Route path=":priority" element={<Priority />} />
        <Route path=":priority" element={<Priority />} />
        <Route path=":priority" element={<Priority />} />
      </Route>
      <Route path="notes" element={<StickyNotes />} />
    </Route>
  )
);
root.render(
  <Provider store={store}>
    <RouterProvider router={router} />
  </Provider>
);
