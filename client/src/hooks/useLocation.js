import { useEffect, useState } from "react";
import {
	Accuracy,
	requestPermissionsAsync,
	watchPositionAsync,
} from "expo-location";

export default (shouldTrack, callback) => {
	const [err, setErr] = useState(null);

	// Cant add callback to dependency of useEffect because a new location will trigger an update of callback and startWatching,
	//  everytime theeres a new location thus breaking the app
	// 	because a new call back will always be called
	// Need to use callback hook to prevent this
	// useCallback does not send a new callback if state.recording is the same

	useEffect(() => {
		let subscriber;
		const startWatching = async () => {
			try {
				const { granted } = await requestPermissionsAsync();
				if (!granted) throw new Error("Location permission not granted");

				// Watch user position
				subscriber = await watchPositionAsync(
					{
						accuracy: Accuracy.BestForNavigation,
						timeInterval: 1000,
						distance: 10,
					},
					callback
				);
			} catch (err) {
				setErr(err.message);
			}
		};

		if (shouldTrack) {
			startWatching();
		} else {
			if (subscriber) subscriber.remove();
			subscriber = null;
		}
		// Prevents multiple startwatching calls
		return () => {
			if (subscriber) subscriber.remove();
		};
	}, [shouldTrack, callback]);

	return [err];
};

// Any reference to state,context,prop values to the useEffect hook must be added to the dependency list!!!!!
// TRY NOT TO define helper functions that reference props, state, context outside of useEffect!!
