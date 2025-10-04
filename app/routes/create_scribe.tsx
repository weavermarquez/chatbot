import { redirect } from "react-router";
import { Form, useFetcher, useNavigate } from "react-router";
import type { Route } from "./+types/scribe";
import { ScrollArea } from "~/components/ui/scroll-area";
// import { getScribe, updateScribe } from "../data";
// import type { ScribeRecord } from "../data";
import "~/laws-of-form.css";
import { createScribe } from "~/dspy/storyscribe";
import "crypto";

export async function action({ params, request }: Route.ActionArgs) {
  const formData = await request.formData();
  const formDetails = Object.fromEntries(formData);
  const newScribeId = await createScribe(formDetails);
  return redirect(`/scribe/${newScribeId}`);
}

export function StoryStructureList() {
  return (
    <div className="place-self-center ">
      <h1 className="text-[34px] place-self-center font-serif">
        List of Story Structures
      </h1>
      <ScrollArea className="h-[25em] w-[100%] place-self-center rounded-md border p-4">
        <ul>
          <li>
            <h1 className="text-[24px]">Quest</h1>
            <div className="laws-of-form pb-5 text-[15px]">
              R M <span className="text-[27px] font-sans">↽ ⇀ ↽ ⇀ ↽ ⇀</span> M R
            </div>
          </li>
          <li>
            <h1 className="text-[24px]">Transformation</h1>
            <div className="laws-of-form pb-5 text-[15px]">
              R M <span className="text-[27px] font-sans">↽ ⇀</span> M R
            </div>
          </li>
          <li>
            <h1 className="text-[24px]">Trickster</h1>
            <div className="laws-of-form pb-5 text-[15px]">
              R M <span className="text-[27px] font-sans">↽ ⇀ ↽ ⇌ ↽ ⇌</span> M R
            </div>
          </li>
          <li>
            <h1 className="text-[24px]">Rags to Riches</h1>
            <div className="laws-of-form pb-5 text-[15px]">
              R M{" "}
              <span className="text-[27px] font-sans">
                ⇀ ↽ ⇀ ↽ ⇀ ↽ ⇀ <span className="bg-gray-200">↽ ⇀</span>
              </span>{" "}
              M R
            </div>
          </li>
          <li>
            <h1 className="text-[24px]">Death and Rebirth</h1>
            <div className="laws-of-form pb-5 text-[15px]">
              R M{" "}
              <span className="text-[27px] font-sans">
                ↽ ⇀ ↽ ⇀ ↽ ⇀ <span className="bg-gray-200">↽ ⇀</span>
              </span>{" "}
              M R
            </div>
          </li>
          <li>
            <h1 className="text-[24px]">Trickster Variation</h1>
            <div className="laws-of-form pb-5 text-[15px]">
              R M{" "}
              <span className="text-[27px] font-sans">
                ↽ ⇀ ↽ ⇌ <span className="bg-gray-200">↽</span> ⇌
              </span>{" "}
              M R
            </div>
          </li>
          <li>
            <h1 className="text-[24px]">Revelation</h1>
            <div className="laws-of-form pb-5 text-[15px]">R M U</div>
          </li>
          <li>
            <h1 className="text-[24px]">
              Call and Response (with initial Transformation)
            </h1>
            <div className="pb-5">
              <div className="laws-of-form text-[15px]">
                R M{" "}
                <span className="text-[27px] font-sans ">
                  ↽ ⇀
                  <span className="underline pl-2 decoration-wavy decoration-2 decoration-gray-400">
                    ↽ ⇀ ↽ ⇀ ↽ ⇀
                  </span>{" "}
                </span>{" "}
                M R
              </div>
              <div className="laws-of-form text-[15px]">
                <span className="ml-[9.5em] tracking-[0.8em]">R M U</span>
              </div>
            </div>
          </li>
          <li>
            <h1 className="text-[24px]">
              Call and Response (with final Transformation)
            </h1>
            <div className="pb-5">
              <div className="laws-of-form text-[15px]">
                R M{" "}
                <span className="text-[27px] font-sans ">
                  <span className="underline pl-2 decoration-wavy decoration-2 decoration-gray-400">
                    ↽ ⇀ ↽ ⇀ ↽ ⇀
                  </span>{" "}
                  ↽ ⇀
                </span>{" "}
                M R
              </div>
              <div className="laws-of-form text-[15px]">
                <span className="ml-[5.5em] tracking-[0.8em]">R M U</span>
              </div>
            </div>
          </li>
          <li>
            <h1 className="text-[24px]">The Chinese Circular Structure</h1>
            <div className="py-5">
              <div className="laws-of-form text-[15px]">5 0 1 2 3 4 5 6</div>
            </div>
          </li>
          <li>
            <h1 className="text-[24px]">Ki-Sho-Ten-Ketsu</h1>
            <div className="py-5">
              <div className="laws-of-form text-[15px]">
                R M <span className="text-[27px] font-sans">⇀ ⇌</span> M R
              </div>
            </div>
          </li>
          <li>
            <h1 className="text-[24px]">Open-Ended Ki-Sho-Ten-Ketsu</h1>
            <div className="py-5">
              <div className="laws-of-form text-[15px]">
                R M{" "}
                <span className="text-[27px] font-sans">
                  ⇀ <span className="bg-gray-200">⇌</span>
                </span>{" "}
                M R
              </div>
            </div>
          </li>
          <li>
            <h1 className="text-[24px]">Koan</h1>
            <div className="py-5">
              <div className="laws-of-form text-[15px]">
                R M <span className="text-[27px] font-sans">⇌</span>{" "}
                <span className="text-transparent">U</span> R
              </div>
            </div>
          </li>
          <li>
            <h1 className="text-[24px]">Dilemma</h1>
            <div className="pb-5">
              <div
                className="laws-of-form text-[15px] underline underline-offset-[0.6em]
                decoration-gray-200 decoration-1"
              >
                R M <span className="text-[27px] font-sans ">↽ ⇀ ↽ ⇌ ↽ ⇌</span>{" "}
                <span className="text-transparent">0 0</span> M R
              </div>
              <div className="laws-of-form text-[15px]">
                R M
                <span className="ml-[3.7em] text-[27px] tracking-[0.05em] font-sans ">
                  ⇌ ↽ ⇀ ↽ ⇌
                </span>{" "}
                M R
              </div>
            </div>
          </li>
          <li>
            <h1 className="text-[24px]">Riddle</h1>
            <div className="pb-5">
              <div
                className="laws-of-form text-[15px] underline underline-offset-[0.6em]
                decoration-gray-200 decoration-1"
              >
                R M <span className="text-[27px] font-sans ">⇌</span> M R
              </div>
              <div className="laws-of-form text-[15px]">
                R M <span className="text-[27px] font-sans ">⇌</span> M R
              </div>
            </div>
          </li>
          <li>
            <h1 className="text-[24px]">Voyage and Return</h1>
            <div className="laws-of-form text-[15px] pb-5">
              R M{" "}
              <span className="text-[27px] font-sans ">
                ↽ ⇀ <span className="bg-gray-200">↽ ⇀</span> ↽ ⇀
              </span>{" "}
              M R
            </div>
          </li>
          <li className="pb-5">
            <h1 className="text-[24px]">Perpetual Motion</h1>
            <span className="laws-of-form text-[15px]">
              R M{" "}
              <span className="text-[27px] font-sans">↽ ⇀ ↽ ⇀ ↽ ⇀</span>{" "}
            </span>
            <em className="font-bold">&hellip;&hellip;</em>
          </li>
          <li>
            <h1 className="text-[24px]">Creation Myth</h1>
            <span className="laws-of-form text-[15px] pb-5">
              R M <span className="text-[27px] font-sans ">⇀</span>{" "}
            </span>
            <em className="font-bold">&hellip;&hellip;</em>
          </li>
        </ul>
      </ScrollArea>
    </div>
  );
}

