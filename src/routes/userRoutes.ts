import Elysia from "elysia";

export const userRoutes = new Elysia({ prefix: "/user" }).get("/a", () => "a");
