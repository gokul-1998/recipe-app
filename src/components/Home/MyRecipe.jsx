import { useUser } from "@clerk/clerk-react";
import React, { useState, useEffect } from "react";
import { Api, AppName } from "../../Constant";
import { RecipeScreen } from "../Layouts/RecipeScreen";
import { RecipeCard } from "../Layouts/RecipeCard";
import { FaCookieBite } from "react-icons/fa6";

const MyRecipe = () => {
  const [data, setData] = useState([]);
  const userEmail = useUser()?.user?.primaryEmailAddress?.emailAddress;
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Fetch recipes when the component mounts
    const fetchData = async () => {
      try {
        const response = await fetch(`${Api}/recipe/email/${userEmail}`);
        const data = await response.json();
        setData(data);
        console.log(data);
      } catch (error) {
        console.error("Error fetching recipes:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [userEmail]); // Run the effect whenever the userEmail changes

  return (
    <div>
      <div className="flex justify-center items-center py-8">
        <FaCookieBite size={32} color="#330000" />
        <span className="text-4xl font-bold text-[#330000]">{AppName}</span>
      </div>
      <h2 className="text-3xl py-8 text-center text-[#330000]">My Recipes</h2>
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

export default MyRecipe;
