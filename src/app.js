import express from "express"; // express module

import routes from "./app.routes.js";

const app = express();

/// sets
app.set("PORT", 3000);

/// midelwares
app.use(express.json());

/// routes
app.use(routes);

export default app;
