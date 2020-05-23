const dotenv = require("dotenv");
const express = require("express");
const mongoose = require("mongoose");
const authRoutes = require("./routes/authRoutes");

dotenv.config({ path: "config.env" });

const app = express();

const mongoUri = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@cluster0-5shym.mongodb.net/test?retryWrites=true&w=majority`;
mongoose.connect(mongoUri, {
	useNewUrlParser: true,
	useCreateIndex: true,
	useUnifiedTopology: true,
});

mongoose.connection.on("connected", () => {
	console.log("Connected to mongo instance");
});

mongoose.connection.on("error", (err) => {
	console.error("Error connecting to mongo", err);
});

app.get("/", (req, res) => {
	res.send("Hi theere!!!");
});

// Routes
app.use(authRoutes);

app.listen(3000, () => {
	console.log("Listening on app 3000");
});
