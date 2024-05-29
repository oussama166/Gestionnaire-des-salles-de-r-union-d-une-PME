"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.showRooms = exports.showRoom = exports.createRoom = void 0;
const PrismaRoomRepository_1 = require("../Service/Repository/PrismaRoomRepository");
const RoomService_1 = __importDefault(require("../Service/RoomService"));
const roomRepository = new PrismaRoomRepository_1.PrismaRomRepository();
const roomService = new RoomService_1.default(roomRepository);
const createRoom = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        console.log("im inside ");
        const data = req.body;
        if (!data) {
            return res.status(400).send("Request body is null");
        }
        const room = JSON.stringify(data);
        const result = yield roomService.createRoom(room);
        return res.status(201).send(result);
    }
    catch (error) {
        handleErrorResponse(res, error);
    }
});
exports.createRoom = createRoom;
const showRoom = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const room = yield roomService.showRoom(req.params.roomName);
        if (!room) {
            res.status(404).send("Room not found");
        }
        else {
            res.status(200).send(room);
        }
        throw new Error("Erro occure adding room!!!");
    }
    catch (error) {
        handleErrorResponse(res, error);
    }
});
exports.showRoom = showRoom;
const showRooms = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const rooms = yield roomService.showRooms();
        console.log("im here");
        return res.status(200).send(rooms);
    }
    catch (error) {
        handleErrorResponse(res, error);
    }
});
exports.showRooms = showRooms;
function handleErrorResponse(res, error) {
    if (error instanceof Error && error.message) {
        return res.status(400).send(error.message);
    }
    return res.status(400).send("An error occurred");
}
