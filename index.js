require("dotenv").config();
const express = require("express");
const cors = require("cors");
const { prisma } = require("./config/prisma");
const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get("/", async (req, res) => {
  res.send("here is the response");
});

app.get("/rooms", async (req, res) => {
  const room = await prisma.room.findMany();
  res.status(200).send(room);
});

app.get("/reservations", async (req, res) => {
  const reservations = await prisma.reservations.findMany();
  res.status(200).send(reservations);
});

app.post("/rooms", async (req, res) => {
  const { room } = req.body;
  if (!room) res.status(400).json({ message: "Name is required" });
  const newRoom = await prisma.room.create({
    data: {
      name: room,
      room_number: 1,
      room_type: 1,
      number_of_guests: 1,
      harga: 500000,
      room_desc: 1,
      img: 1,
    },
  });
  res.status(201).json({
    message: "Room created",
    data: newRoom,
  });
});

app.all("*", async (req, res) => {
  res.json({
    message: "Routes you're looking is not found",
  });
});

app.listen(PORT, "0.0.0.0", () => {
  console.log(`Server is already running at ${PORT}`);
});
