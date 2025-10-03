import { redirect } from "react-router";
import type { Route } from "./+types/scribe_home";

export async function loader({ request }: Route.LoaderArgs) {
  return redirect("./new");
}
