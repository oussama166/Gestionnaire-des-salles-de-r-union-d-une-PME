import { Router } from "express";
import {
  createRoom,
  createRooms,
  showRoom,
  showRooms,
} from "../controller/RoomController";

const route = Router();

route.post("/setRoom", createRoom);
route.post("/setRooms", createRooms);
route.get("/showRoom/:roomName", showRoom);
route.get("/showRooms", showRooms);

export default route;
