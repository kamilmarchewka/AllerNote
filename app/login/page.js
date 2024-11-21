import InputBox from "@/components/login/InputBox";
import React from "react";

export default function Auth() {
  return (
    <>
      <section className="bg-eden-500">
        {/* Background svg */}

        {/* Login in form */}
        <section className="mt-20">
          <header>
            <h2>Zaloguj się</h2>
          </header>

          <form>
            <InputBox />

            <div>
              <label>hasło:</label>
              <input type="password" required />
            </div>
          </form>
        </section>
      </section>
    </>
  );
}
