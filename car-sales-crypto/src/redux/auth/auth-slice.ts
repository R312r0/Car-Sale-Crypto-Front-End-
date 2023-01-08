import { createSlice } from "@reduxjs/toolkit";


interface AuthState {
	loggedIn: boolean
}

const initialState = {loggedIn: false} as AuthState;

const authSlice = createSlice({
	name: "auth",
	initialState,
	reducers: {
		signIn(state) {
			state.loggedIn = true
		}
	}
})

export const {signIn} = authSlice.actions;
export default authSlice.reducer;