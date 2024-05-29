"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
// Require import
const express = require("express");
const { config } = require("dotenv");
const RoomRoutes_1 = __importDefault(require("./mvc/routes/RoomRoutes"));
// Initializing the server
const app = express();
config();
const port = 8000;
const baseURL = process.env.BASE_URL;
// Dependencies
app.use(express.json());
app.use("/api", RoomRoutes_1.default);
// Start server
app.listen(port, () => {
    console.log(`WE ARE NOW LISTINIG TO PORT : ${baseURL}${port}`);
});
// Functions
