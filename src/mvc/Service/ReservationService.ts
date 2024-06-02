import { Reservation } from "@prisma/client";
import { IReservationRepository } from "./Repository/Interface/IReservationRepository";

export class ReservationService {
  private reservationRepository: IReservationRepository;

  //   Inject the reservation repository
  constructor(reservationRepository: IReservationRepository) {
    this.reservationRepository = reservationRepository;
  }

  async createReservation(reservation: Reservation | any) {
    let reservationExist = await this.showReservation(
      reservation.meetingName,
      reservation.roomName
    );


    // before reservation check if the reservation already exist

    if (reservationExist) {
      return `Reservation already exist with Name : ${reservationExist.meetingName} and Room : ${reservationExist.roomName} for meeting : ${reservationExist.id}`;
    }
    const reservationData = JSON.parse(reservation);
    return this.reservationRepository.createReservation(
      reservationData.meetingName,
      reservationData.roomName
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
}
