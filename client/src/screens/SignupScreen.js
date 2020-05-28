import React from "react";
import { StyleSheet } from "react-native";
import { Text, Input, Button } from "react-native-elements";
import Spacer from "../components/Spacer";

const SignupScreen = ({ navigation }) => {
	return (
		<>
			<Spacer>
				<Text style={{ fontSize: 48 }}>Sign up</Text>
			</Spacer>
			<Input label="Email " />
			<Spacer />
			<Input label="Password" />
			<Spacer>
				<Button title="Sign up" />
			</Spacer>
		</>
	);
};

export default SignupScreen;

const styles = StyleSheet.create({});
