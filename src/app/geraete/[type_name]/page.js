import RecipeList from '@/app/components/RecipeList';
import BrandFilter from "@/app/components/BrandFilter";
import Search from "@/app/ui/search";
import { getRecipes } from '@/app/lib/data'

export default async function TypePage({ params, searchParams }) {
    const { type_name } = params;
    const allRecipes = await getRecipes();
    let filteredRecipes = allRecipes.filter(r => r.type_name === type_name);
    const brandFilter = decodeURIComponent(searchParams?.brand_name || '');
    const brand_name = [...new Set(filteredRecipes.map(r => r.brand_name))];

    console.log();


    //const typeFilter = decodeURIComponent(searchParams?.type_name || '');

    const query = searchParams?.query?.toLowerCase() || '';

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
            <div className='container m-[40px] mx-auto px-4  flex gap-[20px] justify-between items-center flex-wrap-reverse'>
                <BrandFilter brand_name={brand_name} type_name={type_name} />
                <Search />
            </div>

            <RecipeList recipes={filteredRecipes} />
        </>
    );
}
