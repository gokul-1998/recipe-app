import React from "react";
import { useLocation } from "react-router-dom";
import { FaFire } from "react-icons/fa";
import { GiMuscleUp } from "react-icons/gi";
import { FaBowlRice } from "react-icons/fa6";
import { GiFat } from "react-icons/gi";
import { useState } from "react";
import { useEffect } from "react";
import { Api } from "../../Constant";

export const IndividualRecipe = () => {
  const location = useLocation();
  const ProductId = location.pathname.substring(1);
  console.log(ProductId);
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(`${Api}/recipe/id/${ProductId}`);
        const result = await response.json();
        setData(result);
        console.log(result);
      } catch (error) {
        console.error("Error fetching data:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);
  return (
    <div>
      <div className="p-4">
        <div>
          <h2 className="text-2xl py-4 font-semibold text-[#330000] text-center">
            {data?.name}
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
              src={data?.thumbnail}
              alt=""
              className="h-full w-full object-cover rounded-md"
            />
          </div>
          <div className="flex flex-col gap-4">
            <strong>Preparation Time : {data.prepTime}</strong>
            <p className="text-gray-700">{data?.description}</p>
            <div>
              <h1 className="font-semibold text-lg text-[#330000]">
                Instructions :{" "}
              </h1>
              {data?.instructions?.map((instruction, index) => (
                <ul className="flex gap-2">
                  <strong>Step {index + 1}</strong>
                  <p>{instruction}</p>
                </ul>
              ))}
            </div>
            <div>
              <h1 className="font-semibold text-lg text-[#330000]">
                Ingredients :{" "}
              </h1>
              {data?.ingredients?.map((ingredient, index) => (
                <ul className="flex gap-2">
                  <p>{ingredient.name}</p>
                  <p>{ingredient.quantity}</p>
                </ul>
              ))}
            </div>
            <div>
              <h1 className="font-semibold text-lg text-[#330000]">
                Nutritional Values :{" "}
              </h1>
              <div className="py-4">
                <ul className="grid grid-cols-2">
                  <li className="flex flex-col justify-center items-center">
                    <FaFire className="text-[#ab7639]" size={22} />
                    Calories: {data?.nutritionalValues?.calories}
                  </li>

                  <li className="flex flex-col justify-center items-center">
                    <GiMuscleUp className="text-[#ab7639]" size={22} />
                    Protein : {data?.nutritionalValues?.protein}
                  </li>
                  <li className="flex flex-col justify-center items-center">
                    <FaBowlRice className="text-[#ab7639]" size={22} />
                    Carbohydrate : {data?.nutritionalValues?.carbohydrates}
                  </li>
                  <li className="flex flex-col justify-center items-center">
                    <GiFat className="text-[#ab7639]" size={22} />
                    Fat :  {data?.nutritionalValues?.fat}
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
