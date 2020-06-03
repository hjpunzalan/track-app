import axios from "axios";

export default axios.create({
	// To be changed every 8hrs
	baseURL: "http://d87ab48484a2.ngrok.io",
});
