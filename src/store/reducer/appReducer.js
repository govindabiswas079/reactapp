import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    name: "redux"
}
const appReducer = createSlice({
    name: "app",
    initialState,
    reducers: {
        setReducer: (state, action) => {

        }
    }
})

export const { setReducer } = appReducer.actions
export default appReducer.reducer