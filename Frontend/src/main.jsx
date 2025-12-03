import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { Provider } from "react-redux";
import { store } from "./redux/store.js";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Layout from "./components/Layout.jsx";
import SignleVideo from "./components/SignleVideo.jsx";
import Videos from "./components/Videos";
import LikesPage from "./pages/LikesPage.jsx";
import HistoryPage from "./pages/HistoryPage.jsx";
import MyContentPage from "./pages/MyContentPage.jsx";
import CollectionPage from "./pages/CollectionPage.jsx";
import SubscriptionsPage from "./pages/SubscriptionsPage.jsx";
import SupportPage from "./pages/SupportPage.jsx";
import Header from "./components/Header.jsx";
import SettingPage from "./pages/SettingPage.jsx";
import AuthPage from "./pages/AuthPage.jsx";

const router = createBrowserRouter([
  {
    path: "login",
    element: <AuthPage />,
  },
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        index: true,
        element: <Videos />,
      },
      {
        path: "video/:id",
        element: <SignleVideo />,
      },
      {
        path: "liked",
        element: <LikesPage />,
      },
      {
        path: "history",
        element: <HistoryPage />,
      },
      {
        path: "profile/:id",
        element: <MyContentPage />,
      },
      {
        path: "collection",
        element: <CollectionPage />,
      },
      {
        path: "subscriptions",
        element: <SubscriptionsPage />,
      },
      {
        path: "settings",
        element: <SettingPage />,
      },
    ],
  },
  {
    path: "/",
    element: <Header />,
    children: [
      {
        path: "/support",
        element: <SupportPage />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <Provider store={store}>
    <RouterProvider router={router} />
    <App />
  </Provider>
);
