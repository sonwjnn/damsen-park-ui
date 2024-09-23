/* SPDX-FileCopyrightText: 2014-present Kriasoft */
/* SPDX-License-Identifier: MIT */

import { Fragment, Suspense } from "react";
import { Outlet } from "react-router-dom";
import { Sidebar } from "./sidebar";

/**
 * The main application layout.
 */
export function MainLayout(): JSX.Element {
  return (
    <div className="flex">
      <Sidebar />
      <main className="flex-1">
        <div className="p-4 h-full bg-[#E6FFD2]">
          <Suspense>
            <Outlet />
          </Suspense>
        </div>
      </main>
    </div>
  );
}

/**
 * The minimal app layout to be used on pages such Login/Signup,
 * Privacy Policy, Terms of Use, etc.
 */
export function BaseLayout(): JSX.Element {
  return (
    <Fragment>
      <Suspense>
        <Outlet />
      </Suspense>
    </Fragment>
  );
}
