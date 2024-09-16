import Elysia from "elysia";
import { PORT } from "./env";
import { rootRoutes } from "./routes/rootRoutes";
import { userRoutes } from "./routes/userRoutes";

new Elysia({ prefix: "/api/charts" })
  .use(rootRoutes)
  .use(userRoutes)
  .listen(PORT, async () => {
    console.log(
      `${new Date().toLocaleString(
        "en-GB"
      )} [INFO] Server is up on port: ${PORT}`
    );
  });
