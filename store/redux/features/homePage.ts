import { createSlice } from "@reduxjs/toolkit";
import { HomeModelData } from "models/HomeData";
import { getHomePageData } from "../api/homePageApi";

interface HomePageState {
    data: HomeModelData | undefined;
}

const initialState: HomePageState = {
    data: undefined,
};

const homePageSlice = createSlice({
    name: "homePage",
    initialState,
    reducers: {},
    extraReducers(builders) {
        builders
            .addCase(getHomePageData.pending, () => {})
            .addCase(getHomePageData.fulfilled, (state, action) => {
                state.data = action.payload;
            })
            .addCase(getHomePageData.rejected, () => {});
    },
});

export default homePageSlice.reducer;
