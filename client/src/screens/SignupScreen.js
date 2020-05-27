import React from "react";
import { StyleSheet, Text, View, Button } from "react-native";

const SignupScreen = ({ navigation }) => {
	return (
		<>
			<Text style={{ fontSize: 48 }}>Sign up</Text>
			<Button
				title="Go to Sign in"
				onPress={() => navigation.navigate("Signin")}
			/>
			<Button
				title="Go to main flow"
				onPress={() => navigation.navigate("mainFlow")}
			/>
		</>
	);
};

export default SignupScreen;

const styles = StyleSheet.create({});