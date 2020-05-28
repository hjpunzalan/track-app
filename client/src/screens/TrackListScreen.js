import React from "react";
import { StyleSheet, Text, View, Button } from "react-native";

const TrackListScreen = ({ navigation }) => {
	return (
		<View>
			<Text style={{ fontSize: 48 }}>Track List</Text>
			<Button
				title="Go to track detail"
				onPress={() => navigation.navigate("TrackDetail")}
			/>
		</View>
	);
};

export default TrackListScreen;

const styles = StyleSheet.create({});
