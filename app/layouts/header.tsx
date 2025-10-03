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
import type { Route } from "./+types/header";

import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "~/components/ui/sheet";

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

export default function HeaderLayout({ loaderData }: Route.ComponentProps) {
  const { narratives, q } = loaderData;
  const navigation = useNavigation();
  const submit = useSubmit();

  return (
    <>
      <div id="header">
        <h1>
          <h2>HEADER</h2>
        </h1>
        <Sheet>
          <SheetTrigger>Open</SheetTrigger>
          <SheetContent>
            <SheetHeader>
              <SheetTitle>Are you absolutely sure?</SheetTitle>
              <SheetDescription>
                This action cannot be undone. This will permanently delete your
                account and remove your data from our servers.
              </SheetDescription>
            </SheetHeader>
          </SheetContent>
        </Sheet>
      </div>
    </>
  );
}
