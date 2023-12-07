const express = require("express");
const roomRoutes = express.Router();
const { prisma } = require("../config/prisma");

// get all room
roomRoutes.get("/", async (req, res) => {
	const room = await prisma.room.findMany();
	res.status(200).send(room);
});

// // get room by roomType
// roomRoutes.get("/:roomType", async (req, res) => {
// 	const room = await prisma.room.findUnique({
// 		where: {
// 			roomType: parseInt(req.params.roomType),
// 		},
// 	});
// 	if (!room)
// 		res.status(404).json({
// 			message: "room not found",
// 		});
// 	else res.status(200).json(room);
// });

// create room
roomRoutes.post("/", async (req, res) => {
	const { name } = req.body;
	// todo - handle if name is not passed in
	// if (!name) res.status(400).json({ message: "Name is required" });
	const newroom = await prisma.room.create({
		data: {
			name: name,
		},
	});
	res.status(201).json({
		message: "room created",
		data: newroom,
	});
});

// update room
roomRoutes.put("/:id", async (req, res) => {
	const { id } = req.params;
	const { name } = req.body;
	const updatedroom = await prisma.room.update({
		where: { id: parseInt(id) },
		data: { name: name },
	});
	res.status(200).json({
		message: `room with id: ${id} is updated`,
		data: updatedroom,
	});
});

// delete room
roomRoutes.delete("/:id", async (req, res) => {
	const { id } = req.params;
	await prisma.room.delete({
		where: {
			id: parseInt(id),
		},
	});
	res.status(200).json({
		message: `product with id: ${id} successfully deleted`,
	});
});

module.exports = { roomRoutes };