import { Hono } from "hono";
import { PROFILE_ID } from "./config";

const app = new Hono();

app.get("/", (c) => c.text(`Backend for profile ${PROFILE_ID}`));

export default app;