export default function CreateScribe({ loaderData }: Route.ComponentProps) {
  // const { scribe } = loaderData;
  const navigate = useNavigate();

  return (
    <div className="w-[100%]">
      <StoryStructureList />
      <h1 className="mt-5 text-size-[20]">
        Enter your core story details here:{" "}
      </h1>
      <Form
        key=""
        id="scribe-form"
        method="post"
        className="flex-col place-self-center place-items-center"
      >
        <br />
        <p className="flex px-5 py-3 items-center">
          <span>Name</span>
          <input
            className="mx-3 px-5 py-3 grow"
            aria-label="Character / Product"
            defaultValue=""
            name="characterName"
            placeholder="Sinbad"
            type="text"
          />
        </p>
        <p className="flex px-5 py-3 items-center">
          <span>Character's starting state</span>
          <input
            className="mx-3 px-5 py-3 grow"
            aria-label="Character Starting State"
            defaultValue=""
            name="characterStartingState"
            placeholder="Jean sees a moment of beauty..."
            type="text"
          />
        </p>
        <label className="flex py-3 items-center">
          <span className="px-5">Central Imbalance</span>
          <input
            className="mx-3 px-5 py-3 grow"
            defaultValue=""
            aria-label="Central Imbalance"
            name="centralImbalance"
            placeholder="Sinbad, having wasted his inheritance..."
            type="text"
          />
        </label>
        <label className="flex py-3 items-center">
          <span className="px-5">Story Structure</span>
          <input
            className="mx-3 px-5 py-3 grow"
            aria-label="Story Structure"
            defaultValue=""
            name="storyStructure"
            placeholder="Quest, Transformation, Kishotenketsu..."
            type="text"
          />
        </label>
        <label className="flex py-3 items-center">
          <span className="px-5">Notes</span>
          <textarea
            className="mx-3 px-2 py-3 grow"
            placeholder="Any additional story details?"
            name="additionalNotes"
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
    </div>
  );
}
