"use strict";
// import { PrismaRomRepository } from "../Service/Repository/PrismaRoomRepository";
// import RoomService from "../Service/RoomService";
// const roomRepository = new PrismaRomRepository();
// const roomService = new RoomService(roomRepository);
// export const createRoom = async (req: Request, res: Response) => {
//   try {
//     let data = req.body;
//     if (data != null) {
//       let room = JSON.stringify(data);
//       const result = await roomService.createRoom(room);
//        return res.status(201).send(result);
//     }
//   } catch (error) {
//     res.status(400).send(error.message);
//   }
// };
// export const showRoom = async (req: Request, res: Response) => {
//   try {
//     const room = await roomService.showRoom(req.params.roomName);
//     if (!room) {
//       res.status(404).send("Room not found");
//     } else {
//       res.status(200).send(room);
//     }
//   } catch (error) {
//     res.status(400).send(error.message);
//   }
// };
// export const showRooms = async (req: Request, res: Response) => {
//   try {
//     const rooms = await roomService.showRooms();
//     res.status(200).send(rooms);
//   } catch (error) {
//     res.status(400).send(error.message);
//   }
// };
