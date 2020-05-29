import createDataContext from "./createDataContext";
import trackerApi from "../api/trackerApi";

const authReducer = (state, action) => {
	switch (action.type) {
		case "add_error":
			return { ...state, errorMessage: action.payload };
		default:
			return state;
	}
};

// Actions
const signup = (dispatch) => async ({ email, password }) => {
	// make api request to sign up with that email and password
	try {
		const response = await trackerApi.post("/signup", { email, password });
		console.log(response.data);
	} catch (err) {
		dispatch({
			type: "add_error",
			payload: "Something went wrong with signing up.",
		});
	}
	// once sign up, modify state and authenticate
	// if sign up fail, need to reflect an error message
};

const signin = (dispatch) => ({ email, password }) => {
	// Try to sign in
	// Handle success by updating state
	// Handle failure by showing error message
};

const signout = (dispatch) => () => {
	// simply sign out changing authentication
};

export const { Provider, Context } = createDataContext(
	authReducer,
	{ signup, signin, signout },
	{ isSignedIn: false, errorMessage: "" }
);
