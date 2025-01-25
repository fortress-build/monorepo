"use client";

import Sidebar from "@/components/Dashboard/Sidebar";
import Header from "@/components/Dashboard/Header";

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex flex-col bg-white">
      <Header />
      <div className="flex">
        <div className="fixed inset-y-0 top-[57px]">
          <Sidebar />
        </div>
        <main className="flex-1 p-8 ml-64 min-h-screen overflow-auto">
          {children}
        </main>
      </div>
    </div>
  );
}
