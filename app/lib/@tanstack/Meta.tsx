import { useRouter } from "@tanstack/react-router";

export function Html({ children, ...props }: React.HTMLProps<HTMLHtmlElement>) {
  const router = useRouter();

  // warning(
  //   !Object.keys(props).length,
  //   'Passing props other than children to the Html component will be supported very soon in React 19.',
  // )

  if (!router.isServer) {
    return <>{children}</>;
  }

  return <html {...props}>{children}</html>;
}
