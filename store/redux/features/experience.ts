import { createSlice } from "@reduxjs/toolkit";
import { Experience } from "models/ExperienceData";
import { getExperiencesData } from "../api/experienceApi";

interface ExperienceState {
    data: Experience | undefined;
}

const initialState: ExperienceState = {
    data: undefined,
};

const experienceSlice = createSlice({
    name: "experience",
    initialState,
    reducers: {},
    extraReducers(builder) {
        builder
            .addCase(getExperiencesData.pending, () => {})
            .addCase(getExperiencesData.fulfilled, (state, action) => {
                state.data = action.payload;
            })
            .addCase(getExperiencesData.rejected, () => {});
    },
});

export default experienceSlice.reducer;
