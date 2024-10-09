import { AppBrandingConfig } from "config/branding";
import { useEffect, useState } from "react";

import { createFileRoute } from "@tanstack/react-router";
import { createServerFn } from "@tanstack/start";

const getDate = createServerFn("GET", () => {
  const dateTime = new Date().getTime();
  const formatted = new Intl.DateTimeFormat("en-US", {
    dateStyle: "full",
    timeStyle: "long",
    timeZone: "UTC",
  }).format(dateTime);

  return {
    date: formatted,
  };
});

export const Route = createFileRoute("/")({
  meta: (_) => [
    {
      name: "title",
      content: AppBrandingConfig.getPageTitle("Home"),
    },
    {
      name: "description",
      content: AppBrandingConfig.getPageDescription("Home"),
    },
  ],
  component: Home,
  loader: async () => await getDate(),
});

function Home() {
  const { date } = Route.useLoaderData();

  return (
    <div className="flex flex-col gap-2 p-6">
      <h1 className="text-3xl font-bold underline">Hello world!</h1>
      <p>{date}</p>
    </div>
  );
}
