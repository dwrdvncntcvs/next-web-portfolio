import { createAsyncThunk } from "@reduxjs/toolkit";
import { db } from "configs/firebase";
import FireStoreCollection from "../../../firebase/firestoreCollection";
import { ProjectDetailsData } from "models/PortfolioData";
import { F_COLLECTION } from "variables";

const firestoreCollection = new FireStoreCollection<ProjectDetailsData>(
    db,
    F_COLLECTION.PORTFOLIO_DETAILS
);

const getPortfolioDetails = createAsyncThunk(
    "portfolioDetails/getPortfoliosDetails",
    async (projectId: string, { rejectWithValue }) => {
        try {
            return await firestoreCollection.getDataDetails(projectId);
        } catch (err) {
            rejectWithValue(err);
        }
    }
);

export { getPortfolioDetails };
