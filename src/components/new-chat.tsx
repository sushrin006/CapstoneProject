
import { Link } from "react-router-dom";

export const NewChat = () => {
  return (
    <Link to="/chat-page">
    <div className="flex bg-[#1846CF] p-4 w-fit rounded-2xl gap-2">
      <svg
        width="50"
        height="40"
        viewBox="0 0 64 58"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <rect width="64" height="58" rx="8" fill="#466BD9" />
        <path
          d="M28 29H36M32 25V33M25 20H39C40.1046 20 41 20.8954 41 22V36C41 37.1046 40.1046 38 39 38H25C23.8954 38 23 37.1046 23 36V22C23 20.8954 23.8954 20 25 20Z"
          stroke="white"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
      </svg>
      <div>
        <p className="font-bold text-xl text-white">Create New Chat</p>
        <p className="text-gray-300">Start a fresh AI-powered new session.....</p>
      </div>
    </div>
  </Link>)
};
