// PrismaRoomRepository.ts
import { Room } from "@prisma/client";
import { prisma } from "../../../../prisma/prisma";
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

  async getAllRooms(): Promise<Room[]> {
    return prisma.room.findMany();
  }
}
