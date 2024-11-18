// lib/firebase/addNote.js
import { collection, addDoc } from "firebase/firestore";
import { db } from "@/lib/firebase/firebase";

/**
 * Function to add a new note to a specific user's subcollection
 * @param {string} userId - The ID of the user
 * @param {object} noteData - The data for the note (e.g., title, content)
 * @returns {Promise} - A promise that resolves with the new note's ID
 */
export default async function addNoteToTheUser(userId, noteData) {
  try {
    // Reference to the user's notes subcollection
    const notesCollectionRef = collection(db, `users/${userId}/notes`);

    // Add the new note to the subcollection
    const docRef = await addDoc(notesCollectionRef, noteData);

    console.log("Note added with ID: ", docRef.id);
    return docRef.id; // Return the note's document ID
  } catch (error) {
    console.error("Error adding note: ", error);
    throw error; // Re-throw the error for handling elsewhere
  }
}
