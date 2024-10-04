type DescriptionOverrides = {
	path: string;
	desc: string;
}[];

/**
 * The `AppBrandingConfig` class defines branding
 * configurations for this application, including page
 * titles and creator information.
 */
export class AppBrandingConfig {
	private static title = {
		baseline: "Tanstack Start - Jereko",
		seperator: "|",
	};

	private static description = {
		baseline:
			"Tanstack Start - Jereko | A typesafe and performant setup using Tanstack Start, Typescript, Shadcn/ui and TailwindCSS.",
		overrides: [] as DescriptionOverrides,
	};

	private static creator = {
		tag: "@dull_joker",
	};

	private static application = {
		openGraph: {
			type: "website",
		},
	};

	public static getPageTitle = (page?: string) => {
		const isIndex = String(page).includes("index") || String(page) == "/";
		if (!page || page === "index" || isIndex) {
			return this.title.baseline;
		}
		const capitalizedTitle = page.charAt(0).toUpperCase() + page.slice(1);
		return `${capitalizedTitle} ${this.title.seperator} ${this.title.baseline}`;
	};

	public static getPageDescription = (page?: string) => {
		const isIndex = String(page).includes("index") || String(page) == "/";
		if (!page || page === "index" || isIndex) {
			return this.description.baseline;
		}
		const descOverride = this.description.overrides.find(
			(o) => o.path === page
		);
		return descOverride ? descOverride.desc : this.description.baseline;
	};

	public static getConfig = () => ({
		creator: this.creator,
		application: this.application,
	});
}
