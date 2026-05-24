import Chatbox from "../components/chat-box";
import { NavBar } from "../NavBar";
import { SideBar } from "../SideBar";

export const ChatPage = () => {
  return (
    <div className="h-screen w-screen bg-[#F6F6F8] overflow-x-hidden">
      <NavBar />
      <div className="flex">
        <SideBar />
        <Chatbox />
      </div>
    </div>
  );
};
