import React from "react";
import { useRouter } from "next/router";

const ErrorScreen = () => {
  const router = useRouter();

  return (
    <div className="w-full h-screen flex justify-center items-center">
      <div className="flex flex-col items-center gap-5">
        <h1>Failed to load</h1>

        <button
          onClick={() => router.back()}
          className="px-3 py-3 w-52 mx-auto uppercase text-xs text-center text-main cursor-pointer rounded-3xl bg-gray-600 hover:bg-gray-700 my-2.5"
        >
          Head Back
        </button>
      </div>
    </div>
  );
};

export default ErrorScreen;
