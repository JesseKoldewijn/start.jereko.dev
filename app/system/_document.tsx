import { ScrollRestoration } from "@tanstack/react-router";
import { Body, Head, Meta, Scripts } from "@tanstack/start";
import { Html } from "~/lib/@tanstack/Meta";

const RootDocument = ({
  children,
  theme,
}: {
  children: React.ReactNode;
  theme: "dark" | "light";
}) => {
  return (
    <Html lang="en" className={theme}>
      <Head>
        <Meta />
      </Head>
      <Body className={theme}>
        {children}
        <ScrollRestoration />
        <Scripts />
      </Body>
    </Html>
  );
};
export default RootDocument;
