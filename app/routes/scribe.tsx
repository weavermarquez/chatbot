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

import { tabScribe, tabBeats } from "~/db/schema/schema";
import { db } from "~/lib/drizzle";
import { eq, asc, sql } from "drizzle-orm";

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

export async function action({ params, request }: Route.ActionArgs) {
  console.log("server POST on /scribe/", params.id);
}

export async function loader({ params }: Route.LoaderArgs) {
  if (params.id == "123") {
    const newScribe = storiesJson.at(14);
    const storyBeats = newScribe.beats;

    return { newScribe, storyBeats };
  }

  const scribe = await db.query.tabScribe.findFirst({
    where: eq(tabScribe.id, params.id),
  });

  const storyBeats = await db.query.tabBeats.findMany({
    where: eq(tabBeats.scribeId, params.id),
    orderBy: [asc(tabBeats.idx)],
  });
  console.log("server GET on /scribe/", params.id);
  return { scribe, storyBeats };
}

export default function Scribe({ loaderData }: Route.ComponentProps) {
  const { scribe, storyBeats } = loaderData;

  return (
    <section className="py-32">
      <div className="container mx-auto px-0 md:px-8">
        <h1 className="mb-10 px-4 text-3xl font-semibold md:mb-14 md:text-4xl">
          {scribe?.title}
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
                    <h3 className="font-semibold text-muted-foreground">
                      {beat.label}
                    </h3>
                  </div>
                </div>
                <p className="order-1 text-xl font-semibold md:order-none md:col-span-2">
                  {beat.summary}
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
