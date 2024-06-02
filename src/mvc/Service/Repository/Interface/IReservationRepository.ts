import { Reservation } from "@prisma/client";

export interface IReservationRepository {
  findReservationByName(
    meetingName: string,
    roomName: string
  ): Promise<Reservation | null>;
  createReservation(
    meetingName: string,
    roomName: string
  ): Promise<Reservation>;
  createReservations(reservations: Reservation[]): Promise<Reservation[]>;
  getAllReservations(): Promise<Reservation[]>;
}
