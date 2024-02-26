import { SignIn, SignInButton, useUser } from "@clerk/clerk-react";
import React from "react";

export const CreateRecipe = () => {
  const user = useUser();
  if (user.isSignedIn) {
    return <div>CreateRecipe</div>;
  } else {
    return (
      <div className="flex justify-center items-center">
        <SignIn />;
      </div>
    );
  }
};
