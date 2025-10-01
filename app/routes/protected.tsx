import {
  redirect,
  type ActionFunctionArgs,
  type LoaderFunctionArgs,
} from "react-router";
import { auth } from "~/lib/auth";
import { authClient } from "~/lib/auth-client";
import type { Route } from "./+types/protected";

export async function loader({ request }: Route.LoaderArgs) {
  const session = await auth.api.getSession({ headers: request.headers });
  if (session?.user) {
    return { user: session.user };
  } else {
    throw redirect("/");
  }
}

export async function action({ request }: Route.ActionArgs) {
  return auth.handler(request);
}

export default function Protected({ loaderData }: Route.ComponentProps) {
  return <div>Hello, {JSON.stringify(loaderData.user.email)}!</div>;
}
