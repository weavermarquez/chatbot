import type { Route } from "./+types/home";
import { Welcome } from "../welcome/welcome";
import { authClient } from "~/lib/auth-client";
import SignUp from "./signup";
import SignIn from "./signin";

import { ai, ax } from "@ax-llm/ax";
import "dotenv/config";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "New React Router App" },
    { name: "description", content: "Welcome to React Router!" },
  ];
}

export async function loader({ params }: Route.LoaderArgs) {
  const llm = ai({
    name: "openai",
    config: { model: "gpt-4o" },
    apiKey: process.env.OPENAI_APIKEY!,
  });

  const basicPrompt = ax("conversation:string -> assistantResponse:string");

  async function converse(inputMessage: string) {
    const result = await basicPrompt.forward(llm, {
      conversation: inputMessage,
    });

    console.log("Assistant:", result.assistantResponse);
    return result.assistantResponse;
  }

  const modelResponse = await converse("Hello there, you're live on air!");

  return { modelResponse };
}

export default function Home({ loaderData }: Route.ComponentProps) {
  const { data, isPending, error } = authClient.useSession();

  if (data) {
    return (
      <div>
        <h1>Hello, {data.user.email}!</h1>
        <h2>{loaderData.modelResponse}</h2>
      </div>
    );
  } else {
    return (
      <div>
        <SignIn />
        <SignUp />
        <br />
        <h2>AxLLM: {loaderData.modelResponse}</h2>
      </div>
    );
  }
}
