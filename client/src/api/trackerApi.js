import axios from "axios";

export default axios.create({
	// To be changed every 8hrs
	baseURL: "http://fb710015ece3.ngrok.io",
});
