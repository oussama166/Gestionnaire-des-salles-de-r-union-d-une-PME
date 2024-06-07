import {
  EQUIPEMENT,
  Meeting,
  ROOM_STATE,
  Reservation,
  TYPE_MEEETING,
} from "@prisma/client";
import { IReservationRepository } from "./Repository/Interface/IReservationRepository";
import prisma from "../../../prisma/prisma";
import { IMeetingRepository } from "./Repository/Interface/IMeetingRepository";
import { IRoomRepository } from "./Repository/Interface/IRoomRepository";

export class ReservationService {
  private reservationRepository: IReservationRepository;
  private meetingRepository: IMeetingRepository;
  private roomRepository: IRoomRepository;

  //   Inject the reservation repository
  constructor(
    reservationRepository: IReservationRepository,
    meetingRepository: IMeetingRepository,
    roomRepository: IRoomRepository
  ) {
    this.reservationRepository = reservationRepository;
    this.meetingRepository = meetingRepository;
    this.roomRepository = roomRepository;
  }

  async createReservation(meetingInfo: Meeting) {
    // find the all room possible for this meeting
    const possibleRooms = await this.possibleRoomForMeeting(meetingInfo);
    if (possibleRooms.length === 0) {
      return "No room available for this meeting";
    }
    console.log(possibleRooms);
    possibleRooms[0].isReserved = true;
    possibleRooms[0].room_state = ROOM_STATE.CLOSE;
    await this.roomRepository.updateRoom(possibleRooms[0]);
    return this.reservationRepository.createReservation(
      meetingInfo.meetingName,
      possibleRooms[0].roomName
    );
  }
  async createReservations(reservations: Reservation[]) {
    return this.reservationRepository.createReservations(reservations);
  }
  async showReservation(meetingName: string, roomName: string) {
    return this.reservationRepository.findReservationByName(
      meetingName,
      roomName
    );
  }
  async showReservations() {
    return this.reservationRepository.getAllReservations();
  }

  // ================ Handle function ======================
  async possibleRoomForMeeting(meeting: Meeting) {
    const meetingRequirements = {
      VC: ["Ecran", "Pieuvre", "Webcam"],
      SPEC: ["Tableau"],
      RS: [], // No specific equipment needed
      RC: ["Tableau", "Ecran", "Pieuvre"],
    };

    // find the all room possible for this meeting
    const allRooms = await this.roomRepository.getAllRooms();
    const meetingType = meeting.typeMeeting;
    const meetingEquipments = meetingRequirements[meetingType as TYPE_MEEETING];

    const possibleRooms = allRooms.filter((room) => {
      const roomEquipments: EQUIPEMENT[] = room.equipement.sort();
      const roomType: EQUIPEMENT[] | string[] = meetingEquipments.sort();
      if (
        roomEquipments.every((val, index) => val === roomType[index]) &&
        room.isReserved === false &&
        (room.seventyPercent === null ||
          room.seventyPercent >= meeting.personalNumber)
      ) {
        return true;
      }
      return false;
    });
    return possibleRooms;
  }
}
