import { createAsyncThunk } from "@reduxjs/toolkit";
import { db } from "configs/firebase";
import FireStoreCollection from "../../../firebase/firestoreCollection";
import { Skill } from "models/SkillsData";
import { F_COLLECTION } from "variables";

const firestoreCollection = new FireStoreCollection<Skill>(
    db,
    F_COLLECTION.SKILLS
);

const getSkillsData = createAsyncThunk(
    "skills/getSkillsData",
    async (_, { rejectWithValue }) => {
        try {
            return await firestoreCollection.getData();
        } catch (err) {
            rejectWithValue(err);
        }
    }
);

export { getSkillsData };
