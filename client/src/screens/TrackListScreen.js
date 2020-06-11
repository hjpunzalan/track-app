import React, { useContext } from "react";
import { StyleSheet, Text, FlatList, TouchableOpacity } from "react-native";
import { ListItem } from "react-native-elements";
import { NavigationEvents } from "react-navigation";
import { Context as TrackContext } from "../context/TrackContext";
import Spacer from "../components/Spacer";

const TrackListScreen = ({ navigation }) => {
	const { state, fetchTracks } = useContext(TrackContext);
	return (
		<>
			<NavigationEvents onWillFocus={fetchTracks} />
			<Text style={{ fontSize: 48 }}>Track List</Text>
			<Spacer>
				<FlatList
					data={state}
					keyExtractor={(item) => item._id}
					renderItem={({ item }) => {
						return (
							<TouchableOpacity
								onPress={() =>
									navigation.navigate("TrackDetail", {
										_id: item._id,
									})
								}>
								<ListItem chevron title={item.name} />
							</TouchableOpacity>
						);
					}}
				/>
			</Spacer>
		</>
	);
};

export default TrackListScreen;

const styles = StyleSheet.create({});
