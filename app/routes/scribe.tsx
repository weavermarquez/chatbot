import { Form, useFetcher } from "react-router";
import type { Route } from "./+types/scribe";

// import { getScribe, updateScribe } from "../data";
// import type { ScribeRecord } from "../data";

export async function action({ params, request }: Route.ActionArgs) {
  console.log("server POST on /scribe/", params.scribeId);
  // const formData = await request.formData();
  // return updateScribe(params.scribeId, {
  //   favorite: formData.get("favorite") === "true",
  // });
  return;
}

export async function loader({ params }: Route.LoaderArgs) {
  const scribe = ""; // [] await getScribe(params.scribeId);
  // TODO Implement a permissive getScribe case like in react_router tutorial
  if (!scribe) {
    throw new Response("Not Found", { status: 404 });
  }
  console.log("server GET on /scribe/", params.scribeId);
  return { scribe, params };
}

export default function Scribe({ loaderData }: Route.ComponentProps) {
  const { scribe, params } = loaderData;

  return (
    <div id="scribe">
      {
        // Details about the scribe specified by scribeId
      }
      <h1>This is the Scribe of ID {params.scribeId}</h1>
      <div>
        <div>
          <Form action="edit">
            <button type="submit">Edit</button>
          </Form>

          <Form
            action="destroy"
            method="post"
            onSubmit={(event) => {
              const response = confirm(
                "Please confirm you want to delete this record.",
              );
              if (!response) {
                event.preventDefault();
              }
            }}
          >
            <button type="submit">Delete</button>
          </Form>
        </div>
      </div>
    </div>
  );
}
