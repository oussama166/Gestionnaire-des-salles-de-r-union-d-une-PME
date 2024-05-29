import { Router } from "express";
import {
  createMeeting,
  createMeetings,
  showMeeting,
  showMeetings,
} from "../controller/MeetingController";

const route = Router();

route.post("/setMeeting", createMeeting);
route.post("/setMeetings", createMeetings);

route.get("/showMeeting/:meetingName", showMeeting);
route.get("/showMeetings", showMeetings);

export default route;
