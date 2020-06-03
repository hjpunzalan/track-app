// import "../_mockLocation";

import React, { useEffect, useState, useContext } from "react";
import { StyleSheet } from "react-native";
import { Text } from "react-native-elements";
import { SafeAreaView } from "react-navigation";
import {
	requestPermissionsAsync,
	watchPositionAsync,
	Accuracy,
} from "expo-location";
import Map from "../components/Map";
import { Context as LocationContext } from "../context/LocationContext";

const TrackCreateScreen = () => {
	const { addLocation } = useContext(LocationContext);
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
					addLocation(location);
				}
			);
		} catch (err) {
			setErr(err.message);
		}
	};

	useEffect(() => {
		startWatching();
	}, []);

	return (
		<>
			<SafeAreaView forceInset={{ top: "always" }}>
				<Text h3>Create a Track</Text>
				<Map />
				{err ? <Text>Please enable location services</Text> : null}
			</SafeAreaView>
		</>
	);
};

export default TrackCreateScreen;

const styles = StyleSheet.create({});
