"use client";

import React, { useState, useEffect } from "react";
import { formatDate } from "@/utils/date";
import renderButtons from "./CustomRadio";
import CustomRadio from "./CustomRadio";
import CustomRadioToEdit from "./CustomRadioToEdit";
import ButtonSecondary from "../buttons/ButtonSecondary";
import ButtonPrimary from "../buttons/ButtonPrimary";
import { isSameDay } from "@/utils/date";

import {
  Timestamp,
  addDoc,
  collection,
  getDocs,
  query,
  where,
  doc,
  updateDoc,
} from "firebase/firestore";
import { firestore } from "@/lib/firebase/firebase";
import { get } from "mongoose";

export default function SymptomsNote({ selectedDate }) {
  const today = new Date();

  const [samopoczucie, setSamopoczocie] = useState(null);
  const [bolGlowy, setBolGlowy] = useState(null);
  const [katar, setKatar] = useState(null);
  const [nos, setNos] = useState(null);
  const [oko, setOko] = useState(null);
  const [kaszel, setKaszel] = useState(null);
  const [note, setNote] = useState("");

  const [isEditing, setIsEditing] = useState(false);

  const SYMPTOMS = [
    {
      symptom: "samopoczucie",
      currentValue: samopoczucie,
      stateSetter: setSamopoczocie,
    },
    {
      stateSetter: setBolGlowy,
      currentValue: bolGlowy,
      symptom: "ból głowy",
    },
    {
      stateSetter: setKatar,
      currentValue: katar,
      symptom: "katar",
    },
    {
      stateSetter: setNos,
      currentValue: nos,
      symptom: "swędzenie oczu",
    },
    {
      stateSetter: setOko,
      currentValue: oko,
      symptom: "swędzenie nosa",
    },
    {
      stateSetter: setKaszel,
      currentValue: kaszel,
      symptom: "kaszel",
    },
  ];

  const selectedDateStr = formatDate(selectedDate);

  async function submitHandler(e) {
    e.preventDefault();
    setIsEditing(false);

    const data = {
      content: note,
      created_at: selectedDate,
    };

    await addOrUpdateNote(selectedDate, "kamil@gmail.com", "dupa");

    async function addOrUpdateNote(selectedDate, userEmail, noteContent) {
      try {
        const usersRef = collection(firestore, "users");

        // Query to find the user by email
        const emailQuery = query(usersRef, where("email", "==", userEmail));
        const userSnapshot = await getDocs(emailQuery);

        if (userSnapshot.empty) {
          console.log("No user found with this email");
          return;
        }

        // Get the user's document
        const userDoc = userSnapshot.docs[0];
        const notesRef = collection(firestore, "users", userDoc.id, "notes");
        const notesSnapshot = await getDocs(notesRef);

        // Check if a note already exists for the selected date
        const existingNote = notesSnapshot.docs.find((noteDoc) => {
          const noteData = noteDoc.data();
          const createdAt = noteData.created_at?.toDate(); // Convert Firestore Timestamp to Date object
          return createdAt && isSameDay(createdAt, selectedDate);
        });

        if (existingNote) {
          // If a note exists, update it
          const noteDocRef = doc(
            firestore,
            "users",
            userDoc.id,
            "notes",
            existingNote.id
          );
          await updateDoc(noteDocRef, {
            content: noteContent, // Update the content
          });
          console.log("Note updated successfully!");
        } else {
          // If no note exists, add a new one
          const newNote = {
            content: noteContent,
            created_at: Timestamp.fromDate(selectedDate), // Set created_at to the selected date
          };

          // Add the new note to Firestore
          await addDoc(notesRef, newNote);
          console.log("New note added successfully!");
        }
      } catch (error) {
        console.error("Error adding or updating note:", error);
      }
    }

    console.log("selecteddate", selectedDate);

    const receivedNotes = await getNotesForSelectedDate(selectedDate);
    console.log("note", receivedNotes[0].content);
  }

  function isToday(date) {
    const selected = new Date(date);
    return (
      today.getFullYear() === selected.getFullYear() &&
      today.getMonth() === selected.getMonth() &&
      today.getDate() === selected.getDate()
    );
  }

  async function getNotesForSelectedDate(selectedDate) {
    try {
      const usersRef = collection(firestore, "users");
      const userEmail = "kamil@gmail.com"; // Replace with actual user email or dynamic value

      // Get the user document based on the email
      const emailQuery = query(usersRef, where("email", "==", userEmail));
      const userSnapshot = await getDocs(emailQuery);

      if (userSnapshot.empty) {
        console.log("No user found with this email");
        return [];
      }

      // Get the user's notes collection
      const userDoc = userSnapshot.docs[0];
      const notesRef = collection(firestore, "users", userDoc.id, "notes");
      const notesSnapshot = await getDocs(notesRef);

      // Filter notes where the created_at date is the same as selectedDate
      const filteredNotes = notesSnapshot.docs
        .filter((noteDoc) => {
          const noteData = noteDoc.data();
          const createdAt = noteData.created_at?.toDate(); // Convert Firestore Timestamp to JavaScript Date object
          return createdAt && isSameDay(createdAt, selectedDate);
        })
        .map((doc) => doc.data()); // Map the filtered documents to data

      return filteredNotes;
    } catch (error) {
      console.error("Error fetching notes:", error);
      return [];
    }
  }

  async function addOrUpdateNote(selectedDate, userEmail, noteContent) {
    try {
      const usersRef = collection(firestore, "users");

      // Query to find the user by email
      const emailQuery = query(usersRef, where("email", "==", userEmail));
      const userSnapshot = await getDocs(emailQuery);

      if (userSnapshot.empty) {
        console.log("No user found with this email");
        return;
      }

      // Get the user's document
      const userDoc = userSnapshot.docs[0];
      const notesRef = collection(firestore, "users", userDoc.id, "notes");
      const notesSnapshot = await getDocs(notesRef);

      // Check if a note already exists for the selected date
      const existingNote = notesSnapshot.docs.find((noteDoc) => {
        const noteData = noteDoc.data();
        const createdAt = noteData.created_at?.toDate(); // Convert Firestore Timestamp to Date object
        return createdAt && isSameDay(createdAt, selectedDate);
      });

      if (existingNote) {
        // If a note exists, update it
        const noteDocRef = doc(
          firestore,
          "users",
          userDoc.id,
          "notes",
          existingNote.id
        );
        await updateDoc(noteDocRef, {
          content: noteContent, // Update the content
          updated_at: Timestamp.fromDate(new Date()), // Optional: track the update time
        });
        console.log("Note updated successfully!");
      } else {
        // If no note exists, add a new one
        const newNote = {
          content: noteContent,
          created_at: Timestamp.fromDate(selectedDate), // Set created_at to the selected date
        };

        // Add the new note to Firestore
        await addDoc(notesRef, newNote);
        console.log("New note added successfully!");
      }
    } catch (error) {
      console.error("Error adding or updating note:", error);
    }
  }

  return (
    <section className="flex flex-col">
      <header className="mb-9">
        <h1 className="flex justify-between items-center text-3xl font-bold">
          {selectedDateStr}
          {selectedDate < today && !isToday(selectedDate) && (
            <ButtonSecondary>
              Co niósł wiatr?{" "}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="size-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M9 12h3.75M9 15h3.75M9 18h3.75m3 .75H18a2.25 2.25 0 0 0 2.25-2.25V6.108c0-1.135-.845-2.098-1.976-2.192a48.424 48.424 0 0 0-1.123-.08m-5.801 0c-.065.21-.1.433-.1.664 0 .414.336.75.75.75h4.5a.75.75 0 0 0 .75-.75 2.25 2.25 0 0 0-.1-.664m-5.8 0A2.251 2.251 0 0 1 13.5 2.25H15c1.012 0 1.867.668 2.15 1.586m-5.8 0c-.376.023-.75.05-1.124.08C9.095 4.01 8.25 4.973 8.25 6.108V8.25m0 0H4.875c-.621 0-1.125.504-1.125 1.125v11.25c0 .621.504 1.125 1.125 1.125h9.75c.621 0 1.125-.504 1.125-1.125V9.375c0-.621-.504-1.125-1.125-1.125H8.25ZM6.75 12h.008v.008H6.75V12Zm0 3h.008v.008H6.75V15Zm0 3h.008v.008H6.75V18Z"
                />
              </svg>
            </ButtonSecondary>
          )}
          {isToday(selectedDate) && (
            <ButtonSecondary>
              Co niesie wiatr?{" "}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="size-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M9 12h3.75M9 15h3.75M9 18h3.75m3 .75H18a2.25 2.25 0 0 0 2.25-2.25V6.108c0-1.135-.845-2.098-1.976-2.192a48.424 48.424 0 0 0-1.123-.08m-5.801 0c-.065.21-.1.433-.1.664 0 .414.336.75.75.75h4.5a.75.75 0 0 0 .75-.75 2.25 2.25 0 0 0-.1-.664m-5.8 0A2.251 2.251 0 0 1 13.5 2.25H15c1.012 0 1.867.668 2.15 1.586m-5.8 0c-.376.023-.75.05-1.124.08C9.095 4.01 8.25 4.973 8.25 6.108V8.25m0 0H4.875c-.621 0-1.125.504-1.125 1.125v11.25c0 .621.504 1.125 1.125 1.125h9.75c.621 0 1.125-.504 1.125-1.125V9.375c0-.621-.504-1.125-1.125-1.125H8.25ZM6.75 12h.008v.008H6.75V12Zm0 3h.008v.008H6.75V15Zm0 3h.008v.008H6.75V18Z"
                />
              </svg>
            </ButtonSecondary>
          )}
        </h1>
      </header>
      <form className="flex flex-col gap-8 ">
        <div>
          <header className="mb-2">
            <h2 className="text-xl first-line:italic">MOJE OBIAWY:</h2>
          </header>
          <div className="lg:pr-16">
            {SYMPTOMS.map(({ stateSetter, currentValue, symptom }) =>
              isEditing ? (
                <CustomRadio
                  key={symptom}
                  stateSetter={stateSetter}
                  currentValue={currentValue}
                  symptom={symptom}
                />
              ) : (
                <CustomRadioToEdit
                  key={symptom}
                  symptom={symptom}
                  currentValue={currentValue}
                />
              )
            )}
          </div>
        </div>

        <div>
          <header className="mb-2 mt-5">
            <h2 className="text-xl italic">NOTATKA:</h2>
          </header>

          {isEditing ? (
            <textarea
              id="userNote"
              value={note}
              onChange={(e) => setNote(e.target.value)}
              rows="5"
              className="block mt-0.5 p-1.5 w-full h-44 text-sm border bg-white rounded-lg resize-none shadow-md"
              placeholder="Dzisiaj czuję się..."
            ></textarea>
          ) : (
            <textarea
              disabled
              id="userNote"
              value={note}
              rows="5"
              className="block mt-0.5 p-1.5 w-full h-44 text-sm border bg-white rounded-lg resize-none shadow-md"
              placeholder="Dzisiaj czuję się..."
            ></textarea>
          )}
        </div>
        <div className="ml-auto flex gap-5">
          {!isEditing ? (
            <ButtonPrimary style="green" onClick={() => setIsEditing(true)}>
              Edytuj
            </ButtonPrimary>
          ) : (
            <>
              <ButtonPrimary
                type="reset"
                style="red"
                onClick={() => setIsEditing(false)}
              >
                Anuluj
              </ButtonPrimary>
              <ButtonPrimary
                type="submit"
                style="green"
                onClick={submitHandler}
              >
                Zapisz
              </ButtonPrimary>
            </>
          )}
        </div>
      </form>
    </section>
  );
}
