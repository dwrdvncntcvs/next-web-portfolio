import { createAsyncThunk } from "@reduxjs/toolkit";
import { db } from "configs/firebase";
import FireStoreCollection from "../../../firebase/firestoreCollection";
import { HomeModelData } from "models/HomeData";
import { F_COLLECTION } from "variables";

const getHomePageData = createAsyncThunk(
    "homePage/getHomeData",
    async (_, { rejectWithValue }) => {
        try {
            const firestoreCollection = new FireStoreCollection<HomeModelData>(
                db,
                F_COLLECTION.HOME
            );

            const data = await firestoreCollection.getData();

            return data;
        } catch (err) {
            rejectWithValue(err);
        }
    }
);

export { getHomePageData };
