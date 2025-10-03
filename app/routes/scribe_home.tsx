import { redirect } from "react-router";
import { auth } from "~/lib/auth";
import type { Route } from "./+types/scribe_home";

export default function ScribeHome({ loaderData }: Route.ComponentArgs) {
  return (
    <p id="scribe-index-page">
      <p>Here, place your story details here!</p>
      This is a demo for React Router.
      <br />
      Check out{" "}
      <a href="https://reactrouter.com">the docs at reactrouter.com</a>.
    </p>
  );
}
