# CreatorHub

Open Source fullstack template to create, distribute, and monetize your content.

A single docker container containing a backend and frontend to host your content. Backend is a self-hosted Lens Protocol indexer for your profile + relayer to support gasless interactions. The frontend dynamically displays your Lens profile content.

## Powered By

- Lens Protocol
- PocketBase backend (sqlite db, admin dashboard)
- Bun + Vite + React + Typescript frontend
- Docker deployment

## Run Locally

Run

`./pocketbase serve`

Note: If command returns permission error, may need to `chmod +x pocketbase` to set execute permissions

This will launch a webserver with the following routes:

- `http://http://127.0.0.1:8090` : Frontend
- `http://http://127.0.0.1:8090/_`: Admin dashboard UI
- `http://http://127.0.0.1:8090/api`: REST API

There a few options to run the frontend locally. To avoid re-building during development, in a separate terminal be sure you have bun installed, then start frontend with:

`bun && bun dev`

or you can run a static version of the site with your local Pocketbase instance:

`bun build`
`./pocketbase serve`

or you can run a static version through docker (currently Dockerfile not setup to work with Bun, will be re-added later)

`docker build -t my-app .`
`docker run -it -rm -p 8090:8090 my-app`

## Production

This project exposes a single Dockerfile which contains the entire app and can be deployed virtually anywhere, but be sure to add a database volume of `pb_data` to persist data between instances

### Example

[Fly.io](https://fly.io/) can be used to create a free hosted instance in minutes with the following steps:

1.) [Install fly](https://fly.io/docs/hands-on/install-flyctl/)
2.) `fly auth login`
3.) `fly launch` - Create name and select `no` for everything
4.) `fly volumes create pb_data --size=1`

Manually add this to the bottom of `fly.toml` to locate the directory to be mounted:

```
  [mounts]
    destination = "/pb/pb_data"
    source = "pb_data"
```

5.) `fly deploy`
