"use client";

import { Authenticated } from "@nerve-js/next";

export default function Home() {
  return (
    <Authenticated>
      <div className="min-h-svh flex flex-row justify-center items-center">
        {"You are authenticated"}
      </div>
    </Authenticated>
  );
}
