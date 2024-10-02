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
	component: Home,
	loader: async () => await getDate(),
});

function Home() {
	const state = Route.useLoaderData();

	return <div>{state.date}</div>;
}
