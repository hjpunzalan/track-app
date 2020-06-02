import React from "react";
import { StyleSheet, Text, View } from "react-native";
import MapView, { Polyline } from "react-native-maps";

const Map = () => {
	let points = [];
	for (let i = 0; i < 10; i++) {
		if (i % 2 === 0) {
			points.push({
				latitude: -32.00727 + i * 0.001,
				longitude: 115.938969 + i * 0.001,
			});
		} else {
			points.push({
				latitude: -32.00727 - i * 0.002,
				longitude: 115.938969 - i * 0.001,
			});
		}
	}
	return (
		<MapView
			style={styles.map}
			initialRegion={{
				latitude: -32.00727,
				longitude: 115.938969,
				latitudeDelta: 0.01,
				longitudeDelta: 0.01,
			}}>
			<Polyline coordinates={points} />
		</MapView>
	);
};

export default Map;

const styles = StyleSheet.create({
	map: {
		height: 300,
	},
});
