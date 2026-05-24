import React from "react";

export type CardProps = {
  icon: React.ReactNode;
  title: string;
  description: string;
};

export const Card = ({ icon, title, description }: CardProps) => {
  return (
    <div>
      <div className="flex flex-col p-8 gap-4  rounded-lg  bg-white ">
        <p > {icon}</p>
        <h1 className="font-bold text-xl"> {title}</h1>
        <p className="text-normal"> {description}</p>
      </div>
    </div>
  );
};
