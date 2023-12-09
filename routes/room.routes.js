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


module.exports = { roomRoutes };