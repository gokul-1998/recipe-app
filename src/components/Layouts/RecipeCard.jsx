import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

export const RecipeCard = ({
  name,
  difficulty,
  preparationTime,
  image,
  id,
}) => {
  const difficultyColorSchema = {
    hard: "red",
    medium: "orange",
    easy: "green",
  };

  const navigate = useNavigate();
  const handleNavigate = () => {
    navigate(`/${id}`);
  };

  

  return (
    <div
      onClick={() => {
        handleNavigate();
      }}
      className=" cursor-pointer bg-white shadow-sm rounded-sm p-2  border flex flex-col justify-center items-center"
    >
      <div className="h-[200px]  sm:h-[250px] relative">
        <div
          style={{
            backgroundColor: difficultyColorSchema[difficulty],
          }}
          className={`absolute  text-white right-0 px-1 rounded-l-sm`}
        >
          {difficulty}
        </div>
        <img
          src={image}
          alt=""
          className="w-full rounded-sm h-full  object-cover"
        />
      </div>
      <h2 className="text-lg font-semibold w-full truncate text-center">
        {name}
      </h2>
      <div>
        <p className="text-sm text-gray-700 font-medium">
          Make it in {preparationTime}
        </p>
      </div>
    </div>
  );
};
