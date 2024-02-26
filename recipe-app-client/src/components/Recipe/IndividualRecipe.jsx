import React from "react";
import { useLocation } from "react-router-dom";

export const IndividualRecipe = () => {
  const location = useLocation();
  const ProductId = location.pathname.substring(1);
  console.log(ProductId);
  return (
    <div>
      <div className="p-4">
        <h2 className="text-2xl py-4 font-semibold text-[#330000] text-center">
          Dosa
        </h2>
        <div className="w-full h-[70vh]  rounded-md">
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTKRqdNkE2gDSQ5uX9PvKgFKO-hDiuET3Y4X5omycT7IF3tqiCLlnWuv7HfNDoAk44bEB4"
            alt=""
            className="h-full w-full object-cover rounded-md"
          />
        </div>
        <div className="py-4">
          <p className="text-gray-700">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis
            nesciunt vitae deleniti ut delectus! Perspiciatis repellat velit,
            nesciunt dolorum aliquid quaerat eius, suscipit ratione, culpa
            distinctio obcaecati! Corporis, debitis nobis.
          </p>
          <div>
            <h1 className="font-semibold text-lg text-[#330000]">
              Ingredients :{" "}
            </h1>
            <ul>
              <li></li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};
