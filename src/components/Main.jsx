import { useState } from "react"
import ClaudeRecipe from "./ClaudeRecipe"
import IngredientsList from "./IngredientsList"
import { getRecipeFromMistral } from "../ai"

export default function Main(){
    const [ingredients, setIngredients] = useState([])
    const [recipe, setRecipe] = useState("")

    async function getRecipe(){
        const recipeText = await getRecipeFromMistral(ingredients)
        setRecipe(recipeText)
    }

    function addIngredient(formData){
        const newIngredient = formData.get("ingredients")
        if(newIngredient) setIngredients(prev => [...prev, newIngredient])
    }
    
    return(
        <>
            <main>
                <form action={addIngredient} className="add-ingridient-form">
                    <input type="text" placeholder="e.g. Oregano" name="ingredients" aria-label="Add ingredient"/>
                    <button>Add Ingredient</button>
                </form>
                {ingredients.length > 0 && <IngredientsList ingredients={ingredients} getRecipe={getRecipe}/>}
            </main>
            {recipe && <ClaudeRecipe recipe={recipe} />}
        </>
    )
}