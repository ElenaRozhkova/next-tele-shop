import RecipeList from '@/app/components/RecipeList';
import SimpleFilter from "@/app/components/SimpleFilter";
import Search from "@/app/ui/search";
import { getRecipes } from '@/app/lib/data'



export default async function Home({ searchParams }) {
  const recipes = await getRecipes();
  console.log(searchParams)

  /*
    const query = searchParams?.query || '';
    const currentPage = Number(searchParams?.page) || 1;
  
  
    const categories = [...new Set(recipes.map(r => r.kategorie))];
    // Фильтрация по категории
    let filteredRecipes = searchParams?.kategorie
      ? recipes.filter(r => r.kategorie === decodeURIComponent(searchParams.kategorie))
      : recipes;
  
    // Фильтрация по поисковому запросу
    if (query) {
      filteredRecipes = filteredRecipes.filter(recipe =>
        recipe.titel?.toLowerCase().includes(query.toLowerCase()) // Используем безопасную проверку
      );
    }
  */


  return (
    <>
      {/* <div className='container m-[40px] mx-auto px-4  flex gap-[20px] justify-between items-center flex-wrap-reverse'>
       <SimpleFilter categories={categories} />
        <Search />
      </div>
      <RecipeList recipes={filteredRecipes} />*/}
      <RecipeList recipes={recipes} />
    </>
  );
}
