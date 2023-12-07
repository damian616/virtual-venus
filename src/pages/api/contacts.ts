import type { APIRoute } from "astro";

export const GET: APIRoute = async () => {
    console.log('running API contact')
  try {
    // Perform any logic you need for handling the contact request
    const contactData = {
      message: 'Hello from the contact endpoint in backend!',
    };

    return new Response(JSON.stringify(contactData), {
      status: 200,
      headers: {
        'Content-Type': 'application/json',
      },
    });
  } catch (error) {
    console.error('Error processing contact request:', error);
    return new Response('Internal Server Error', { status: 500 });
  }
};