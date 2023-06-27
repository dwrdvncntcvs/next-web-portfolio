import { createSlice } from "@reduxjs/toolkit";
import { Skill } from "models/SkillsData";
import { getSkillsData } from "../api/skillsPageApi";

interface SkillState {
    data: Skill | undefined;
}

const initialState: SkillState = {
    data: undefined,
};

const skillSlice = createSlice({
    name: "skill",
    initialState,
    reducers: {},
    extraReducers(builder) {
        builder
            .addCase(getSkillsData.pending, () => {})
            .addCase(getSkillsData.fulfilled, (state, action) => {
                state.data = action.payload;
            })
            .addCase(getSkillsData.rejected, () => {});
    },
});

export default skillSlice.reducer;
