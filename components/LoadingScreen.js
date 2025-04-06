import React from "react";

export default function LoadingScreen({ isLoading = false }) {
  return (
    <div
      className={`${
        isLoading ? " visible " : " invisible"
      } fixed top-0 left-0 w-screen h-screen bg-white/40 f z-[9999] flex items-center justify-center`}
    >
      <div className="rounded-full w-6 h-6 border-4 border-eden-700 border-t-transparent animate-spin"></div>
    </div>
  );
}
