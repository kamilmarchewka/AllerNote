import React from "react";

export default function Auth() {
  return (
    <>
      <section className="bg-pink-200">
        {/* Background svg */}

        {/* Login in form */}
        <section className="mt-20">
          <header>
            <h2>Zaloguj się</h2>
          </header>

          <form>
            <div>
              <label>email:</label>
              <input type="email" required placeholder="example@gmail.com" />
            </div>
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
