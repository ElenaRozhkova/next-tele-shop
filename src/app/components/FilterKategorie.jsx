async function getFilterKategorie() {
    const res = await fetch('http://localhost:3000/api/kategorie');
    return res.json();
}
export default async function FilterKategorie() {
    const filterKategorie = await getFilterKategorie();

    return (
        <div>
            {filterKategorie.map((recipe) => (
                <div key={recipe.id}>
                    <h2>{recipe.title}</h2>
                    <p>{recipe.descriptions}</p>
                    <p>{recipe.type}</p>

                </div>
            ))}
        </div>
    );
}