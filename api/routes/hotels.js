import express from "express";
import {
  createHotel,
  deleteHotel,
  getHotel,
  getHotels,
  updateHotel,
} from "../controllers/hotelController.js";

const router = express.Router();

// Create
router.post("/", createHotel);

// update
router.put("/:id", updateHotel);

// Delete
router.delete("/:id", deleteHotel);

// Get
router.get("/:id", getHotel);

// Get All
router.get("/", getHotels);

export default router;
