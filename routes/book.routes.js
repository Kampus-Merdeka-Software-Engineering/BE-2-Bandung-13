const express = require("express");
const bookRoutes = express.Router();
const { prisma } = require("../config/prisma");

// get all booking
bookRoutes.get("/", async (req, res) => {
	const book = await prisma.book.findMany();
	res.status(200).send(book);
});

// get booking history by idUser
bookRoutes.get("/:userId", async (req, res) => {
	const book = await prisma.book.findMany({
		where: {
			userId: parseInt(req.params.userId),
		},
	});
	if (book) {
		res.status(200).json(book);
	} else {
		res.status(404).json({
			message: "History not found",
		});
	}
});

// create new booking
bookRoutes.post("/", async (req, res) => {
	const { name, email, roomType, checkIn, checkOut, adult, child, userId } = req.body;
	const newBook = await prisma.book.create({
		data: {
			name: name,
			email: email,
			roomType: roomType,
			checkIn: new Date(Date.parse(checkIn)).toISOString(),
			checkOut: new Date(Date.parse(checkOut)).toISOString(),
			adult: parseInt(adult),
			child: parseInt(child),
			userId: parseInt(userId),
		},
	});
	res.status(201).json({
		message: "Room booked",
		data: newBook,
	});
});

// delete book
bookRoutes.delete("/:id", async (req, res) => {
	const { id } = req.params;
	await prisma.book.delete({
		where: {
			id: parseInt(id),
		},
	});
	res.status(200).json({
		message: `booking with id: ${id} successfully canceled`,
	});
});

module.exports = { bookRoutes };