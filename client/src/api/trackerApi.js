import axios from "axios";

export default axios.create({
	// To be changed every 8hrs
	baseURL: "http://d6a3ec7e1e6f.ngrok.io/",
});
