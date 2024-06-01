import propTypes from "prop-types";

const RecipeCard = ({recipe}) => {
    return (
        <div className="p-4">
            <h3 className="text-slate-300 uppercase">{recipe.name}</h3>
            <hr className="text-slate-300 pb-2"/>
            <div className="w-50 h-24 bg-no-repeat bg-center bg-cover uppercase" style={{backgroundImage: `url(${recipe.image})`}}></div>
        </div>
    );
}

RecipeCard.propTypes = {
    recipe: propTypes.object,
}

export default RecipeCard;