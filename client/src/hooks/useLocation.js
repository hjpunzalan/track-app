import { useState, useEffect } from "react";
import {
	Accuracy,
	requestPermissionsAsync,
	watchPositionAsync,
} from "expo-location";

export default (callback) => {
	const [err, setErr] = useState(null);

	const startWatching = async () => {
		try {
			const { granted } = await requestPermissionsAsync();
			if (!granted) throw new Error("Location permission not granted");

			// Watch user position
			await watchPositionAsync(
				{
					accuracy: Accuracy.BestForNavigation,
					timeInterval: 1000,
					distance: 10,
				},
				(location) => {
					callback(location);
				}
			);
		} catch (err) {
			setErr(err.message);
		}
	};

	useEffect(() => {
		startWatching();
	}, []);

	return [err];
};
