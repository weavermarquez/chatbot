import { type RouteConfig } from "@react-router/dev/routes";
import { index, layout, route } from "@react-router/dev/routes";

export default [
  index("routes/home.tsx"),
  route("protected", "routes/protected.tsx"),
  route("api/auth/*", "routes/api.auth.$.ts"),
] satisfies RouteConfig;
