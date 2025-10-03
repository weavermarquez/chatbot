import { Form, useFetcher } from "react-router";
import type { Route } from "./+types/scribe";

// import { getScribe, updateScribe } from "../data";
// import type { ScribeRecord } from "../data";

export async function action({ params, request }: Route.ActionArgs) {
  // console.log("server POST on /scribe/", params.scribeId);
  // const formData = await request.formData();
  // return updateScribe(params.scribeId, {
  //   favorite: formData.get("favorite") === "true",
  // });
  return;
}

// export async function loader({ params }: Route.LoaderArgs) {
//   return { scribe, params };
// }

export default function CreateScribe() {
  return (
    <>
      <h1>Hello we are making a new Scribe Project</h1>
      <p id="scribe-index-page">
        Here, place your story details here! This is a demo for React Router.
        Check out{" "}
        <a href="https://reactrouter.com">the docs at reactrouter.com</a>.
      </p>
    </>
  );
}
