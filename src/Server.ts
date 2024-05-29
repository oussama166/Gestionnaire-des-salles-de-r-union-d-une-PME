// Require import
const express = require("express");
const { config } = require("dotenv");
import roomRoutes from "./mvc/routes/RoomRoutes";
import meetingRoutes from "./mvc/routes/MeetingRoutes";

// Initializing the server
const app = express();
config();
const port = 8000;
const baseURL = process.env.BASE_URL;

// Dependencies
app.use(express.json());
app.use("/api", roomRoutes);
app.use("/api", meetingRoutes);

// Start server
app.listen(port, () => {
  console.log(`WE ARE NOW LISTING TO PORT : ${baseURL}${port}`);
});

// Functions
