import type { APIRoute } from "astro";

export const GET: APIRoute = (ctx: any) => {
    return new Response(
      JSON.stringify({
        message: "You're logged in now!",
      }),
      { status: 200 }
    );
  };