import React from "react";
import { useLocation } from "react-router-dom";
import { FaFire } from "react-icons/fa";
import { GiMuscleUp } from "react-icons/gi";
import { FaBowlRice } from "react-icons/fa6";
import { GiFat } from "react-icons/gi";

export const IndividualRecipe = () => {
  const location = useLocation();
  const ProductId = location.pathname.substring(1);
  console.log(ProductId);
  return (
    <div>
      <div className="p-4">
        <div>
          <h2 className="text-2xl py-4 font-semibold text-[#330000] text-center">
            Dosa
          </h2>
          {/* <div className="flex justify-end  gap-2 items-center">
            <div className="h-[40px] font-bold text-lg text-white w-[40px] bg-[#ffa641] flex justify-center items-center rounded-full">
              s
            </div>
            <p>santhosh@gmail.com</p>
          </div> */}
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 max-w-5xl  mx-auto gap-4">
          <div className="w-full  h-[70vh]  rounded-md">
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTKRqdNkE2gDSQ5uX9PvKgFKO-hDiuET3Y4X5omycT7IF3tqiCLlnWuv7HfNDoAk44bEB4"
              alt=""
              className="h-full w-full object-cover rounded-md"
            />
          </div>
          <div className="flex flex-col gap-4">
            <strong>Preparation Time : 30min</strong>
            <p className="text-gray-700">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis
              nesciunt vitae deleniti ut delectus! Perspiciatis repellat velit,
              nesciunt dolorum aliquid quaerat eius, suscipit ratione, culpa
              distinctio obcaecati! Corporis, debitis nobis.
            </p>
            <div>
              <h1 className="font-semibold text-lg text-[#330000]">
                Instructions :{" "}
              </h1>
              <ul>
                <li>
                  <strong>Step 1 : </strong>Step 1
                </li>
                <li>
                  <strong>Step 2 : </strong>Step 2
                </li>
                <li>
                  <strong>Step 3 : </strong>Step 3
                </li>
              </ul>
            </div>
            <div>
              <h1 className="font-semibold text-lg text-[#330000]">
                Ingredients :{" "}
              </h1>
              <ul>
                <li>
                  <strong>Step 1 : </strong>Step 1
                </li>
                <li>
                  <strong>Step 2 : </strong>Step 2
                </li>
                <li>
                  <strong>Step 3 : </strong>Step 3
                </li>
              </ul>
            </div>
            <div>
              <h1 className="font-semibold text-lg text-[#330000]">
                Nutritional Values :{" "}
              </h1>
              <div className="py-4">
                <ul className="grid grid-cols-2">
                  <li className="flex flex-col justify-center items-center">
                    <FaFire className="text-[#ab7639]" size={22} />
                    Calories: 30
                  </li>

                  <li className="flex flex-col justify-center items-center">
                    <GiMuscleUp className="text-[#ab7639]" size={22} />
                    Protein : 30
                  </li>
                  <li className="flex flex-col justify-center items-center">
                    <FaBowlRice className="text-[#ab7639]" size={22} />
                    Carbohydrate : 30
                  </li>
                  <li className="flex flex-col justify-center items-center">
                    <GiFat className="text-[#ab7639]" size={22} />
                    Fat : 30
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
