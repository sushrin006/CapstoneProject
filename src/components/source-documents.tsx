import React from "react";

export type SourceDocProps = {
  icon: React.ReactNode;
  title: string;
  pages: string;
  format: string;
};
export const SourceDoc = ({ icon, pages, format, title }: SourceDocProps) => {
  return (
    <div className="flex gap-2 bg-[#F3F5FC] w-fit px-4 py-2 rounded-2xl  ">
      <p className="w-[50px] ">{icon}</p>
      <div className="flex flex-col gap-1">
        <h3 className="font-bold text-sm  "> {title}</h3>
        <div className="flex gap-2 text-md font-light">
          <p> Pages: {pages}</p>
          <p>•</p>
          <p className="font-semibold"> {format.toUpperCase()}</p>
        </div>
      </div>
    </div>
  );
};
