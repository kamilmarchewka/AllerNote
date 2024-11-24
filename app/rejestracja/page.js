import React from "react";
import Card from "@/components/login/Card";
import GoBackIcon from "@/components/login/GoBackIcon";
import Form from "@/components/login/Form";
import Link from "next/link";

export default function Registration() {
  return (
    <section className=" flex items-center pt-32 pb-14 lg:min-h-[calc(100vh-40px)]">
      {/* Background svg */}

      {/* Registration form */}
      <Card title="Rejestracja">
        <>
          <Link
            href="/login"
            className="block w-10 p-2 absolute left-3 top-3 transform hover:-translate-x-1 hover:-rotate-12 transition-transform"
          >
            <GoBackIcon />
          </Link>

          <Form
            password
            email
            nickname
            registration
            btnText={"Zarejestruj się"}
          />
        </>
      </Card>
    </section>
  );
}
