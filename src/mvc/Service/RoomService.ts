import { Room } from "@prisma/client";
import { IRoomRepository } from "./Repository/Interface/IRoomRepository";
import { prisma } from "../../../prisma/prisma";

export default class RoomService {
  private roomRepository: IRoomRepository;
  //   Inject the room repository
  constructor(roomRps: IRoomRepository) {
    this.roomRepository = roomRps;
  }

  async createRoom(roomData: Room | any) {
    const existingRoom = await this.roomRepository.findRoomByName(
      roomData.roomName
    );

    if (existingRoom) {
      return `Room already exists with Name ${existingRoom.roomName}`;
    }
    const data = JSON.parse(roomData);
    const newRoom = await this.roomRepository.createRoom(data);
    return newRoom.roomName;
  }

  async createRooms(roomsData: Room[]) {
    let dataRooms = await prisma.room.createMany({
      data:roomsData,
    });
    return dataRooms;
  }

  async showRoom(roomName: string) {
    return this.roomRepository.findRoomByName(roomName);
  }

  async showRooms() {
    return this.roomRepository.getAllRooms();
  }
}
