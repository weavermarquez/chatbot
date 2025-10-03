import {
  Form,
  Link,
  Outlet,
  NavLink,
  useNavigation,
  useSubmit,
  redirect,
} from "react-router";
import { useState, useEffect } from "react";
import { auth } from "~/lib/auth";
import type { Route } from "./+types/sidebar";

type Narrative = string;

export async function action({ request }: Route.ActionArgs) {
  return auth.handler(request);
}

export async function loader({ request }: Route.LoaderArgs) {
  console.log("Checking if user is logged in");
  const session = await auth.api.getSession({ headers: request.headers });
  if (!session?.user) {
    throw redirect("/login");
  }

  const url = new URL(request.url);
  const q = url.searchParams.get("q");
  const narratives: Narrative[] = [];

  return { narratives, user: session.user, q };
}

export default function SidebarLayout({ loaderData }: Route.ComponentProps) {
  const { narratives, q } = loaderData;
  const navigation = useNavigation();
  const submit = useSubmit();
  const searching =
    navigation.location &&
    new URLSearchParams(navigation.location.search).has("q");

  const [query, setQuery] = useState(q || "");

  useEffect(() => {
    const searchField = document.getElementById("q");
    if (searchField instanceof HTMLInputElement) {
      searchField.value = q || "";
    }
  }, [q]);

  return (
    <>
      <div id="sidebar">
        <h1>
          <h2>Hello, {JSON.stringify(loaderData.user.email)}!</h2>
          <Link to="about">React Router Narratives</Link>
        </h1>
        <div>
          <Form
            id="search-form"
            onChange={(event) => {
              const isFirstSearch = q === null;
              console.log("isfirstsearch", isFirstSearch, "q:", q);
              submit(event.currentTarget, {
                replace: !isFirstSearch,
              });
            }}
            role="search"
          >
            <input
              aria-label="Search narratives"
              defaultValue={q || ""}
              id="q"
              name="q"
              placeholder="Search"
              type="search"
              onChange={(event) => setQuery(event.currentTarget.value)}
              className={searching ? "loading" : ""}
            />
            <div aria-hidden hidden={!searching} id="search-spinner" />
          </Form>
          <Form method="post">
            <button type="submit">New</button>
          </Form>
        </div>
        <nav>
          {
            // List out <ul>Narrative Item possibly with NavLink</ul>
            <p>
              <i>No narratives</i>
            </p>
          }
        </nav>
      </div>
      <div id="detail">
        <Outlet />
      </div>
    </>
  );
}
