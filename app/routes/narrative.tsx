import { Form, useFetcher } from "react-router";
import type { Route } from "./+types/narrative";

// import { getNarrative, updateNarrative } from "../data";
// import type { NarrativeRecord } from "../data";

export async function action({ params, request }: Route.ActionArgs) {
  console.log("server POST on /narrative/", params.narrativeId);
  // const formData = await request.formData();
  // return updateNarrative(params.narrativeId, {
  //   favorite: formData.get("favorite") === "true",
  // });
  return;
}

export async function loader({ params }: Route.LoaderArgs) {
  const narrative = ""; // [] await getNarrative(params.narrativeId);
  // TODO Implement a permissive getNarrative case like in react_router tutorial
  if (!narrative) {
    throw new Response("Not Found", { status: 404 });
  }
  console.log("server GET on /narrative/", params.narrativeId);
  return { narrative, params };
}

export default function Narrative({ loaderData }: Route.ComponentProps) {
  const { narrative, params } = loaderData;

  return (
    <div id="narrative">
      {
        // Details about the narrative specified by narrativeId
      }
      <h1>This is the Narrative of ID {params.narrativeId}</h1>
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
