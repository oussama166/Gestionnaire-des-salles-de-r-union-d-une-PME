import { Router } from "express";
import {
  createReservation,
  createReservations,
  showReservation,
  showReservations,
} from "../controller/ReservationController";

const router = Router();

router.post("/setReservation", createReservation);
router.post("/setReservations", createReservations);
router.get("/showReservation", showReservation);
router.get("/showReservations", showReservations);

export default router;
