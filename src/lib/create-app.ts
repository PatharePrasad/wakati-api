import { OpenAPIHono } from "@hono/zod-openapi";
import { notFound, onError } from "stoker/middlewares";
import logger from "@/middleware/logger";

export function createRouter() {
  const app = new OpenAPIHono({
    strict: false,
  });
  return app;
}

export default function createApp() {
  const app = createRouter()
  app.use(logger());
  app.notFound(notFound);
  app.onError(onError);

  return app;
}
