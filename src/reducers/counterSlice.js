import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    count: 0
}

export const counterSlice = createSlice({
    name: 'counter',
    initialState,
    reducers: {
        incriment: (state) => {
            state.count += 1;
        },
        decrement: (state) => {
            state.count -= 1;
        },
        incrimentByAmount: (state, action) => {
            state.count += action.payload;
        }
    }
})

export  const { incriment, decrement, incrimentByAmount } = counterSlice.actions;

export default counterSlice.reducer;