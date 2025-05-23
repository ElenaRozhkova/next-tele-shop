import RecipeList from '@/app/components/RecipeList';
import BrandFilter from "@/app/components/BrandFilter";
import TypeFilter from "@/app/lib/TypeFilter";
import Search from "@/app/ui/search";
import { getRecipes } from '@/app/lib/data'



export default async function Home({ searchParams }) {
  const recipes = await getRecipes();
  const brand_name = [...new Set(recipes.map(r => r.brand_name))];
  const brandFilter = decodeURIComponent(searchParams?.brand_name || '');
  const query = searchParams?.query?.toLowerCase() || '';

  let filteredRecipes = recipes;

  if (brandFilter) {
    filteredRecipes = filteredRecipes.filter(r => r.brand_name === brandFilter);
  }

  if (query) {
    filteredRecipes = filteredRecipes.filter(r =>
      r.name?.toLowerCase().includes(query)
    );
  }

  return (
    <>
      <div className='container m-[20px] mx-auto px-4  flex gap-[20px] justify-between items-center flex-wrap-reverse'>
        <BrandFilter brand_name={brand_name} />
        <Search />
      </div>
      <RecipeList recipes={filteredRecipes} />
    </>
  );
}
