export class RecipeSummary {
    constructor({
      id,
      name,
      tags,
      image,

    }) {
      this.id = id;
      this.name = name;
      this.tags = tags;
      this.image = image;
    }
}
export class Recipe {
    constructor({
      id,
      recipeName,
      ingredients,
      instructions,
      prepTimeMinutes,
      cookTimeMinutes,
      servings,
      difficulty,
      cuisine,
      caloriesPerServing,
      tags,
      userId,
      image,
      rating,
      reviewCount,
      mealType
    }) {
      this.id = id;
      this.name = recipeName;
      this.ingredients = ingredients;
      this.instructions = instructions;
      this.prepTimeMinutes = prepTimeMinutes;
      this.cookTimeMinutes = cookTimeMinutes;
      this.servings = servings;
      this.difficulty = difficulty;
      this.cuisine = cuisine;
      this.caloriesPerServing = caloriesPerServing;
      this.tags = tags;
      this.userId = userId;
      this.image = image;
      this.rating = rating;
      this.reviewCount = reviewCount;
      this.mealType = mealType;
    }
}