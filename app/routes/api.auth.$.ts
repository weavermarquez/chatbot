import { auth } from "~/lib/auth"; // Adjust the path as necessary
// import type { LoaderFunctionArgs, ActionFunctionArgs } from "@remix-run/node";
import type { Route } from "./+types/api.auth.$.ts";

export async function loader({ request }: Route.LoaderArgs) {
  return auth.handler(request);
}

export async function action({ request }: Route.ActionArgs) {
  return auth.handler(request);
}
