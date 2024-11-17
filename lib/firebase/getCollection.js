// lib/firebase/getCollection.js
import { collection, getDocs } from "firebase/firestore";
import { db } from "@/lib/firebase/firebase";

/**
 * Function to get all documents from a specified Firestore collection
 * @param {string} collectionName - The name of the Firestore collection
 * @returns {Promise<Array>} - A promise that resolves to an array of document data
 */
export async function getCollection(collectionName) {
  try {
    const collectionRef = collection(db, collectionName);
    const querySnapshot = await getDocs(collectionRef);

    // Map over the documents and return an array of data
    const data = querySnapshot.docs.map((doc) => ({
      ...doc.data(),
      id: doc.id,
    }));

    return data; // This should always return an array
  } catch (error) {
    console.error("Error getting collection: ", error);
    return []; // Return an empty array in case of error
  }
}
