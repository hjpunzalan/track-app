import React from "react";
import { StyleSheet, Button, Input } from "react-native";
import Spacer from "../components/Spacer";

const TrackForm = () => {
	return (
		<>
			<Spacer>
				<Input />
				<Button title="Start recording" />
			</Spacer>
		</>
	);
};

export default TrackForm;

const styles = StyleSheet.create({});
