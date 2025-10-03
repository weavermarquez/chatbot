import type { Route } from "./+types/home";
import { Welcome } from "../welcome/welcome";
import { authClient } from "~/lib/auth-client";
import SignUp from "./signup";
import SignIn from "./signin";

import { ai, ax } from "@ax-llm/ax";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "New React Router App" },
    { name: "description", content: "Welcome to React Router!" },
  ];
}

export default function Home({ loaderData }: Route.ComponentProps) {
  const { data, isPending, error } = authClient.useSession();

  if (data) {
    return (
      <div>
        <h1>Hello, {data.user.email}!</h1>
      </div>
    );
  } else {
    return (
      <div>
        <SignIn />
        <br />
        <SignUp />
      </div>
    );
  }
}
