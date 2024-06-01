import RecipeCard from "./RecipeCard";
import propTypes from "prop-types";



const DisplayRecipes = ({ recipes, page, perPage, search, status1, total }) => {




    return (<>

        {status1 === "loading" ?

            new Array(10).fill(0).map((item, index) => (
                <div key={index} className="animate-pulse flex w-50 p-4">
                    <div className="h-2 bg-slate-700 rounded"></div>
                    <div className="w-50 h-24 bg-slate-700 rounded"></div>
                </div>
            ))


            : status1 === "success" ?
            recipes.map((recipe) => (<RecipeCard key={recipe.id} recipe={recipe} />))

                
                : "Error"}</>);
};

DisplayRecipes.propTypes = {
    recipes: propTypes.array,
    page: propTypes.number,
    perPage: propTypes.number,
    search: propTypes.number,
    status1: propTypes.string,
    total: propTypes.number,

};

export default DisplayRecipes;