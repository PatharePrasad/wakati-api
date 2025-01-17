import { Hono } from "hono";

const app = new Hono();

app.get("/", async (c) => {
  const result = await c.env.AI.run("@cf/meta/llama-3.1-8b-instruct", {
    messages: [
      {
        role: "user",
        content: "Hey there ai",
      },
    ],
  });

  console.log(result);

  return c.json({ result });
});

app.post("/analyze", async (c) => {
  const body = await c.req.json();

  const result = await c.env.AI.run("@cf/meta/llama-3.1-8b-instruct", {
    messages: [
      {
        role: "user",
        content: body.prompt,
      },
    ],
  });

  console.log(result);

  return c.json({ result });
});

export default app;