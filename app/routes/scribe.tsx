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

// import { List2 } from "~/components/ui/list-2";
import "~/laws-of-form.css";
import storiesJson from "~/dspy/stories.json";
// console.log(colorsJson.primaryBright);

import {
  ArrowRight,
  Award,
  Building2,
  HeartHandshake,
  Leaf,
  Lightbulb,
  Trophy,
} from "lucide-react";
import React from "react";

import { Button } from "~/components/ui/button";
import { Separator } from "~/components/ui/separator";

interface ListItem {
  icon: React.ReactNode;
  title: string;
  category: string;
  description: string;
  link: string;
}

interface List2Props {
  heading?: string;
  items?: ListItem[];
}

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

// export default function Scribe({ loaderData }: Route.ComponentProps) {
//   const { scribe, params } = loaderData;

//   return (
//     <div id="scribe">
//       {
//         // Details about the scribe specified by scribeId
//       }
//       <h1>This is the Scribe of ID {params.id}</h1>

//       <List2 heading="Bare Bones Story" items={["one", "two"]} />
//     </div>
//   );
// }

export async function loader({ params }: Route.LoaderArgs) {
  const scribe = "123"; // [] await getScribe(params.scribeId);
  // TODO Implement a permissive getScribe case like in react_router tutorial
  // if (!scribe) {
  //   throw new Response("Not Found", { status: 404 });
  // }
  const stories = storiesJson;
  const heading = "Bare Bones Structure";
  console.log("server GET on /scribe/", params.id);
  return { heading, stories, scribe, params };
}

export default function Scribe({ loaderData }: Route.ComponentProps) {
  const { heading, stories, scribe, params } = loaderData;
  const storyBeats = stories[4].beats;

  return (
    <section className="py-32">
      <div className="container mx-auto px-0 md:px-8">
        <h1 className="mb-10 px-4 text-3xl font-semibold md:mb-14 md:text-4xl">
          {heading}
        </h1>
        <div className="flex flex-col">
          <Separator />
          {storyBeats.map((beat, index) => (
            <React.Fragment key={index}>
              <div className="grid storys-center gap-4 px-4 py-5 md:grid-cols-4">
                <div className="order-2 flex items-center gap-2 md:order-none">
                  <span className="laws-of-form flex h-14 w-16 shrink-0 items-center justify-center rounded-md bg-muted">
                    {beat.symbol}
                  </span>
                  <div className="flex flex-col gap-1">
                    <h3 className="font-semibold">{beat.label}</h3>
                    <p className="text-sm text-muted-foreground">
                      {beat.summary}
                    </p>
                  </div>
                </div>
                <p className="order-1 text-xl font-semibold md:order-none md:col-span-2">
                  {beat.label}
                </p>
                <Button variant="outline" asChild></Button>
              </div>
              <Separator />
            </React.Fragment>
          ))}
        </div>
      </div>
    </section>
  );
}
