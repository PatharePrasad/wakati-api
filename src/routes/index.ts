import { createRoute, z } from "@hono/zod-openapi";
import { createRouter } from "@/lib/create-app";
import type { Context } from "hono";

const router = createRouter().openapi(
  createRoute({
    method: "get",
    path: "status",
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
  (c: Context) => {
    return c.json({ message: "Our API is working wow" }, 200);
  }
);

export default router;