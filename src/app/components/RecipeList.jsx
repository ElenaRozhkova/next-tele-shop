import Link from 'next/link';


export default async function RecipeList({ recipes, searchParams }) {
    const filteredRecipes = searchParams?.kategorie
        ? recipes.filter(r => r.kategorie_name === decodeURIComponent(searchParams.kategorie))
        : recipes;


    return (
        <div className="container mx-auto px-4 ">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {filteredRecipes.map((recipe) => (
                    <div
                        key={recipe.id}
                        className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300"
                    >
                        <div className="p-6">
                            <h2 className="text-xl font-bold text-gray-800 mb-2">
                                {recipe.titel}
                            </h2>

                            <div className="space-y-2">
                                <p className="flex items-center text-gray-600">
                                    <span className="font-medium mr-2">Typ:</span>
                                    <span className={`px-2 py-1 rounded-full text-xs font-semibold
                    ${recipe.typ === 'Frisch' || recipe.typ === 'Fertig'
                                            ? 'bg-blue-100 text-blue-800'  //Blau
                                            : 'bg-gray-100 text-gray-800'   // Standard
                                        }`}
                                    >
                                        {recipe.typ}
                                    </span>
                                </p>

                                <p className="flex items-center text-gray-600">
                                    <span className="font-medium mr-2">Kategorie:</span>
                                    <span className={`px-2 py-1 rounded-full text-xs font-semibold
                    ${recipe.kategorie_name === 'Fleisch & Gemüse'
                                            ? 'bg-green-100 text-green-800'  // Grün
                                            : 'bg-gray-100 text-gray-800'   // Standard
                                        }`}
                                    >
                                        {recipe.kategorie_name}
                                    </span>
                                </p>

                                <p className="flex items-center text-gray-600">
                                    <span className="font-medium mr-2">Aufwärmbar:</span>
                                    <span className={`px-2 py-1 rounded-full text-xs font-semibold ${recipe.aufwaermbar
                                        ? 'bg-green-100 text-green-800' //Grün
                                        : 'bg-red-100 text-red-800'     //Rot
                                        }`}>
                                        {recipe.aufwaermbar ? 'Ja' : 'Nein'}
                                    </span>
                                </p>
                            </div>

                            <Link
                                href={`/rezepte/${recipe.id}`}
                                className="mt-4 inline-block px-4 py-2 bg-amber-500 text-white rounded-md hover:bg-amber-600 transition-colors"
                            >
                                Zum Rezept
                            </Link>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}
