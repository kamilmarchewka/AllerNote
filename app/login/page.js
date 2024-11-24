import Link from "next/link";
import React from "react";
import LinkUnderline from "@/components/buttons/LinkUnderline";
import ButtonPrimary from "@/components/buttons/ButtonPrimary";
import InputBox from "@/components/login/InputBox";
import GoBackIcon from "@/components/login/GoBackIcon";
import Card from "@/components/login/Card";
import Form from "@/components/login/Form";

export default function Login() {
  return (
    <section className=" flex items-center pt-32 pb-14 lg:min-h-[calc(100vh-40px)]">
      {/* Background svg */}

      {/* Login in form */}
      <Card title="Zaloguj się">
        <Form email password btnText={"Zaloguj się"} />
      </Card>
    </section>
  );
}
