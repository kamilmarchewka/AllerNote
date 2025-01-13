require('dotenv').config();
const express = require("express");
const next = require("next");
const path = require("path");
const cors = require("cors");
const corsOptions = require("./config/corsOptions");
const { logger } = require("./middlewares/logEvents");
const errorHandler = require("./middlewares/errorHandler");
const verifyJWT = require('./middlewares/verifyJWT');
const cookieParser = require('cookie-parser');
const credentials = require('./middlewares/credentials');
const mongoose = require('mongoose'); // Corrected typo
const connectDB = require('./config/dbConn');

// Connect to MongoDB
connectDB();

const dev = process.env.NODE_ENV !== "production";
const app = next({ dev });
const handle = app.getRequestHandler();

const PORT = process.env.PORT || 3000;

app.prepare().then(() => {
  const server = express();

  // Middleware
  server.use(logger);
  server.use(credentials);
  server.use(cors(corsOptions));
  server.use(express.urlencoded({ extended: false }));
  server.use(express.json());
  server.use(cookieParser());

  // Routes
  server.use('/register', require('./routes/register'));
  server.use('/auth', require("./routes/auth"));
  server.use('/refresh', require("./routes/refresh"));
  server.use('/logout', require("./routes/logout"));

  server.use("/api", verifyJWT, require("./routes/api"));

  // Next.js API route example
  server.get("/api/hello", (req, res) => {
    res.json({ message: "Hello from Express and Next.js!" });
  });

  // Static files
  server.use(express.static(path.join(__dirname, "public")));

  // Catch-all route for Next.js
  server.all("*", (req, res) => {
    return handle(req, res);
  });

  // Error handling
  server.use(errorHandler);

  // Start server after connecting to MongoDB
  mongoose.connection.once('open', () => {
    console.log('Connected to MongoDB');
  });

  server.listen(PORT, () => {
    console.log(`> Ready on http://localhost:${PORT}`);
  });
});
