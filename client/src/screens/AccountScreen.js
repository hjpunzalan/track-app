import React, { useContext } from "react";
import { StyleSheet, Text, Button } from "react-native";
import { SafeAreaView } from "react-navigation";
import { Context as AuthContext } from "../context/AuthContext";
import Spacer from "../components/Spacer";
import { FontAwesome } from "@expo/vector-icons";

const AccountScreen = () => {
	const { signout } = useContext(AuthContext);
	return (
		<SafeAreaView forceInset={{ top: "always" }}>
			<Text style={{ fontSize: 48 }}>Account Screen</Text>
			<Spacer>
				<Button title="Sign Out" onPress={signout} />
			</Spacer>
		</SafeAreaView>
	);
};

AccountScreen.navigationOptions = {
	title: "Account",
	tabBarIcon: <FontAwesome name="gear" size={20} />,
};

export default AccountScreen;

const styles = StyleSheet.create({});
