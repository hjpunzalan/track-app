import React, { useState } from "react";
import { StyleSheet } from "react-native";
import { Text, Input, Button } from "react-native-elements";
import Spacer from "../components/Spacer";

const AuthForm = ({ headerText, errorMessage, onSubmit, submitButtonText }) => {
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	return (
		<>
			<Spacer>
				<Text style={{ fontSize: 40 }}>{headerText}</Text>
			</Spacer>
			<Input
				label="Email"
				value={email}
				onChangeText={setEmail}
				autoCapitalize="none"
				autoCorrect={false}
			/>
			<Spacer />
			<Input
				label="Password"
				value={password}
				onChangeText={setPassword}
				autoCapitalize="none"
				autoCorrect={false}
				secureTextEntry={true}
			/>
			{errorMessage ? (
				<Text style={styles.errorMessage}>{errorMessage}</Text>
			) : null}
			<Spacer>
				<Button
					title={submitButtonText}
					onPress={() => onSubmit({ email, password })}
				/>
			</Spacer>
		</>
	);
};

export default AuthForm;

const styles = StyleSheet.create({
	errorMessage: {
		fontSize: 16,
		color: "red",
		marginLeft: 15,
		marginTop: 15,
	},
});
