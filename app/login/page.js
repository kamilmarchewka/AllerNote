import Link from "next/link";
import React from "react";
import LinkUnderline from "@/components/buttons/LinkUnderline";
import ButtonPrimary from "@/components/buttons/ButtonPrimary";
import InputBox from "@/components/login/InputBox";
import GoBackIcon from "@/components/login/GoBackIcon";
import Card from "@/components/login/Card";
import Form from "@/components/login/Form";
import Dandelion from "@/components/login/Dandelion";
import { getFirestore, collection, getDocs } from "firebase/firestore";
import { firestore } from "@/lib/firebase/firebase";

export default async function Login() {
  const items = [];
  const citiesCollection = collection(firestore, "cities");
  const querySnapshot = await getDocs(citiesCollection);

  querySnapshot.forEach((doc) => {
    items.push({ id: doc.id, ...doc.data() });
  });

  console.table(items);
  return (
    <section className="flex items-center pt-32 pb-10 lg:min-h-[calc(100vh-40px)]">
      {/* Background svg */}
      <div className="invisible md:visible fixed bottom-0 left-[8vw] origin-bottom animate-[dandelion-left_18s_ease-in-out_infinite]">
        <Dandelion />
      </div>
      <div className="invisible md:visible fixed -bottom-14 left-[13vw] transform origin-bottom rotate-[30deg] animate-[dandelion-right_15s_ease-in-out_infinite]">
        <Dandelion />
      </div>

      {/* Login in form */}
      <Card title="Zaloguj się">
        <Form email password btnText={"Zaloguj się"} />
      </Card>
    </section>
  );
}
