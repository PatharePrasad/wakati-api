import { createRoute, z } from "@hono/zod-openapi";
import { createRouter } from "@/lib/create-app";
import type { Context } from "hono";

const router = createRouter().openapi(
  createRoute({
    method: "post",
    path: "status",
    request: {
      body: {
        content: {
          "application/json": {
            schema: z.object({
              text: z.string().url(),
            }),
          },
        },
      },
    },
    responses: {
      200: {
        content: {
          "application/json": {
            schema: z.object({
              message: z.string(),
            }),
          },
        },
        description: "Retrieve the user",
      },
    },
  }),
  async (c: Context) => {
    const data = await c.req.json();
    return c.json({ message: data.text }, 200);
  }
);

export default router;