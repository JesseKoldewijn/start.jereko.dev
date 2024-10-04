import {
	AnyContext,
	AnySearchSchema,
	RouteMatch,
} from "@tanstack/react-router";
import { AppBrandingConfig } from "config/branding";

export type Meta = React.JSX.IntrinsicElements["meta"];

export const seo = ({
	title,
	description,
	keywords,
	image,
	pathName,
}: {
	title?: string;
	description?: string;
	image?: string;
	keywords?: string;
	pathName?: string;
}) => {
	const tags: Meta[] = [
		{ title: title ?? AppBrandingConfig.getPageTitle(pathName) },
		{
			name: "description",
			content:
				description ?? AppBrandingConfig.getPageDescription(pathName),
		},
		{ name: "keywords", content: keywords },
		{ name: "twitter:title", content: title },
		{ name: "twitter:description", content: description },
		{
			name: "twitter:creator",
			content: AppBrandingConfig.getConfig().creator.tag,
		},
		{
			name: "twitter:site",
			content: AppBrandingConfig.getConfig().creator.tag,
		},
		{
			name: "og:type",
			content: AppBrandingConfig.getConfig().application.openGraph.type,
		},
		{ name: "og:title", content: title },
		{ name: "og:description", content: description },
		...(image
			? [
					{ name: "twitter:image", content: image },
					{ name: "twitter:card", content: "summary_large_image" },
					{ name: "og:image", content: image },
				]
			: []),
	];

	return tags;
};

export const getPageMeta = (
	ctx: RouteMatch<"__root__", "", {}, AnySearchSchema, {}, AnyContext, {}>
) => {
	return {
		pathName: ctx.pathname,
		title: AppBrandingConfig.getPageTitle(
			ctx.meta?.find((x) => (x.name = "title"))?.content
		),
		description:
			ctx.meta?.find((x) => x.name === "description")?.content ||
			AppBrandingConfig.getPageDescription(ctx.pathname),
	};
};
