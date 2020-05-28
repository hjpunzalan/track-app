import React from "react";
import { StyleSheet, View } from "react-native";
import { Text, Input, Button } from "react-native-elements";
import Spacer from "../components/Spacer";

const SignupScreen = ({ navigation }) => {
	return (
		<View style={styles.container}>
			<Spacer>
				<Text style={{ fontSize: 48 }}>Sign up</Text>
			</Spacer>
			<Input label="Email " />
			<Spacer />
			<Input label="Password" />
			<Spacer>
				<Button title="Sign up" />
			</Spacer>
		</View>
	);
};

SignupScreen.navigationOptions = () => {
	return {
		headerShown: false,
	};
};
export default SignupScreen;

const styles = StyleSheet.create({
	container: {
		flex: 1,
		justifyContent: "center",
		marginBottom: "25%",
	},
});
