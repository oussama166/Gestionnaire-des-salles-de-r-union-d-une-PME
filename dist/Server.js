"use strict";
// Require import
const express = require("express");
const { config } = require("dotenv");
// Initializing the server
const app = express();
config();
const port = 8000;
const baseURL = process.env.BASE_URL;
// Dependencies
app.use(express.json());
// Start server
app.listen(port, () => {
    console.log(`WE ARE NOW LISTINIG TO PORT : ${baseURL}${port}`);
});
// Functions
