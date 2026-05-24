import { SearchInputField } from "./components/search-field";
import { Settings, Share } from "lucide-react";

export const NavBar = () => {
  return (
    <div className=" flex justify-between items-center p-3 bg-white border-b border-gray-900">
      <div className="flex gap-12">
        <h3 className="text-2xl font-bold"> Insight Engine</h3>
        <SearchInputField />
      </div>
      <div className="flex gap-6 items-center">
        {/* <div className="flex gap-6"> */}
        <Settings />
        <Share />
        {/* </div> */}
        <div className="h-full min-h-8 w-[1px] bg-black"></div>
        <div className="flex gap-2 items-center">
          <div>
            <h3 className="font-bold text-lg">Sushrin</h3>
            <p>Research Lead</p>
          </div>
          <img
            width="60"
            className="rounded-full"
            src="https://pfpmaker.com/images/tools/ai-avatars-3.webp"
            alt=""
          />
        </div>
      </div>
    </div>
  );
};
