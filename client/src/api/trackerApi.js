import axios from "axios";

export default axios.create({
	// To be changed every 8hrs
	baseURL: "http://f4c95ee47998.ngrok.io",
});
