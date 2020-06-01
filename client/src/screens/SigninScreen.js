import React, { useContext } from "react";
import { StyleSheet, View } from "react-native";
import { Context as AuthContext } from "../context/AuthContext";
import AuthForm from "../components/AuthForm";
import NavLink from "../components/NavLink";

const SigninScreen = () => {
	const { state, signin } = useContext(AuthContext);
	return (
		<View style={styles.container}>
			<AuthForm
				headerText="Sign in to your Account"
				errorMessage={state.errorMessage}
				onSubmit={signin}
				submitButtonText="Sign In"
			/>
			<NavLink
				text="Don't have an account? Sign up instead"
				routeName="Signup"
			/>
		</View>
	);
};

SigninScreen.navigationOptions = () => {
	return {
		headerShown: false,
	};
};

export default SigninScreen;

const styles = StyleSheet.create({
	container: {
		flex: 1,
		justifyContent: "center",
		marginBottom: "10%",
	},
});
