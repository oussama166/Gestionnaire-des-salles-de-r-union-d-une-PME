"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const RoomController_1 = require("../controller/RoomController");
const route = (0, express_1.Router)();
route.post("/setRoom", RoomController_1.createRoom);
route.get("/showRoom/:roomName", RoomController_1.showRoom);
route.get("/showRooms", RoomController_1.showRooms);
exports.default = route;
