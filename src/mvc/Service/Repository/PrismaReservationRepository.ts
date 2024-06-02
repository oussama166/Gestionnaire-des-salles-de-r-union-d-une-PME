import { Reservation } from "@prisma/client";
import { IReservationRepository } from "./Interface/IReservationRepository";
import { prisma } from "../../../../prisma/prisma";

export class PrismaReservationRepository implements IReservationRepository {
  findReservationByName(
    meetingName: string,
    roomName: string
  ): Promise<Reservation | null> {
    return prisma.reservation.findFirst({
      where: {
        meeting: {
          meetingName: meetingName,
        },
        AND: {
          room: {
            roomName: roomName,
          },
        },
      },
    });
  }
  createReservation(meetingName : string , roomName : string): Promise<Reservation> {
    return prisma.reservation.create({
      data: {
        meeting: {
          connect: {
            meetingName: meetingName,
          },
        },
        room: {
          connect: {
            roomName: roomName,
          },
        },
      },
    });
  }
  createReservations(
    reservations: Reservation[]
  ): Promise<Reservation[] | [] | any> {
    return prisma.reservation.createMany({
      data: reservations,
    });
  }
  getAllReservations(): Promise<Reservation[]> {
    return prisma.reservation.findMany();
  }
}
