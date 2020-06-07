import axios from "axios";

export default axios.create({
	// To be changed every 8hrs
	baseURL: "http://12d34fc871f4.ngrok.io",
});
