export default async (req) => {
  if (req.method !== 'POST') {
    return new Response('Method not allowed', { status: 405 });
  }

  let email;
  try {
    const body = await req.json();
    email = body.email;
  } catch {
    return new Response('Invalid request body', { status: 400 });
  }

  if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    return new Response('Invalid email', { status: 400 });
  }

  const pubId = process.env.BEEHIIV_PUB_ID;
  const apiKey = process.env.BEEHIIV_API_KEY;

  if (!pubId || !apiKey) {
    return new Response('Newsletter not configured', { status: 500 });
  }

  const res = await fetch(
    `https://api.beehiiv.com/v2/publications/${pubId}/subscriptions`,
    {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${apiKey}`,
      },
      body: JSON.stringify({ email, reactivate_existing: true }),
    }
  );

  if (!res.ok) {
    return new Response('Subscription failed', { status: 502 });
  }

  return new Response('OK', { status: 200 });
};

export const config = { path: '/api/subscribe' };
