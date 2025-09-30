import type { Route } from "./+types/home";
import { Welcome } from "../welcome/welcome";
import SignUp from "./signup";
import SignIn from "./signin";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "New React Router App" },
    { name: "description", content: "Welcome to React Router!" },
  ];
}

export default function Home() {
  return (
    <div>
      <p>Sign In!!</p>
      <SignIn />
      <br />
      <p>Sign Up!!</p>
      <SignUp />
    </div>
  );
}
