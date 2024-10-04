// css
import appCss from "~/styles/tailwind.v3.css?url";

export type Links = Array<
	React.JSX.IntrinsicElements["link"] & {
		crossorigin?: string;
	}
>;

const styles: Links = [
	{
		rel: "stylesheet",
		href: appCss,
	},
];

const pwa: Links = [
	{
		rel: "apple-touch-icon",
		sizes: "180x180",
		href: "/apple-touch-icon.png",
	},
	{
		rel: "icon",
		type: "image/png",
		sizes: "32x32",
		href: "/favicon-32x32.png",
	},
	{
		rel: "icon",
		type: "image/png",
		sizes: "16x16",
		href: "/favicon-16x16.png",
	},
	{ rel: "manifest", href: "/site.webmanifest", color: "#fffff" },
];

const preloads: Links = [
	{
		rel: "preload",
		href: "_build/fonts/Geist/variable/Geist[wght].ttf",
		as: "font",
		type: "font/ttf",
		crossOrigin: "anonymous",
	},
	{
		rel: "prefetch",
		href: "_build/fonts/Geist/ttf/Geist-Regular.ttf?url",
		as: "font",
		type: "font/ttf",
		crossOrigin: "anonymous",
	},
	{
		rel: "preload",
		href: appCss,
		as: "style",
	},
];

export const static_links: Links = [...styles, ...pwa, ...preloads];
