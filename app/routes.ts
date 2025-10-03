import { type RouteConfig } from "@react-router/dev/routes";
import { index, layout, route } from "@react-router/dev/routes";

export default [
  layout("layouts/header.tsx", [
    index("routes/home.tsx"),
    route("api/auth/*", "routes/api.auth.$.ts"),
    route("signin", "routes/signin.tsx"),
    route("logout", "routes/logout.tsx"),
    layout("layouts/scribe_sidebar.tsx", [
      route("scribe", "routes/scribe_home.tsx"), // /scribe redirects to /scribe/new
      route("scribe/new", "routes/create_scribe.tsx"), // /scribe/new
      route("scribe/:id", "routes/scribe.tsx"), // Main Workspace
      route("scribe/:id/v/:version", "routes/update_scribe.tsx"), //
    ]),
  ]),
] satisfies RouteConfig;
