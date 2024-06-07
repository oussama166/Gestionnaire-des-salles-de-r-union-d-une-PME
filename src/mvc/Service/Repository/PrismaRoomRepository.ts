// PrismaRoomRepository.ts
import { EQUIPEMENT, Room, TYPE_MEEETING } from "@prisma/client";
import prisma from "../../../../prisma/prisma";
import { IRoomRepository } from "./Interface/IRoomRepository";

export class PrismaRomRepository implements IRoomRepository {
  async findRoomByName(roomName: string): Promise<Room | null> {
    return prisma.room.findFirst({
      where: { roomName },
    });
  }

  async createRoom(roomData: Room): Promise<Room> {
    return prisma.room.create({
      data: roomData,
    });
  }

  async updateRoom(roomData: Room): Promise<Room> {
    return prisma.room.update({
      where: { roomName: roomData.roomName },
      data: {
        isReserved : roomData.isReserved,
        room_state : roomData.room_state,
      },
    });
  }
  async findRoomByNameAndCapacityAndEquipment(
    startDate: Date,
    endDate: Date,
    capacity: number,
    equipments: TYPE_MEEETING
  ): Promise<Room | null> {
    const meetingRequirements: {
      [key in TYPE_MEEETING]: EQUIPEMENT[];
    } = {
      VC: ["Ecran", "Pieuvre", "Webcam"],
      SPEC: ["Tableau"],
      RS: [],
      RC: ["Tableau", "Ecran", "Pieuvre"],
    };
    return prisma.room.findFirst({
      where: {
        max_capacity: {
          lte: capacity,
        },
        equipement: {
          hasSome: meetingRequirements[equipments],
        },
        isReserved: false,
      },
    });
  }

  async getAllRooms(): Promise<Room[]> {
    return prisma.room.findMany();
  }
}
