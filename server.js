const express = require("express");
const next = require("next");
const path = require("path");
const cors = require("cors");
const corsOptions = require("./config/corsOptions");
const { logger } = require("./middlewares/logEvents");
const errorHandler = require("./middlewares/errorHandler");

const dev = process.env.NODE_ENV !== "production";
const app = next({ dev });
const handle = app.getRequestHandler();

const register = require("./routes/register");
const auth = require("./routes/auth");

const PORT = process.env.PORT || 3000;

app.prepare().then(() => {
  const server = express();

  server.use(logger);

  server.use(cors(corsOptions));

  server.use(express.urlencoded({ extended: false }));
  server.use(express.json());

  server.use(express.static(path.join(__dirname, "app")));

  server.use("/api", require("./routes/api"));

  // Example API endpoint
  server.get("/api/hello", (req, res) => {
    res.json({ message: "Hello from Express and Next.js!" });
  });

  // Serve Next.js pages
  server.all("*", (req, res) => {
    return handle(req, res);
  });

  server.use(errorHandler);

  server.listen(PORT, () => {
    console.log(`> Ready on http://localhost:${PORT}`);
  });
});
