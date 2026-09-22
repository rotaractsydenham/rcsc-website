"use client";

import { useState } from "react";

import { board } from "@/content/board";
import BoardCard from "./BoardCard";

import HorizontalSnap from "@/components/ui/HorizontalSnap";
import SnapItem from "@/components/ui/SnapItem";

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
  const [activeTab, setActiveTab] = useState("CORE");

  const members = board.filter(
    (member) => member.group === activeTab
  );

  return (
    <>
      {/* Tabs */}

      <div className="mb-14 flex flex-wrap justify-center gap-4">

        {tabs.map((tab) => (

          <button
            key={tab.id}
            onClick={() => setActiveTab(tab.id)}
            className={`rounded-full px-6 py-3 font-medium transition ${
              activeTab === tab.id
                ? "bg-yellow-500 text-slate-900"
                : "border hover:bg-slate-100 dark:hover:bg-slate-800"
            }`}
          >
            {tab.label}
          </button>

        ))}

      </div>

      {/* Leadership Cards */}

      <HorizontalSnap>

        {members.map((member, index) => (

          <SnapItem key={member.id}>

            <BoardCard
              member={member}
              featured={
                activeTab === "CORE" &&
                index === 0
              }
              compact={
                activeTab === "SUPPORTING_FUNCTIONS"
              }
            />

          </SnapItem>

        ))}

      </HorizontalSnap>
    </>
  );
}