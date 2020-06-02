import React, { useEffect, useState } from "react";
import { StyleSheet } from "react-native";
import { Text } from "react-native-elements";
import { SafeAreaView } from "react-navigation";
import { requestPermissionsAsync } from "expo-location";
import Map from "../components/Map";

const TrackCreateScreen = () => {
	const [err, setErr] = useState(null);

	const startWatching = async () => {
		try {
			await requestPermissionsAsync();
		} catch (err) {
			// Display error message to user
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
