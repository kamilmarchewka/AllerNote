"use client";

import React, { useState, useEffect } from "react";
import { formatDate, isToday, isSameDay } from "@/utils/date";
import CustomRadio from "./CustomRadio";
import CustomRadioToEdit from "./CustomRadioToEdit";
import ButtonSecondary from "../buttons/ButtonSecondary";
import ButtonPrimary from "../buttons/ButtonPrimary";
import { createClient } from "@/utils/supabase/client";

export default function SymptomsNote({ selectedDate }) {
  const today = new Date();

  const [samopoczucie, setSamopoczocie] = useState(0);
  const [bolGlowy, setBolGlowy] = useState(0);
  const [katar, setKatar] = useState(0);
  const [nos, setNos] = useState(0);
  const [oko, setOko] = useState(0);
  const [kaszel, setKaszel] = useState(0);
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

  useEffect(() => {
    getNote(selectedDate).then((data) => {
      console.log(data);

      setSamopoczocie(data[0]?.samopoczucie || 0);
      setBolGlowy(data[0]?.bol_glowy || 0);
      setKatar(data[0]?.katar || 0);
      setNos(data[0]?.swedzenie_nosa || 0);
      setOko(data[0]?.swedzenie_oczu || 0);
      setKaszel(data[0]?.kaszel || 0);
      setNote(data[0]?.content || "");
    });
  }, [selectedDate]);

  async function addOrUpdateNote(selectedDate, userData) {
    console.log("SELECTED DATE", selectedDate);
    const supabase = createClient();

    const user = (await supabase.auth.getSession()).data.session.user;
    const transformedDate = new Date(
      selectedDate.getTime() - selectedDate.getTimezoneOffset() * 60000
    )
      .toISOString()
      .split("T")[0];
    console.log("transformedDate", transformedDate);

    const { data, error } = await supabase
      .from("notes")
      .select("*")
      .eq("user_id", user.id)
      .eq("date", transformedDate);

    if (data.length === 0) {
      console.log("No data found, creating new note");

      const { data, error } = await supabase.from("notes").insert({
        user_id: user.id,
        date: transformedDate,
        ...userData,
      });

      console.log("note added:", data);
    } else {
      console.log("Data found, updating note");
      const { data, error } = await supabase
        .from("notes")
        .update({
          ...userData,
        })
        .eq("user_id", user.id)
        .eq("date", transformedDate);
    }

    console.log("userid", user.id);
    console.log("Data:", data);
    console.log("Error:", error);
  }

  async function getNote(selectedDate) {
    const supabase = createClient();

    const user = (await supabase.auth.getSession()).data.session.user;
    const transformedDate = new Date(
      selectedDate.getTime() - selectedDate.getTimezoneOffset() * 60000
    )
      .toISOString()
      .split("T")[0];
    console.log("transformedDate", transformedDate);

    const { data, error } = await supabase
      .from("notes")
      .select("*")
      .eq("user_id", user.id)
      .eq("date", transformedDate);

    return data;
  }

  async function submitHandler(e) {
    console.log("SELECTED DATE", selectedDate);
    e.preventDefault();
    setIsEditing(false);

    const data = {
      samopoczucie: samopoczucie,
      bol_glowy: bolGlowy,
      katar: katar,
      swedzenie_oczu: oko,
      swedzenie_nosa: nos,
      kaszel: kaszel,
      content: note,
    };

    await addOrUpdateNote(selectedDate, data);
  }

  async function cancelHandler(e) {
    e.preventDefault();
    setIsEditing(false);
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
              <ButtonPrimary type="reset" style="red" onClick={cancelHandler}>
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
