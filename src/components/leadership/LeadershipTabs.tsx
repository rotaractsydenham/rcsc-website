"use client";

import { useState } from "react";
import { board } from "@/content/board";
import BoardCard from "./BoardCard";

const tabs = [
  {
    id: "CORE",
    label: "Core Team",
  },
  {
    id: "MAIN_AVENUES",
    label: "Main Avenues",
  },
  {
    id: "SUPPORTING_FUNCTIONS",
    label: "Supporting Functions",
  },
];

export default function LeadershipTabs() {
  const [activeTab, setActiveTab] =
    useState("CORE");

  const members = board.filter(
    (member) => member.group === activeTab
  );

  return (
    <>
      <div className="mb-14 flex flex-wrap justify-center gap-4">

        {tabs.map((tab) => (

          <button
            key={tab.id}
            onClick={() => setActiveTab(tab.id)}
            className={`rounded-full px-6 py-3 font-medium transition

            ${
              activeTab === tab.id
                ? "bg-yellow-500 text-slate-900"
                : "border hover:bg-slate-100 dark:hover:bg-slate-800"
            }`}
          >
            {tab.label}
          </button>

        ))}

      </div>

      <div
        className={`grid gap-8 ${
          activeTab === "SUPPORTING_FUNCTIONS"
            ? "sm:grid-cols-2 lg:grid-cols-5"
            : activeTab === "MAIN_AVENUES"
            ? "md:grid-cols-2 lg:grid-cols-3"
            : "md:grid-cols-2 xl:grid-cols-4"
        }`}
      >
        {members.map((member, index) => (
          <BoardCard
            key={member.id}
            member={member}
            featured={
              activeTab === "CORE" &&
              index === 0
            }
            compact={
              activeTab === "SUPPORTING_FUNCTIONS"
            }
          />
        ))}
      </div>
    </>
  );
}