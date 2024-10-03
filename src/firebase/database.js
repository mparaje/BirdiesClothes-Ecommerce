import { getFirestore, collection, getDocs } from "firebase/firestore";
import { app } from "./config";

const db = getFirestore(app);

export const getItems = async (setItems) => {
    const querySnapshot = await getDocs(collection(db, "items"));
    const products = [];

    querySnapshot.forEach((doc) => {
        products.push(doc.data());
    });

    setItems(products);
}