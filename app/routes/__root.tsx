import RootComponent from "~/system/_component";
import RootDocument from "~/system/_document";
import { ErrorPage, NotFoundPage } from "~/system/_system-pages/error/hoc";
import { static_links } from "~/utils/seo_links";
import { getPageMeta, seo } from "~/utils/seo_meta";

import { createRootRoute } from "@tanstack/react-router";

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
  component: RootComponent,
  notFoundComponent: NotFoundPage,
  errorComponent: (props) => {
    return (
      <RootDocument>
        <ErrorPage {...props} />
      </RootDocument>
    );
  },
});
