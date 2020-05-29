import createDataContext from "./createDataContext";
import trackerApi from "../api/trackerApi";

const authReducer = (state, action) => {
	switch (action.type) {
		default:
			return state;
	}
};

// Actions
const signup = (dispatch) => ({ email, password }) => {
    // make api request to sign up with that email and password
    try {
        const response = await trackerApi.post('/signup', { email, password })
        console.log(response.data)
    } catch (err) {
        console.log(err.message)
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
	{},
	{ isSignedIn: false }
);
