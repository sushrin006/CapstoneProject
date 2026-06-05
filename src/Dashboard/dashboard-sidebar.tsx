import React, { useState } from "react";
import HamburgerIcon from "../icons/hamburger-icon";
import NewChatIcon from "../icons/new-chat-icon";

export const DashboardSideBar = () => {
  const [open, setOpen] = useState(true);
  return (
    <div className={`space-y-6 bg-white p-6 ${!open ? "w-[4rem]" : "w-full"}`}>
      <HamburgerIcon width={24} height={24} onClick={() => setOpen(!open)} />
      <div hidden={!open} className="space-y-6">
        <div className="flex gap-2 ">
          <NewChatIcon width={24} height={24} />
          <p className="font-bold text-lg"> New Chat</p>
        </div>
        <div className="flex flex-col gap-4">
          <p className="font-semibold text-lg">   
            Quantum Computing Market Analysis
          </p>
          <p className="font-semibold text-lg">CRISPR Ethics Research Paper</p>
          <p className="font-semibold text-lg">
            Q3 Fin-Tech Growth Projections
          </p>
          <p className="font-semibold text-lg">
            Quantum Computing Market Analysis
          </p>
        </div>
      </div>
    </div>
  );
};
