import { Meeting } from "@prisma/client";

export interface IMeetingRepository {
  findMeetingByName(meetingName: string): Promise<Meeting | null>;
  createMeeting(meeting: Meeting): Promise<Meeting>;
  getAllMeetings(): Promise<Meeting[]>;
}
