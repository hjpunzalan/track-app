import axios from "axios";

export default axios.create({
	// To be changed every 8hrs
	baseURL: "http://5de450a7d8a9.ngrok.io",
});
