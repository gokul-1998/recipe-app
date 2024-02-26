import React from "react";
import { useState } from "react";
import { Button } from "@chakra-ui/react";
import { useRef } from "react";
import { SignIn, useUser } from "@clerk/clerk-react";
import { Api } from "../../Constant";
export const CreateRecipe = () => {
  const user = useUser();
  console.log(user.user.primaryEmailAddress.emailAddress);
  if (user.isSignedIn) {
    const [IngredientList, SetIngredientList] = useState([
      [
        <input
          type="text"
          name="ingredient"
          placeholder="Name"
          className="input"
          required
        />,
        <input
          type="text"
          name="ingredient"
          placeholder="Quantity"
          className="input"
          required
        />,
      ],
    ]);
    const [Instruction, SetInstruction] = useState([
      <input
        type="text"
        name="instruction"
        placeholder="Instruction"
        className="input"
        required
      />,
    ]);

    const formRef = useRef();

    async function handleSubmit(e) {
      const ingredientObject = [];
      e.preventDefault();
      const ingredients = formRef.current.ingredient;
      for (let i = 0; i < IngredientList.length; i++) {
        ingredientObject.push({
          name: ingredients[i].value,
          quantity: ingredients[i + 1].value,
        });
        i += 1;
      }
      console.log(ingredientObject);
      const instruction = formRef.current.instruction;
      const instructionArr = [];
      for (let i = 0; i < instruction.length; i++) {
        instructionArr.push(instruction[i].value);
      }
      console.log(instructionArr);
      try {
        const response = await fetch(`${Api}/recipe`, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            name: formRef.current.name.value,
            thumbnail: formRef.current.image.value,
            description: formRef.current.description.value,
            ingredients: ingredientObject,
            instructions: instructionArr,
            nutritionalValues: {
              calories: formRef.current.calories.value,
              protein: formRef.current.protein.value,
              carbohydrates: formRef.current.carbohydrates.value,
              fat: formRef.current.fat.value,
            },
            difficulty: formRef.current.difficulty.value,
            prepTime: formRef.current.prep.value,
            createdBy: user.user.primaryEmailAddress.emailAddress,
          }),
        });
        if (response.ok) {
          console.log("Recipe added successfully");
        } else {
          console.error("Error adding recipe");
        }
      } catch (error) {
        console.error("Error:", error.message);
      }
    }

    return (
      <div className="py-8 px-4">
        <form
          ref={formRef}
          className="max-w-5xl flex flex-col gap-3 py-8 px-1 sm:px-8 bg-white mx-auto"
        >
          <h1 className="text-2xl font-semibold text-center">
            Create Your Recipe
          </h1>
          <input
            type="text"
            placeholder="Recipe Name"
            className="input"
            name="name"
            required
          />
          <input
            type="url"
            placeholder="Enter food url"
            className="input"
            name="image"
            required
          />
          <textarea
            placeholder="Description"
            name="description"
            className="outline-none border resize-none py-3 px-1"
          />
          <div>
            <strong>Ingredients</strong>
            {IngredientList.map((ingredient) => {
              return (
                <div className="flex gap-1 py-2">
                  {ingredient[0]}
                  {ingredient[1]}
                </div>
              );
            })}
            <div className="flex justify-end">
              <Button
                variant="link"
                type="button"
                color="green"
                onClick={() =>
                  SetIngredientList([
                    ...IngredientList,
                    [
                      <input
                        type="text"
                        placeholder="Name"
                        className="input"
                        name="ingredient"
                        required
                      />,
                      <input
                        type="text"
                        placeholder="Quantity"
                        className="input"
                        name="ingredient"
                        required
                      />,
                    ],
                  ])
                }
              >
                Add Ingredient {IngredientList.length + 1}
              </Button>
            </div>
          </div>
          <div>
            <strong>Instruction</strong>
            {Instruction.map((instruction) => {
              return <div className="py-2">{instruction}</div>;
            })}
            <div className="flex justify-end">
              <Button
                variant="link"
                type="button"
                className="text-green-800 font-semibold"
                color="green"
                onClick={() =>
                  SetInstruction([
                    ...Instruction,

                    <input
                      type="text"
                      placeholder="instruction"
                      className="input"
                      name="instruction"
                      required
                    />,
                  ])
                }
              >
                Add Step {Instruction.length + 1}
              </Button>
            </div>
          </div>
          <div>
            <strong>Nutritional Values</strong>
            <div>
              <div>
                <p>calories</p>
                <input type="text" className="input" name="calories" />
              </div>
              <div>
                <p>protein</p>
                <input type="text" className="input" name="protein" />
              </div>
              <div>
                <p>carbohydrates</p>
                <input type="text" className="input" name="carbohydrates" />
              </div>
              <div>
                <p>fat</p>
                <input type="text" className="input" name="fat" />
              </div>
            </div>
          </div>
          <strong>Select Difficulty Level</strong>
          <select name="difficulty" id="" required>
            <option value="hard">Hard</option>
            <option value="medium">Medium</option>
            <option value="easy">Easy</option>
          </select>
          <input
            type="text"
            className="input"
            placeholder="Preparation Time"
            name="prep"
            required
          />
          <Button onClick={handleSubmit} colorSchema="#ff9f33" type="submit">
            Create
          </Button>
        </form>
      </div>
    );
  } else {
    return (
      <div>
        <SignIn />;
      </div>
    );
  }
};
