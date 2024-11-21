import React from "react";

export default function InputBox() {
  return (
    <div className="flex flex-col relative">
      <label className="text-white/80 font-extralight italic uppercase">
        email:
      </label>
      <input
        type="email"
        required
        placeholder="example@gmail.com"
        className="peer block p-1 bg-transparent text-white font-bold text-base border-b border-white/50 placeholder-white/80 placeholder:font-normal focus-within:outline-none"
      />
      {/* Underline */}
      <div className="absolute bottom-0 left-0 w-full h-px bg-white transform -translate-x-full peer-focus-within:translate-x-0 peer-valid:translate-x-0 transition-transform"></div>
    </div>
  );
}
