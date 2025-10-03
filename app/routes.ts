import { type RouteConfig } from "@react-router/dev/routes";
import { index, layout, route } from "@react-router/dev/routes";

export default [
  index("routes/home.tsx"),
  route("api/auth/*", "routes/api.auth.$.ts"),
  route("logout", "routes/logout.tsx"),

  layout("layouts/scribe_sidebar.tsx", [
    route("scribe", "routes/scribe.tsx"), // /scribe redirects to /scribe/new
    route("scribe/new", "routes/create_scribe.tsx"), // /scribe/new
    route("scribe/:id", "routes/scribe.tsx"), // Main Workspace
    route("scribe/:id/v/:version", "routes/scribe.tsx"), //
  ]),
  // route("narrative", "routes/narrative_home.tsx"),
  // route("scribe/:id/patterning", "routes/patterning.tsx"),
  // route("scribe/:id/narrative", "routes/narrative.tsx"),
] satisfies RouteConfig;
