import axios from "axios";

export default axios.create({
	// To be changed every 8hrs
	baseURL: "http://89cb1970a9f6.ngrok.io",
});
