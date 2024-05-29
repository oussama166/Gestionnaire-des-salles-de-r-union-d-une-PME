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
Object.defineProperty(exports, "__esModule", { value: true });
class RoomService {
    //   Inject the room repository
    constructor(roomRps) {
        this.roomRepository = roomRps;
    }
    createRoom(roomData) {
        return __awaiter(this, void 0, void 0, function* () {
            const existingRoom = yield this.roomRepository.findRoomByName(roomData.roomName);
            if (existingRoom) {
                return `Room already exists with Name ${existingRoom.roomName}`;
            }
            const newRoom = yield this.roomRepository.createRoom(roomData);
            return `Room added with: {
      name: ${newRoom.roomName},
    }`;
        });
    }
    showRoom(roomName) {
        return __awaiter(this, void 0, void 0, function* () {
            return this.roomRepository.findRoomByName(roomName);
        });
    }
    showRooms() {
        return __awaiter(this, void 0, void 0, function* () {
            return this.roomRepository.getAllRooms();
        });
    }
}
exports.default = RoomService;
