import axios from "axios";

export default axios.create({
	// To be changed every 8hrs
	baseURL: "http://b07145ceb948.ngrok.io",
});
