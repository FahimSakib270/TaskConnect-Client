import { createBrowserRouter } from "react-router";
import MainLayout from "../Layout/MainLayout";
import Home from "../pages/Home";
import BrowseTask from "../pages/BrowseTask";
import AddTask from "../pages/AddTask";
import MyPostedTask from "../pages/MyPostedTask";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: MainLayout,
    children: [
      {
        index: true,
        Component: Home,
      },
      {
        path: "/browse",
        Component: BrowseTask,
      },
      {
        path: "/add-task",
        Component: AddTask,
      },
      {
        path: "/my-posted-tasks",
        Component: MyPostedTask,
      },
    ],
  },
]);
