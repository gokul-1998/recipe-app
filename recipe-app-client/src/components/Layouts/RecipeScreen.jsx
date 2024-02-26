import React from "react";

export const RecipeScreen = ({ children }) => {
  return (
    <div className="max-w-5xl mx-auto p-4 gap-2 sm:gap-4 rounded-md grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4">
      {children}
    </div>
  );
};
