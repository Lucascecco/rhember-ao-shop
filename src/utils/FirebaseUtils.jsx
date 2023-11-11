import { getFirestore, getDocs, collection, query, where, getDoc, doc, addDoc } from "firebase/firestore/lite"


export function getProducts() {
    const db = getFirestore()
    const itemsCollection = collection(db, "items")
    return getDocs(itemsCollection)
}

export function getCategoryProducts(category) {
    const db = getFirestore()
    const itemsCollection = query(collection(db, "items"), where("category", "==", category))
    return getDocs(itemsCollection)
}

export function getProduct(id) {
    const db = getFirestore()
    let item = doc(db, "items", id)
    return getDoc(item)
}

export function addOrder(products, buyer, total) {
    const order = {
        products: products.map((prod) => ({id: prod.id, quantity: prod.quantity})),
        buyer: buyer,
        total: total
    }
    const db = getFirestore()
    addDoc(collection(db, "orders"), order)
}
