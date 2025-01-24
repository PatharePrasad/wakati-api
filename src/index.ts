import createApp from "@/lib/create-app";
import configureOpenAPI from "./lib/configure-openapi";

const app = createApp();

configureOpenAPI(app);

app.get("/err", (c) => {
  throw new Error("What's this");
});

app.get("/", (c) => {
  return c.json({ message: "Hello from our API" });
});

app.get("/analyze", (c) => {
  return c.json({ message: "Working api " });
});

export default app;