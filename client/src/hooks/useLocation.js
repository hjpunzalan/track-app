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
				callback
			);
			setSubscriber(sub);
		} catch (err) {
			setErr(err.message);
		}
	};

	// Cant add callback to dependency of useEffect because a new location will trigger an update of callback and startWatching,
	//  everytime theeres a new location thus breaking the app
	// 	because a new call back will always be called
	// Need to use callback hook to prevent this
	// useCallback does not send a new callback if state.recording is the same

	useEffect(() => {
		if (shouldTrack) {
			startWatching();
		} else {
			subscriber.remove();
			setSubscriber(null);
		}
		// Prevents multiple startwatching calls
		return () => {
			if (subscriber) subscriber.remove();
		};
	}, [shouldTrack, callback]);

	return [err];
};
