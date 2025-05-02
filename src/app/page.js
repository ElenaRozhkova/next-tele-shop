import RecipeList from '@/app/components/RecipeList';
import SimpleFilter from "@/app/components/SimpleFilter";

async function getRecipes() {
  const res = await fetch('http://localhost:3000/api/rezepte');
  return res.json();
}

export default async function Home({ searchParams }) {
  const recipes = await getRecipes();
  const categories = [...new Set(recipes.map(r => r.kategorie_name))];
  const filteredRecipes = searchParams?.kategorie
    ? recipes.filter(r => r.kategorie_name === decodeURIComponent(searchParams.kategorie))
    : recipes;

  return (
    <>
      <SimpleFilter categories={categories} />
      <RecipeList recipes={filteredRecipes} />
    </>
  );
}
