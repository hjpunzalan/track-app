import { AsyncStorage } from "react-native";
import createDataContext from "./createDataContext";
import trackerApi from "../api/trackerApi";
import { navigate } from "../navigationRef";

const authReducer = (state, action) => {
	switch (action.type) {
		case "add_error":
			return { ...state, errorMessage: action.payload };
		case "signup":
		case "signin":
			return { token: action.payload, errorMessage: "" };
		default:
			return state;
	}
};

// Actions
const signup = (dispatch) => async ({ email, password }) => {
	// make api request to sign up with that email and password
	try {
		const response = await trackerApi.post("/signup", { email, password });
		await AsyncStorage.setItem("token", response.data.token);
		dispatch({ type: "signup", payload: response.data.token });

		// navigate to main flow
		navigate("TrackList");
	} catch (err) {
		dispatch({
			type: "add_error",
			payload: "Something went wrong with signing up.",
		});
	}
	// once sign up, modify state and authenticate
	// if sign up fail, need to reflect an error message
};

const signin = (dispatch) => async ({ email, password }) => {
	try {
		const response = await trackerApi.post("/signin", { email, password });
		await AsyncStorage.setItem("token", response.data.token);
		dispatch({ type: "signin", payload: response.data.token });
		navigate("TrackList");
	} catch (err) {
		dispatch({
			type: "add_error",
			payload: "Something went wrong with sign in.",
		});
	}
};

const signout = (dispatch) => () => {
	// simply sign out changing authentication
};

export const { Provider, Context } = createDataContext(
	authReducer,
	{ signup, signin, signout },
	{ token: null, errorMessage: "" }
);
