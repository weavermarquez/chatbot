import { Form, useFetcher } from "react-router";
import type { Route } from "./+types/scribe";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "~/components/ui/table";

import { List2 } from "~/components/ui/list-2";

// import { getScribe, updateScribe } from "../data";
// import type { ScribeRecord } from "../data";

export async function action({ params, request }: Route.ActionArgs) {
  console.log("server POST on /scribe/", params.id);
  // const formData = await request.formData();
  // return updateScribe(params.scribeId, {
  //   favorite: formData.get("favorite") === "true",
  // });
  return;
}

export async function loader({ params }: Route.LoaderArgs) {
  const scribe = "123"; // [] await getScribe(params.scribeId);
  // TODO Implement a permissive getScribe case like in react_router tutorial
  // if (!scribe) {
  //   throw new Response("Not Found", { status: 404 });
  // }
  console.log("server GET on /scribe/", params.id);
  return { scribe, params };
}

export default function Scribe({ loaderData }: Route.ComponentProps) {
  const { scribe, params } = loaderData;

  return (
    <div id="scribe">
      {
        // Details about the scribe specified by scribeId
      }
      <h1>This is the Scribe of ID {params.id}</h1>

      <List2 />
    </div>
  );
}
