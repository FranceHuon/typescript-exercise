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

async function listDummy<T>(route: string): Promise<T[]> {
    const response = await fetch(`https://dummyjson.com/${route}`);
    const data = await response.json();
    const key = Object.keys(data)[0]; 
    return data[key] as T[];
}

async function main() {
    const recipes = await listDummy<Recipe>('recipes')
    console.log(recipes);
}

main()