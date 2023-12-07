const express = require("express");
const bookRoutes = express.Router();
const { prisma } = require("../config/prisma");

// get all book
bookRoutes.get("/", async (req, res) => {
	const book = await prisma.book.findMany();
	res.status(200).send(book);
});

// create booking
bookRoutes.post("/", async (req, res) => {
	const { name } = req.body;
	// todo - handle if name is not passed in
	// if (!name) res.status(400).json({ message: "Name is required" });
	const newbook = await prisma.book.create({
		data: {
			name: name,
		},
	});
	res.status(201).json({
		message: "Room was successfully booked",
		data: newbook,
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