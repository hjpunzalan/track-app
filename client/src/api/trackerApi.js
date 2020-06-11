import axios from "axios";

export default axios.create({
	// To be changed every 8hrs
	baseURL: "http://261e8d5809da.ngrok.io",
});
