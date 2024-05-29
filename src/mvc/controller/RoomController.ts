import { Request, Response } from "express";
import { PrismaRomRepository } from "../Service/Repository/PrismaRoomRepository";
import RoomService from "../Service/RoomService";

const roomRepository = new PrismaRomRepository();
const roomService = new RoomService(roomRepository);

export const createRoom = async (req: Request, res: Response) => {
  try {
    const data = req.body;
    if (!data) {
      return res.status(400).send("Request body is null");
    }
    const room = JSON.stringify(data);
    const result = await roomService.createRoom(room);
    console.log(result);
    return res.status(201).send(result);
  } catch (error) {
    handleErrorResponse(res, error);
  }
};

export const createRooms = async (req: Request, res: Response) => {
  try {
    const data = req.body;
    if (!data || !Array.isArray(data)) {
      return res
        .status(400)
        .send("Request nody is null of the you to format to array !!!");
    }
    const result = await roomService.createRooms(data);
    console.log(result);
    return res.status(201).send(result);
  } catch (error) {
    handleErrorResponse(res, error);
  }
};

export const showRoom = async (req: Request, res: Response) => {
  try {
    console.log(req.params.roomName);
    
    const room = await roomService.showRoom(req.params.roomName);
    if (!room) {
      return res.status(404).send("Room not found");
    } else {
      return res.status(200).send(room);
    }
  } catch (error) {
    handleErrorResponse(res, error);
  }
};

export const showRooms = async (req: Request, res: Response) => {
  try {
    const rooms = await roomService.showRooms();
    return res.status(200).send(rooms);
  } catch (error) {
    handleErrorResponse(res, error);
  }
};

function handleErrorResponse(res: Response, error: any) {
  if (error instanceof Error && error.message) {
    return res.status(400).send(error.message);
  }
  return res.status(400).send("An error occurred");
}
