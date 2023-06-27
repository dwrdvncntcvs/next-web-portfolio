import { createAsyncThunk } from "@reduxjs/toolkit";
import { db } from "configs/firebase";
import FireStoreCollection from "../../../firebase/firestoreCollection";
import { F_COLLECTION } from "variables";

const firestoreCollection = new FireStoreCollection(
    db,
    F_COLLECTION.EXPERIENCE
);

const getExperiencesData = createAsyncThunk(
    "experiences/getExperiencesData",
    async (_, { rejectWithValue }) => {
        try {
            return await firestoreCollection.getData();
        } catch (err) {
            rejectWithValue(err);
        }
    }
);

export { getExperiencesData };
