import axios from "axios";
import { AsyncStorage } from "react-native";

const instance = axios.create({
	// To be changed every 8hrs
	baseURL: "http://2f8c3da0abc3.ngrok.io",
});

instance.interceptors.request.use(
	async (config) => {
		const token = await AsyncStorage.getItem("token");
		// Attaches token to headers
		if (token) {
			config.headers.Authorization = `Bearer ${token}`;
		}
		return config;
	},
	(err) => {
		return Promise.reject(err);
	}
);

export default instance;
