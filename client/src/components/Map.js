import React, { useContext } from "react";
import { StyleSheet, ActivityIndicator } from "react-native";
import MapView, { Polyline } from "react-native-maps";
import { Context as LocationContext } from "../context/LocationContext";

const Map = () => {
	const {
		state: { currentLocation },
	} = useContext(LocationContext);
	console.log(currentLocation);

	if (!currentLocation) {
		return <ActivityIndicator size="large" style={{ marginTop: 200 }} />;
	}
	return (
		<MapView
			style={styles.map}
			initialRegion={{
				...currentLocation.coords,
				latitudeDelta: 0.01,
				longitudeDelta: 0.01,
			}}
			region={{
				...currentLocation.coords,
				latitudeDelta: 0.01,
				longitudeDelta: 0.01,
			}}></MapView>
	);
};

export default Map;

const styles = StyleSheet.create({
	map: {
		height: 300,
	},
});
