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
import "~/laws-of-form.css";

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
      <Sheet>
        <div className="flex place-self-center place-items-center">
          <SheetTrigger
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
            OpenButton
          </SheetTrigger>
          <a
            href="/"
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
          >
            Log Out
          </a>
        </div>

        <SheetContent side="left" className="w-[400px] sm:w-[540px]">
          <SheetHeader>
            <SheetTitle>Are you absolutely sure?</SheetTitle>
            <SheetDescription>
              This action cannot be undone. This will permanently delete your
              account and remove your data from our servers.
            </SheetDescription>
          </SheetHeader>
        </SheetContent>
      </Sheet>
      <br />
      <Outlet />
    </>
  );
}
