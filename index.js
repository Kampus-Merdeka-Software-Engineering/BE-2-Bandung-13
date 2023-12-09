require("dotenv").config();
const express = require("express");
const cors = require("cors");
const { roomRoutes } = require("./routes/room.routes");
const { bookRoutes } = require("./routes/book.routes");
const { authRoutes } = require("./routes/auth.routes");
const app = express();
const PORT = process.env.PORT || 3000;

//middleware
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get("/", async (req, res) => {
    res.send("here is the response");
});

// room routes
app.use("/room", roomRoutes);

//booking routes
app.use("/book", bookRoutes);

// auth & registration routes
app.use('/auth', authRoutes);

app.all("*", async (req, res) => {
    res.json({
        message: "Routes you're looking is not found",
    });
});

app.use((err, req, res, next) => {
    res.status(err.status || 500).json({
        status: false,
        message: err.message
    })
})

app.listen(PORT, "127.0.0.1", () => {
    console.log(`Server is already running at ${PORT}`);
});