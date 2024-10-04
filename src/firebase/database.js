import { 
    getFirestore, 
    collection, 
    getDocs, 
    doc, 
    getDoc,
    query,
    where, 
    addDoc
} from "firebase/firestore";

import { app } from "./config";

const db = getFirestore(app);

export const getProducts = async (setItems) => {
    const querySnapshot = await getDocs(collection(db, "products"));
    const products = [];

    querySnapshot.forEach((doc) => {
        products.push(doc.data());
    });

    setItems(products);
}

export const getSingleProduct = async(id, setItem) => {
    const docRef = doc(db, "products", id);
    const docSnap = await getDoc(docRef);

    if (docSnap.exists()) {
        setItem(docSnap.data());
    } else {
        console.log("No such document!");
    }
}

export const getProductsByCategory = async(category, setItems) => {
    const q = query(collection(db, "products"), where("category", "==", category));
    const querySnapshot = await getDocs(q);
    const productsByCategory = [];
    querySnapshot.forEach((doc) => {
        productsByCategory.push(doc.data())
    });
    setItems(productsByCategory);
}


export const getCategories = async (setCategories) => {
    const querySnapshot = await getDocs(collection(db, "products"));
    const categoriesSet = new Set();

    querySnapshot.forEach((doc) => {
        const product = doc.data();
        if (product.category) {
            categoriesSet.add(product.category);
        }
    });

    const categories = Array.from(categoriesSet);
    setCategories(categories);
}

export const createOrder = async (order) => {
    try {
        const docRef = await addDoc(collection(db, "orders"), order);
        return (docRef.id);
      } catch (e) {
        console.error("Error adding document: ", e);
      }
} 

