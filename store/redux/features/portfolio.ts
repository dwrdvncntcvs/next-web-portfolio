import { createSlice } from "@reduxjs/toolkit";
import { PortfolioData } from "models/PortfolioData";
import { getPortfolioData } from "../api/portfolioApi";

interface PortfolioState {
    data: PortfolioData | undefined;
}

const initialState: PortfolioState = {
    data: undefined,
};

const portfolioSlice = createSlice({
    name: "portfolio",
    initialState,
    reducers: {},
    extraReducers(builders) {
        builders
            .addCase(getPortfolioData.pending, () => {})
            .addCase(getPortfolioData.fulfilled, (state, action) => {
                state.data = action.payload;
            })
            .addCase(getPortfolioData.rejected, () => {});
    },
});

export default portfolioSlice.reducer;
