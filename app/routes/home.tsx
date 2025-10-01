import type { Route } from "./+types/home";
import { Welcome } from "../welcome/welcome";
import { authClient } from "~/lib/auth-client";
import SignUp from "./signup";
import SignIn from "./signin";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "New React Router App" },
    { name: "description", content: "Welcome to React Router!" },
  ];
}

export default function Home() {
  const { data, isPending, error } = authClient.useSession();
  if (data) {
    return <div>Hello, {data.user.email}!</div>;
  } else {
    return (
      <div>
        <SignIn />
        <SignUp />
      </div>
    );
  }
}
