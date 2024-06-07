// IRoomRepository.ts
import { Room, TYPE_MEEETING } from "@prisma/client";

export interface IRoomRepository {
  findRoomByName(roomName: string): Promise<Room | null>;
  findRoomByNameAndCapacityAndEquipment(
    startDate: Date,
    endDate: Date,
    capacity: number,
    equipment: TYPE_MEEETING
  ): Promise<Room | null>;
  createRoom(roomData: Room): Promise<Room>;
  updateRoom(roomData: Room): Promise<Room>;
  getAllRooms(): Promise<Room[]>;
}
