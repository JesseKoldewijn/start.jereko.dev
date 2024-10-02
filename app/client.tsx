/// <reference types="vinxi/types/client" />
import { StartClient } from "@tanstack/start";
import { createRouter } from "./router";

const hydrateRootLazy = await import("react-dom/client").then(
	(x) => x.hydrateRoot
);

const router = createRouter();

hydrateRootLazy(
	document.getElementById("root")!,
	<StartClient router={router} />
);
