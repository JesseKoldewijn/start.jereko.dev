import { useEffect, useLayoutEffect } from "react";
import { getWebRequest } from "vinxi/http";

import { ScrollRestoration, useAwaited } from "@tanstack/react-router";
import {
  Body,
  Head,
  Html,
  Meta,
  Scripts,
  createServerFn,
  useServerFn,
} from "@tanstack/start";

const getCookies = createServerFn("POST", async () => {
  const request = getWebRequest();
  const cookies = request.headers.get("Cookie");

  const includesTheme = cookies?.includes("theme=");
  const theme = includesTheme
    ? (cookies?.split("theme=")[1].split(";")[0] ?? "dark")
    : "dark";

  return theme;
});

const fetchCookies = async () => {
  return await getCookies();
};

const RootDocument = ({ children }: { children: React.ReactNode }) => {
  const getServerResponse = async () => {
    const cookies = await fetchCookies();
    console.log(cookies);
  };

  useLayoutEffect(() => {
    getServerResponse();
  }, []);

  return (
    <Html>
      <Head>
        <Meta />
      </Head>
      <Body>
        {children}
        <ScrollRestoration />
        <Scripts />
      </Body>
    </Html>
  );
};
export default RootDocument;
