import { defineMiddleware } from "astro:middleware";
import { PUBLIC_ROUTES } from "./constant";

export const onRequest = defineMiddleware((context, next) => {
  console.log("onRequest is active");

  console.log(context.url)

  // Check if the request is for an API route or a public route
  const isApiRoute = context.url.pathname.startsWith('/api/');
  const isPublicRoute = PUBLIC_ROUTES.includes(context.url.pathname);

  // Allow access to all API routes and public routes
  if (isApiRoute || isPublicRoute) {
    console.log("Allowing access to API or public route");
    return next();
  }

  // Block access to non-public routes if the user is not authorized
  const isAuthorized = checkUserAuthorization(context);
  if (!isAuthorized) {
    console.log("User is not authorized");
    return new Response(JSON.stringify({ message: "Unauthorized" }), {
      status: 401,
      headers: {
        'Content-Type': 'application/json',
      },
    });
  }

  console.log("Allowing access to route");
  return next();
});

function checkUserAuthorization(context:any) {
  // Your authorization logic here
  // For example, check for a session cookie or an authorization header
  return false; // Replace with actual check
}