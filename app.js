// app.js
require("dotenv").config();
const express = require("express");
const passport = require("passport");
const connectDB = require("./config/db");

// Initialize Express FIRST
const app = express();

// Passport config
require("./config/passport")(passport);

// DB connection
connectDB();

// Middleware
app.use(express.json());
app.use(passport.initialize());

// Routes
app.use("/api/auth", require("./routes/authRoutes"));
app.use("/api/users", require("./routes/userRoutes"));
app.use("/api/appointments", require("./routes/appointmentRoutes"));

module.exports = app;
