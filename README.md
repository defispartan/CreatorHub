# CreatorHub

Open Source fullstack template to host your own Lens profile frontend.

Backend is a self-hosted Lens Protocol indexer for your profile + relayer to support gasless interactions. The frontend dynamically displays Lens profile content.

## Powered By

- Frontend: Bun + Vite + React + TypeScript + viem
- Backend: Bun + Hono + TypeScript + SQLite3

## Run Locally

Make sure you have Bun installed locally:

`curl -fsSL https://bun.sh/install | bash`

In separate terminals, run:

- Frontend with `bun run dev` in `frontend/` directory
- Backend with `bun run dev` in `backend/` directory

By default, backend will run on `127.0.0.1:3000` and frontend will run on `127.0.0.1:5173`. The frontend will connect to backend by listening to `VITE_BACKEND_PATH` URL in `/frontend/.env`.
