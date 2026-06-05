import { NavBar } from "../NavBar";
import { DashboardSideBar } from "./dashboard-sidebar";

import { NewChat } from "../components/new-chat";

export const Dashboard = () => {
  return (
    <div>
      <NavBar />
      <div className="flex h-[calc(100dvh-5.5rem)]">
        <div className="">
          <DashboardSideBar />
        </div>
        <div className="bg-[#F6F6F8] flex-1   p-6 space-y-4 flex flex-col justify-center items-center ">
          <h3 className="font-bold text-3xl">Welcome Sushi</h3>
          <p>Your AI assistant is ready. How may I help?</p>
          <NewChat />
        </div>
      </div>
    </div>
  );
};
