import { useState, useEffect } from "react";
import {
	Accuracy,
	requestPermissionsAsync,
	watchPositionAsync,
} from "expo-location";

export default (shouldTrack, callback) => {
	const [err, setErr] = useState(null);
	const [subscriber, setSubscriber] = useState(null);

	const startWatching = async () => {
		try {
			const { granted } = await requestPermissionsAsync();
			if (!granted) throw new Error("Location permission not granted");

			// Watch user position
			const sub = await watchPositionAsync(
				{
					accuracy: Accuracy.BestForNavigation,
					timeInterval: 1000,
					distance: 10,
				},
				(location) => {
					callback(location);
				}
			);
			setSubscriber(sub);
		} catch (err) {
			setErr(err.message);
		}
	};

	useEffect(() => {
		if (shouldTrack) {
			startWatching();
		} else {
			subscriber.remove();
			setSubscriber(null);
		}
	}, [shouldTrack]);

	return [err];
};
