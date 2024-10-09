import { getWebRequest } from "vinxi/http";
import RootComponent from "~/system/_component";
import RootDocument from "~/system/_document";
import { ErrorPage, NotFoundPage } from "~/system/_system-pages/error/hoc";
import { static_links } from "~/utils/seo_links";
import { getPageMeta, seo } from "~/utils/seo_meta";

import { createRootRoute } from "@tanstack/react-router";
import { createServerFn } from "@tanstack/start";

const getCookies = createServerFn("POST", async () => {
  const request = getWebRequest();
  const cookies = request.headers.get("Cookie");

  const includesTheme = cookies?.includes("theme=");
  const theme = includesTheme
    ? cookies?.split("theme=")[1].split(";")[0] == "light"
      ? "light"
      : "dark"
    : "dark";

  return theme;
});

export const Route = createRootRoute({
  meta: (ctx) => {
    const match = ctx.matches?.at(-1);
    const pageMeta = !!match
      ? getPageMeta(match)
      : {
          title: undefined,
          description: undefined,
          pathName: "/",
        };

    return [
      {
        charSet: "utf-8",
      },
      {
        name: "viewport",
        content: "width=device-width, initial-scale=1",
      },
      ...seo({
        title: pageMeta.title,
        description: pageMeta.description,
        pathName: pageMeta.pathName,
      }),
    ];
  },
  links: () => [...static_links],
  component: () => {
    const theme = Route.useLoaderData();
    return RootComponent({
      theme,
    });
  },
  notFoundComponent: NotFoundPage,
  errorComponent: (props) => {
    const theme = Route.useLoaderData();
    return (
      <RootDocument theme={theme}>
        <ErrorPage {...props} />
      </RootDocument>
    );
  },
  loader: async () => await getCookies(),
});
