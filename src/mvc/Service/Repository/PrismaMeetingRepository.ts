import { Meeting } from "@prisma/client";
import { prisma } from "../../../../prisma/prisma";
import { IMeetingRepository } from "./Interface/IMeetingRepository";

export class PrismaMeetingRepository implements IMeetingRepository {
  async createMeeting(meeting: Meeting): Promise<Meeting> {
    return prisma.meeting.create({
      data: meeting,
    });
  }
  findMeetingByName(meetingName: string): Promise<Meeting | null> {
    return prisma.meeting.findFirst({
      where: { meetingName },
    });
  }
  getAllMeetings(): Promise<Meeting[]> {
    return prisma.meeting.findMany();
  }
}
