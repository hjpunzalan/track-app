import React, { useContext } from "react";
import { StyleSheet, Text, Button } from "react-native";
import { Context as AuthContext } from "../context/AuthContext";
import Spacer from "../components/Spacer";

const AccountScreen = () => {
	const { signout } = useContext(AuthContext);
	return (
		<>
			<Text style={{ fontSize: 48 }}>Account Screen</Text>
			<Spacer>
				<Button title="Sign Out" onPress={signout} />
			</Spacer>
		</>
	);
};

export default AccountScreen;

const styles = StyleSheet.create({});
