import { createRootRoute } from "@tanstack/react-router";
import RootComponent from "../_component";
import { ErrorPage, NotFoundPage } from "../_system-pages/error/hoc";

export const RootRoute = createRootRoute({
  meta: () => [
    {
      charSet: "utf-8",
    },
    {
      name: "viewport",
      content: "width=device-width, initial-scale=1",
    },
    {
      title: "TanStack Start Starter",
    },
  ],
  component: RootComponent,
  notFoundComponent: NotFoundPage,
  errorComponent: ErrorPage,
});
