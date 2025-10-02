import { type RouteConfig } from "@react-router/dev/routes";
import { index, layout, route } from "@react-router/dev/routes";

export default [
  index("routes/home.tsx"),
  route("protected", "routes/protected.tsx"),
  route("api/auth/*", "routes/api.auth.$.ts"),
  route("signout", "routes/signout.tsx"),
  layout("layouts/sidebar.tsx", [
    route("narrative", "routes/narrative_home.tsx"),
    route("narrative/:narrativeId", "routes/narrative.tsx"),
    // route("narrative/:narrativeId/edit", "routes/edit-narrative.tsx"),
    // route("narrative/:narrativeId/destroy", "routes/destroy-narrative.tsx"),
  ]),
] satisfies RouteConfig;
