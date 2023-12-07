import type { APIRoute } from "astro";

// Define a POST APIRoute
export const POST: APIRoute = async (ctx) => {
    try {
      // Assuming you are expecting JSON data in the request body
      const requestData = await ctx.request.json();
      console.log(requestData);
  
      // Perform any logic you need for handling the POST request
      // For example, you might save the data to a database
      const responseData = {
        message: 'Data received successfully!',
        receivedData: requestData,
      };
  
      return new Response(JSON.stringify(responseData), {
        status: 200,
        headers: {
          'Content-Type': 'application/json',
        },
      });
    } catch (error) {
      console.error('Error processing POST request:', error);
      return new Response('Internal Server Error', { status: 500 });
    }
  };