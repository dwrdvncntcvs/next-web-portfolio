import { db } from "configs/firebase";
import { getDocs, collection } from "firebase/firestore";

export default class FireStoreCollection<T = any> {
    constructor(private database: typeof db, private collectionName: string) {}

    async getData(): Promise<T> {
        const dataCollection = collection(this.database, this.collectionName);

        const dataDocs = await getDocs(dataCollection);
        const [data] = dataDocs.docs.map((doc) => ({
            id: doc.id,
            ...doc.data(),
        }));

        return data as T;
    }
}
