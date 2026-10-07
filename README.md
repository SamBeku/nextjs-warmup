# Next.js Warm-up

A tiny Next.js (App Router) application made for practice.

## Features

- `/` – welcome page (Server Component) with a counter and a server message
- `/about` – a short introduction
- `app/components/Counter.jsx` – interactive counter (Client Component)
- `app/components/ServerMessage.jsx` – loads a message from the API with loading and error states
- `app/api/message/route.js` – `GET /api/message` returns `{ "message": "Hello from the Next.js backend!" }`

## Running the project

```bash
npm install
npm run dev
```

Open http://localhost:3000 in the browser.

Production build:

```bash
npm run build
```

## What I learned

1. **What does Next.js provide beyond React alone?**
   Next.js adds file-based routing, server rendering, Server Components and API route handlers, so the frontend and backend can live in one project. It also provides a ready build setup and optimisations such as `next/link` and `next/image`.

2. **Why does the counter need `'use client'`?**
   The counter uses `useState` and a click handler, which only work in the browser. `'use client'` marks the component as a Client Component so its JavaScript is sent to the browser.

3. **Where does the code in `app/api/message/route.js` run?**
   It runs on the server (in Node.js), not in the user's browser.

4. **How is this endpoint similar to an Express route?**
   Like `app.get('/api/message', ...)` in Express, it handles a GET request for a specific path and sends back a JSON response. In Next.js the path comes from the folder structure and the HTTP method from the exported function name.

5. **Why must secrets remain on the server?**
   Everything sent to the browser can be seen by the user, so API keys or database passwords there could be stolen and misused. On the server they stay hidden and only the result is sent to the client.
