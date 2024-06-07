import { Meeting } from "@prisma/client";
import { IMeetingRepository } from "./Repository/Interface/IMeetingRepository";
import  prisma from "../../../prisma/prisma";

export class MeetingService {
  private meetingRepository: IMeetingRepository;

  // Inject the room repository
  constructor(meetingRps: IMeetingRepository) {
    this.meetingRepository = meetingRps;
  }

  //    Creating meeting
  async createMeeting(meetingData: Meeting | any) {
    const existMeeting = await this.meetingRepository.findMeetingByName(
      meetingData.meetingName
    );

    if (existMeeting) {
      return `Meeting already exist with Name : ${existMeeting.meetingName}`;
    }

    const data = JSON.parse(meetingData);
    const newMeeting = await this.meetingRepository.createMeeting(data);
    return newMeeting.meetingName;
  }

  //    Creating meeting depending a list of meeting
  async createMeetings(meetingsData: Meeting[]) {
    let dataMeetings = await prisma.meeting.createMany({
      data: meetingsData,
    });
    return dataMeetings;
  }
  //   Get meeting by name of meeting
  async showMeeting(meetingName: string) {
    return this.meetingRepository.findMeetingByName(meetingName);
  }
  //   Get all meetings in db
  async showMeetings() {
    return this.meetingRepository.getAllMeetings();
  }
}
