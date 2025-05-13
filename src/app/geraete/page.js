import RecipeList from '@/app/components/RecipeList';
import BrandFilter from "@/app/components/BrandFilter";
import TypeFilter from "@/app/components/TypeFilter";
import Search from "@/app/ui/search";
import { getRecipes } from '@/app/lib/data'



export default async function Home({ searchParams }) {
    const recipes = await getRecipes();

    const brand_name = [...new Set(recipes.map(r => r.brand_name))];
    const type_name = [...new Set(recipes.map(r => r.type_name))];

    const brandFilter = decodeURIComponent(searchParams?.brand_name || '');
    const typeFilter = decodeURIComponent(searchParams?.type_name || '');
    const query = searchParams?.query?.toLowerCase() || '';

    let filteredRecipes = recipes;

    if (brandFilter) {
        filteredRecipes = filteredRecipes.filter(r => r.brand_name === brandFilter);
    }

    if (typeFilter) {
        filteredRecipes = filteredRecipes.filter(r => r.type_name === typeFilter);
    }


    if (query) {
        filteredRecipes = filteredRecipes.filter(r =>
            r.name?.toLowerCase().includes(query)
        );
    }



    return (
        <>
            <div className='container m-[40px] mx-auto px-4  flex gap-[20px] justify-between items-center flex-wrap-reverse'>
                <BrandFilter brand_name={brand_name} />
                <Search />
            </div>

            <RecipeList recipes={filteredRecipes} />
        </>
    );
}
