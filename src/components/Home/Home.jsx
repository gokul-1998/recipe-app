import React from "react";
import { FaCookieBite } from "react-icons/fa6";
import { Api, AppName } from "../../Constant";
import { SearchField } from "../SearchField";
import { Button } from "@chakra-ui/react";
import { RecipeScreen } from "../Layouts/RecipeScreen";
import { RecipeCard } from "../Layouts/RecipeCard";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { useEffect } from "react";

export const Home = () => {
  const navigate = useNavigate();

  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(`${Api}/recipes`);
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
      {/* Heading */}
      <div className="flex justify-center items-center py-8">
        <FaCookieBite size={32} color="#330000" />
        <span className="text-4xl font-bold text-[#330000]">{AppName}</span>
      </div>

      {/* Search Field */}
      <SearchField />

      {/* Create button For Creating Recipe */}
      <div className="w-full  gap-2 px-4 py-8 flex justify-center items-center">
        <Button
          onClick={() => {
            navigate("/create-recipe");
          }}
          className=" truncate bg-[#ff9f33] hover:bg-[#f09030]"
          colorScheme="#ff9f33"
        >
          Create Your Recipes
        </Button>

        <Button
          className="  bg-[#ff9f33] hover:bg-[#f09030] hover:text-white hover:border-black"
          colorScheme="#ff9f33"
          variant="outline"
        >
          My Recipes
        </Button>
      </div>

      {/* List Of Recipe */}

      <RecipeScreen>
        {loading ? (
          <p>Loading...</p>
        ) : (
          data?.map((data) => {
            return (
              <RecipeCard
                id={data._id}
                name={data.name}
                image={data.thumbnail}
                difficulty={data.difficulty}
                preparationTime={data.prepTime}
                recipeId="1292"
              />
            );
          })
        )}
      </RecipeScreen>
    </div>
  );
};
