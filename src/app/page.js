import RecipeList from '@/app/components/RecipeList';
import SimpleFilter from "@/app/components/SimpleFilter";
import { getRecipes } from '@/app/lib/data'



export default async function Home({ searchParams }) {
  const recipes = await getRecipes();
  console.log(recipes)

  const categories = [...new Set(recipes.map(r => r.kategorie))];
  const filteredRecipes = searchParams?.kategorie
    ? recipes.filter(r => r.kategorie === decodeURIComponent(searchParams.kategorie))
    : recipes;

  console.log(filteredRecipes)

  return (
    <>
      <SimpleFilter categories={categories} />
      <RecipeList recipes={filteredRecipes} />
    </>
  );
}
