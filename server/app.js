const cors = require("cors");
const express = require("express");
const morgan = require("morgan");
const errorHandler = require("./middleware/errorHandler");

const app = express();

app.use(
  cors({
    origin: process.env.CLIENT_URL || "http://127.0.0.1:5500"
  })
);
app.use(express.json());
app.use(morgan("dev"));

app.get("/api/health", (request, response) => {
  response.status(200).json({
    success: true,
    message: "Campus Lost and Found API is running."
  });
});

app.use((request, response) => {
  response.status(404).json({
    success: false,
    message: `Route not found: ${request.method} ${request.originalUrl}`
  });
});

app.use(errorHandler);


module.exports = app;
