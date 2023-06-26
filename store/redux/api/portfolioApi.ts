import { createAsyncThunk } from "@reduxjs/toolkit";
import { db } from "configs/firebase";
import FireStoreCollection from "../../../firebase/firestoreCollection";
import { PortfolioData } from "models/PortfolioData";
import { F_COLLECTION } from "variables";

const firestoreCollection = new FireStoreCollection<PortfolioData>(
    db,
    F_COLLECTION.PORTFOLIO
);

const getPortfolioData = createAsyncThunk(
    "portfolio/getPortfoliosData",
    async (_, { rejectWithValue }) => {
        try {
            return await firestoreCollection.getData();
        } catch (err) {
            rejectWithValue(err);
        }
    }
);

export { getPortfolioData };
