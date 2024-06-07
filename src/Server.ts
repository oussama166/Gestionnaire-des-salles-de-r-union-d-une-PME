// Require import
const express = require("express");
const { config } = require("dotenv");
const reservationData = require("./data/Reservation.json");

import { Request, Response } from "express";
import meetingRoutes from "./mvc/routes/MeetingRoutes";
import reservationRoutes from "./mvc/routes/ReservationsRoutes";
import roomRoutes from "./mvc/routes/RoomRoutes";

// Initializing the server
const app = express();
config();
const port = 8000;
const baseURL = process.env.BASE_URL;

// Dependencies
app.use(express.json());
app.use("/api", roomRoutes);
app.use("/api", meetingRoutes);
app.use("/api", reservationRoutes);

// Start server
app.listen(port, () => {
  console.log(`WE ARE NOW LISTING TO PORT : ${baseURL}${port}`);
});


app.post("/api/reservation",(req:Request , res:Response)=>{
  
})


/*
  We have list of meeting and list of rooms 
  1 . we need to add the list of meeting 
  2 . we need to add the list of rooms
  3 . we need to take each meeting and  show all the possible rooms that can be reserved for this meeting

*/

