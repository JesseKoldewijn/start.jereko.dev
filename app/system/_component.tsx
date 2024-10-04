import { Suspense, lazy } from "react";

import { Outlet } from "@tanstack/react-router";

import RootDocument from "./_document";

const TanStackRouterDevtools =
  process.env.NODE_ENV === "production"
    ? () => null // Render nothing in production
    : lazy(() =>
        // Lazy load in development
        import("@tanstack/router-devtools").then((res) => ({
          default: res.TanStackRouterDevtools,
          // For Embedded Mode
          //default: res.TanStackRouterDevtoolsPanel,
        })),
      );

const RootComponent = () => {
  return (
    <RootDocument>
      <Outlet />
      <Suspense>
        <TanStackRouterDevtools />
      </Suspense>
    </RootDocument>
  );
};
export default RootComponent;
