import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice ({
    name: 'users',
    initialState: {
        users: [],
    },
    reducers: {
        addUser: (state, action) => {
            state.users.push(action.payload);
        },
        addUsers: (state, action) => {
            state.users.push(...action.payload);
        },
        removeUser: (state, action) => {
            state.users = state.users.filter((_, index) => index !== action.payload);
        },
    },
});

export const { addUser, addUsers, removeUser } = userSlice.actions;

export default userSlice.reducer;