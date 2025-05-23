import Link from 'next/link';

export default async function RecipeList({ recipes }) {
    return (
        <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {recipes.map((recipe) => {
                    // Определяем классы для типа
                    const typClasses = recipe.type_name === 'Frisch' || recipe.type_name === 'Fertig'
                        ? 'bg-blue-100 text-blue-800'  // синий
                        : 'bg-gray-100 text-gray-800'; // стандартный

                    // Преобразуем price в число, если это строка или другой тип
                    const price = typeof recipe.price === 'number' ? recipe.price : parseFloat(recipe.price);

                    return (
                        <div
                            key={recipe.id}
                            className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300"
                        >
                            <div className="p-6">
                                {/* Изображение */}
                                <img

                                    src={recipe.image_url}
                                    alt={recipe.name}
                                    className="w-full h-full object-cover rounded-md mb-4"
                                />

                                <h2 className="text-xl font-bold text-gray-800 mb-2 text-center">{recipe.name}</h2>

                                {/* Цена */}
                                <div className="flex flew-row flex-wrap justify-center items-center">
                                    <span className="font-medium mr-2">ab </span>
                                    <p className="text-lg font-semibold text-gray-800 ">{`€${price.toFixed(2)}`}</p>
                                </div>


                                <div className="space-y-2">
                                    {/*     Бренд 
                                    <p className="flex items-center text-gray-600">
                                        <span className="font-medium mr-2">Brand:</span>
                                        <span className="text-gray-800">{recipe.brand_name}</span>
                                    </p>*/}

                                    {/* Тип 
                                    <p className="flex items-center text-gray-600">
                                        <span className="font-medium mr-2">Type:</span>
                                        <span className={`px-2 py-1 rounded-full text-xs font-semibold ${typClasses}`}>
                                            {recipe.type_name}
                                        </span>
                                    </p>*/}
                                    <hr className="my-4 border-t border-gray-300" />
                                    {/* Свойства */}
                                    <p className="flex items-center text-gray-600">
                                        {/* <span className="font-medium mr-2">Properties:</span>*/}
                                        <span className="text-gray-800 text-center ">{recipe.properties}</span>
                                    </p>
                                </div>
                            </div>
                        </div>
                    );
                })}
            </div>
        </div >
    );
}
