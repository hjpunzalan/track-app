import axios from "axios";

export default axios.create({
	// To be changed every 8hrs
	baseURL: "http://b018bd0a021e.ngrok.io",
});
