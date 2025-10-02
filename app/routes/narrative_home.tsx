import { redirect } from "react-router";
import { auth } from "~/lib/auth";
import type { Route } from "./+types/narrative_home";

export default function NarrativeHome({ loaderData }: Route.ComponentArgs) {
  return (
    <p id="narrative-index-page">
      This is a demo for React Router.
      <br />
      Check out{" "}
      <a href="https://reactrouter.com">the docs at reactrouter.com</a>.
    </p>
  );
}
