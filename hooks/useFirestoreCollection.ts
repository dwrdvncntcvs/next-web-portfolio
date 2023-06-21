import { db } from "configs/firebase";
import FireStoreCollection from "../firebase/firestoreCollection";

const useFirestoreCollection = (
    database: typeof db,
    collectionName: string
) => {
    return async () => {
        const firestoreCollection = new FireStoreCollection(
            database,
            collectionName
        );

        const data = await firestoreCollection.getData();
        return data;
    };
};

export default useFirestoreCollection