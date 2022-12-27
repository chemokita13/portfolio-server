import express from "express"; // express module
import cors from "cors"; // cors module

import routes from "./app.routes.js";

const app = express();

/// sets
app.set("PORT", process.env.PORT || 3000);

/// midelwares
app.use(express.json());
app.use(cors());

/// routes
app.use(routes);

export default app;
