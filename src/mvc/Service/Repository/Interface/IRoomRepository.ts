// IRoomRepository.ts
import { Room } from "@prisma/client";

export interface IRoomRepository {
  findRoomByName(roomName: string): Promise<Room | null>;
  createRoom(roomData: Room): Promise<Room>;
  getAllRooms(): Promise<Room[]>;
}
