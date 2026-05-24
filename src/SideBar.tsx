import React from "react";
import { SourceDoc } from "./components/source-documents";
import DocIcon from "./icons/doc-icon";

export const SideBar = () => {
  return (
    <div className="bg-white w-[20%] p-6 h-[89dvh]">
      <h3 className="font-bold text-xl mb-2 ">Source Documents</h3>
      <div className="flex flex-col gap-4  ">
        <SourceDoc
          icon={<DocIcon />}
          title="Annual_Report_2023.pdf"
          pages="24"
          format="Pdf"
        />
        <SourceDoc
          icon={<DocIcon />}
          title="Annual_Report_2023.pdf"
          pages="24"
          format="Pdf"
        />
        <SourceDoc
          icon={<DocIcon />}
          title="Annual_Report_2023.pdf"
          pages="24"
          format="Pdf"
        />
      </div>
    </div>
  );
};
