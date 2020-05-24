const mongoose = require("mongoose");
const validator = require("validator");

const userSchema = new mongoose.Schema({
	email: {
		type: String,
		unique: true,
		required: true,
		validate: [validator.isEmail, "Please enter a valid email address."],
	},
	password: {
		type: String,
		required: true,
		minlength: 5,
	},
});

mongoose.model("User", userSchema);
