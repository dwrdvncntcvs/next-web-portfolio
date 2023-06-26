import { db } from "configs/firebase";
import { getDocs, collection, getDoc, doc } from "firebase/firestore";

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

    async getDataDetails(id: string): Promise<T> {
        const dataRef = doc(db, this.collectionName, id);
        const dataDetails = await getDoc(dataRef);
        const docData = dataDetails.data();

        const data = {
            ...docData,
            details: {
                ...docData?.details,
                createdAt: JSON.stringify(docData?.details.createdAt),
                endedAt: JSON.stringify(docData?.details.endedAt),
            },
        };

        return data as T;
    }
}
