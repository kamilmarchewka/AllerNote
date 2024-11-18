import { collection, addDoc } from "firebase/firestore";
import { db } from "./firebase";

// Add a new document with a generated id.
/**
 * Adds new document to the given collection
 * @param {string} collectionName
 * @param {Object} data
 */
export default async function addDocument(collectionName, data) {
  const docRef = await addDoc(collection(db, collectionName), {
    ...data,
  });
  console.log("Document written with ID: ", docRef.id);
}
