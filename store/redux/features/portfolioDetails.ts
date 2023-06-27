import { createSlice } from "@reduxjs/toolkit";
import { ProjectDetailsData } from "models/PortfolioData";
import { getPortfolioDetails } from "../api/portfolioDetailsApi";

interface PortfolioDetailsState {
    data: ProjectDetailsData | undefined;
}

const initialState: PortfolioDetailsState = { data: undefined };

const portfolioDetailsSlice = createSlice({
    name: "portfolioDetailsSlice",
    initialState,
    reducers: {},
    extraReducers(builder) {
        builder
            .addCase(getPortfolioDetails.pending, () => {})
            .addCase(getPortfolioDetails.fulfilled, (state, action) => {
                state.data = action.payload;
            })
            .addCase(getPortfolioDetails.rejected, () => {});
    },
});

export default portfolioDetailsSlice.reducer;
