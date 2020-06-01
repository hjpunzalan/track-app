import React, { useContext } from "react";
import { StyleSheet, View } from "react-native";
import { Context as AuthContext } from "../context/AuthContext";
import AuthForm from "../components/AuthForm";
import NavLink from "../components/NavLink";

const SignupScreen = () => {
	const { state, signup } = useContext(AuthContext);

	return (
		<View style={styles.container}>
			<AuthForm
				headerText="Sign Up for Tracker"
				errorMessage={state.errorMessage}
				submitButtonText="Sign Up"
				onSubmit={signup} //({ email, password }) => signup({ email, password })
			/>
			<NavLink
				routeName="Signin"
				text="Already have an account? Sign in instead"
			/>
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
		marginBottom: "10%",
	},
});
