import { Form, useFetcher, useNavigate } from "react-router";
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
//
//

export default function CreateScribe({ loaderData }: Route.ComponentProps) {
  // const { scribe } = loaderData;
  const navigate = useNavigate();

  return (
    <>
      <Form
        key=""
        id="scribe-form"
        method="post"
        className="flex-col place-self-center items-center"
      >
        <h1>Enter details for a new Scribe Project</h1>
        <br />
        <p className="flex px-5 py-3 items-center">
          <span>Name</span>
          <input
            className="mx-3 px-5 py-3 grow"
            aria-label="Character / Product"
            defaultValue=""
            name="character"
            placeholder="Character / Product"
            type="text"
          />
        </p>
        <label className="flex py-3 items-center">
          <span className="px-5">Central Imbalance</span>
          <input
            className="mx-3 px-5 py-3 grow"
            defaultValue=""
            name="twitter"
            placeholder="Central Imbalance"
            type="text"
          />
        </label>
        <label className="flex py-3 items-center">
          <span className="px-5">Story Structure</span>
          <input
            className="mx-3 px-5 py-3 grow"
            aria-label="Story Structure"
            defaultValue=""
            name="structure"
            placeholder="Choose your Story Structure"
            type="text"
          />
        </label>
        <label className="flex py-3 items-center">
          <span className="px-5">Notes</span>
          <textarea
            className="mx-3 px-2 py-3 grow"
            placeholder="Any additional story details?"
            name="notes"
            rows={6}
          />
        </label>

        <p className="flex place-self-center place-items-center">
          <button
            type="submit"
            className="inline-flex
            items-center
            justify-center
            border-transparent bg-indigo-500
            px-5 py-3
            text-base
            font-medium
            text-white
            hover:bg-indigo-700
            shadow-lg
            border
            rounded-md"
          >
            Save
          </button>
          <button
            type="button"
            className="inline-flex
            items-center
            justify-center
            border-transparent
            bg-white
            px-5 py-3
            text-base
            font-medium
            text-indigo-500
            hover:bg-indigo-50
            shadow-lg
            border
            rounded-md"
            onClick={() => navigate(-1)}
          >
            Cancel
          </button>
        </p>
      </Form>
    </>
  );
}
