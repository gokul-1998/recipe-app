import React from "react";
import { FaCookieBite } from "react-icons/fa6";
import { AppName } from "../../Constant";
import { SearchField } from "../SearchField";
import { Button } from "@chakra-ui/react";
import { RecipeScreen } from "../Layouts/RecipeScreen";
import { RecipeCard } from "../Layouts/RecipeCard";
export const Home = () => {
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
      <div className="w-full py-8 flex justify-center items-center">
        <Button
          className=" bg-[#ff9f33] hover:bg-[#f09030]"
          colorScheme="#ff9f33"
        >
          Create Your Recipe
        </Button>
      </div>

      {/* List Of Recipe */}

      <RecipeScreen>
        <RecipeCard
          name={"Dosa"}
          image={
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTKRqdNkE2gDSQ5uX9PvKgFKO-hDiuET3Y4X5omycT7IF3tqiCLlnWuv7HfNDoAk44bEB4"
          }
          difficulty={"easy"}
          preparationTime={"30mins"}
          recipeId="1292"
        />
        <RecipeCard
          name={"Dosa"}
          image={
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTKRqdNkE2gDSQ5uX9PvKgFKO-hDiuET3Y4X5omycT7IF3tqiCLlnWuv7HfNDoAk44bEB4"
          }
          difficulty={"easy"}
          preparationTime={"30mins"}
          recipeId="1292"
        />
        <RecipeCard
          name={"Dosa"}
          image={
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTKRqdNkE2gDSQ5uX9PvKgFKO-hDiuET3Y4X5omycT7IF3tqiCLlnWuv7HfNDoAk44bEB4"
          }
          difficulty={"easy"}
          preparationTime={"30mins"}
          recipeId="1292"
        />
        <RecipeCard
          name={"Dosa"}
          image={
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTKRqdNkE2gDSQ5uX9PvKgFKO-hDiuET3Y4X5omycT7IF3tqiCLlnWuv7HfNDoAk44bEB4"
          }
          difficulty={"easy"}
          preparationTime={"30mins"}
          recipeId="1292"
        />
        <RecipeCard
          name={"Dosa"}
          image={
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTKRqdNkE2gDSQ5uX9PvKgFKO-hDiuET3Y4X5omycT7IF3tqiCLlnWuv7HfNDoAk44bEB4"
          }
          difficulty={"easy"}
          preparationTime={"30mins"}
          recipeId="1292"
        />
        <RecipeCard
          name={"Dosa"}
          image={
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTKRqdNkE2gDSQ5uX9PvKgFKO-hDiuET3Y4X5omycT7IF3tqiCLlnWuv7HfNDoAk44bEB4"
          }
          difficulty={"easy"}
          preparationTime={"30mins"}
          recipeId="1292"
        />
        <RecipeCard
          name={"Dosa"}
          image={
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTKRqdNkE2gDSQ5uX9PvKgFKO-hDiuET3Y4X5omycT7IF3tqiCLlnWuv7HfNDoAk44bEB4"
          }
          difficulty={"easy"}
          preparationTime={"30mins"}
          recipeId="1292"
        />
      
      </RecipeScreen>
    </div>
  );
};
