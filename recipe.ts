interface Recipe {
    id: number,
    name: string,
    ingredients: string[],
    instructions: string[],
    prepTimeMinutes: number,
    cookTimeMinutes: number,
    servings: number,
    difficulty: string,
    cuisine: string,
    caloriesPerServing: number,
    tags: string[],
    userId: number,
    image: string,
    rating: number,
    reviewCount: number,
    mealType: string[]
}

interface RecipeResponse {
    recipes: Recipe[];
    total: number;
    skip: number;
    limit: number;
}

async function getRecipes(): Promise<Recipe[]> {
    const response = await fetch('https://dummyjson.com/recipes')
    const data: RecipeResponse = await response.json();
    console.log(data.recipes)
    return data.recipes;
}

getRecipes();