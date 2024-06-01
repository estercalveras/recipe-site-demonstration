// import axios from "axios";
import { Recipe, RecipeSummary } from "../models/Recipe"
import SingleRecipeMock from "./mock/SingleRecipe.json"
import RecipesMock from "./mock/Recipes.json"

// getTopTwoRecipes
// getRecipes (with pagination + search + tags)
// getSingleRecipe

const url = `${import.meta.env.VITE_API_URL}/recipes`

// export const getRecipes = async (page = 1, perPage = 10, search) => {
//     const response = await axios.get(`${url}${search ? `/search?q=${search}` : ""}?limit=${perPage}&skip=${(page -1)*perPage}&select=name,image,tags`);
//     const recipes = response.recipes.map((recipe) => new RecipeSummary(recipe))
//     return recipes;
// }

// export const getSingleRecipe = async (id) => {
//     const response = await axios.get(`${url}/${id}`);
//     const recipe = new Recipe(response)
//     return recipe;
// }

// export const getTopTwoRecipes = async () => {
//     const response = await axios.get(`${url}/limit=2&select=name,image,tags`);
//     const recipes = response.recipes.map((recipe) => new RecipeSummary(recipe))
//     return recipes;
// }



export const getRecipes = (page = 1, perPage = 10, search) => {
    console.log(`${url}${search ? `/search?q=${search}` : ""}?limit=${perPage}&skip=${(page - 1) * perPage}&select=name,image,tags`);
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            try {
                const recipes = RecipesMock.recipes.map((recipe) => new RecipeSummary(recipe))
                const response = {
                    recipes: recipes,
                    limit: RecipesMock.limit,
                    skip: RecipesMock.skip,
                    total: RecipesMock.total,

                }
                resolve(response);

            } catch (err) {
                reject(err);
            }
        }, 1000)


    })

}

export const getSingleRecipe = (id) => {
    console.log(id)
    setTimeout(() => {
        const recipe = new Recipe(SingleRecipeMock);
        return recipe;
    }, 1000)
}

export const getTopTwoRecipes = () => {
    console.log(`${url}/limit=2&select=name,image,tags`);
    return new Promise((resolve, reject) => {
    setTimeout(() => {
        try {
            const recipes = RecipesMock.recipes.slice(0, 2).map((recipe) => new RecipeSummary(recipe))
            resolve(recipes);

        } catch (err) {
            reject(err);
        }
    }, 1000)})
}
