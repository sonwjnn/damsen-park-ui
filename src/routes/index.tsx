/* SPDX-FileCopyrightText: 2014-present Kriasoft */
/* SPDX-License-Identifier: MIT */

import { createElement } from "react";
import {
  createBrowserRouter,
  Navigate,
  RouterProvider,
} from "react-router-dom";
import { BaseLayout, MainLayout } from "../components";

/**
 * Application routes
 * https://reactrouter.com/en/main/routers/create-browser-router
 */
export const router = createBrowserRouter([
  {
    path: "",
    element: <BaseLayout />,
    // errorElement: <RootError />,
    children: [],
  },
  {
    path: "",
    element: <MainLayout />,
    // errorElement: <RootError />,
    children: [
      { index: true, element: <Navigate to="/home" replace /> },
      { path: "home", lazy: () => import("./home") },
      { path: "category", lazy: () => import("./category") },
    ],
  },
]);

export function Router(): JSX.Element {
  return createElement(RouterProvider, { router });
}

// Clean up on module reload (HMR)
// https://vitejs.dev/guide/api-hmr
if (import.meta.hot) {
  import.meta.hot.dispose(() => router.dispose());
}
