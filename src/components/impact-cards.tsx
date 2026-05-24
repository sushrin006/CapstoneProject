import React from "react";

export type ImpactCardsProps = {
  icon: React.ReactNode;
  title: string;
  description: string;
  image: string;
  studyLevel: string;
  university: string;
};

export const ImpactCards = ({
  icon,
  title,
  description,
  image,
  studyLevel,
  university,
}: ImpactCardsProps) => {
  return (
    <div className="bg-white p-8 rounded-lg space-y-6">
      <div className="flex gap-4 items-center">
        <div> {icon} </div>
        <h1 className="font-bold text-2xl">{title}</h1>
      </div>
      <p className="">{description}</p>
      <hr />
      <div className="flex gap-2 items-center">
        <img  className="w-14 h-14 rounded-full" src={image} alt="" />
        <div className="flex flex-col gap-1">
          <h1 className="font-bold text-xl">{studyLevel}</h1>
          <p>{university}</p>
        </div>
      </div>
    </div>
  );
};
