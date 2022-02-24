import { createSlice } from "@reduxjs/toolkit";
import data from '../data';

export const patientSlice = createSlice({
    name : "patients",
    initialState : {value : data},
    reducers : {
        addPatient : (state, action) => {
            state.value.push(action.payload)
        },

        deletePatient : (state, action) => {
            state.value = state.value.filter((patient) => patient.id !== action.payload.id)
        }
    },
});

export const { addPatient, deletePatient } = patientSlice.actions
export default patientSlice.reducer;