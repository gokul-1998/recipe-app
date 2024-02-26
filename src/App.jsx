import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Home } from "./components/Home/Home";
import { IndividualRecipe } from "./components/Recipe/IndividualRecipe";
import { CreateRecipe } from "./components/Forms/CreateRecipe";
import MyRecipe from "./components/Home/MyRecipe";

function App() {
  return (
    <div className="bg-[#f8f6f2] min-h-screen">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/:recipeId" element={<IndividualRecipe />} />
          <Route path="/create-recipe" element={<CreateRecipe />} />
          <Route path="/my-recipe" element={<MyRecipe />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
