import { createSlice } from "@reduxjs/toolkit";
const initialState = {
    isLoggedIn: false,
    username: null
}
export const UserAuthSlice = createSlice({




    name: "userAuth",
    initialState,
    reducers: {
        login: (state, action) => { state.isLoggedIn = true;
               state.username = action.payload.username; 
            

            },
        logout: (state) => {state.isLoggedIn = false;
            state.username = null;
            
         }
    }
})

export const { login, logout } = UserAuthSlice.actions;
export const userAuthReducer = UserAuthSlice.reducer;
export default UserAuthSlice.reducer;