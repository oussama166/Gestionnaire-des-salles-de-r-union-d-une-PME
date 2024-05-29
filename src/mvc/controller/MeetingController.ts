import { Request, Response } from "express";
import { MeetingService } from "../Service/MeetingService";
import { PrismaMeetingRepository } from "../Service/Repository/PrismaMeetingRepository";
import { handleErrorResponse } from "../../utils/utilsFunc";

const meetingRepository = new PrismaMeetingRepository();
const meetingService = new MeetingService(meetingRepository);

export const createMeeting = async (req: Request, res: Response) => {
  try {
    const getData = req.body;
    if (!getData) {
      return res.status(400).send("Request body is null");
    }

    const meeting = JSON.stringify(getData);
    const result = await meetingService.createMeeting(meeting);
    return res.status(201).send(result);
  } catch (err) {
    handleErrorResponse(res, err);
  }
};

export const createMeetings = async (req: Request, res: Response) => {
  try {
    const data = req.body;
    if (!data || !Array.isArray(data)) {
      return res
        .status(400)
        .send("Request body is null of the you to format to array !!!");
    }
    const result = await meetingService.createMeetings(data);
    return res.status(201).send(`${result.count} Meetings added susccefuly`);
  } catch (error) {
    handleErrorResponse(res, error);
  }
};

export const showMeeting = async (req: Request, res: Response) => {
  try {
    const meetingName = req.params.meetingName;
    if (!meetingName) {
      return res.status(502).send("meeting name is empty or invalid !!!");
    }
    const meeting = meetingRepository.findMeetingByName(meetingName);
    if (!meeting) {
      return res.status(404).send("Meeting not found !!!");
    } else {
      return res.status(201).send(meeting);
    }
  } catch (err) {
    handleErrorResponse(res, err);
  }
};

export const showMeetings = async (res: Response) => {
  try {
    const meetings = await meetingRepository.getAllMeetings();
    return res.status(200).send(meetings);
  } catch (err) {
    handleErrorResponse(res, err);
  }
};
