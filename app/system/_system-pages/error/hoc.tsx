import {
  ErrorComponentProps,
  NotFoundRouteProps,
} from "@tanstack/react-router";

import INTERNAL_NotFound from "./_not-found";

export const ErrorPage = (props: ErrorComponentProps) => {
  return <div>{JSON.stringify(props)}</div>;
};

export const NotFoundPage = (props: NotFoundRouteProps) => {
  return <INTERNAL_NotFound />;
};
