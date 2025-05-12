import postgres from 'postgres';
const sql = postgres(process.env.POSTGRES_URL!, { ssl: 'require' });

export async function getRecipes() {
    try {
        const data = await sql`  SELECT rezepte.id, rezepte.titel, kategorie_filter.title as kategorie, rezepte.typ, rezepte.aufwaermbar 
            FROM rezepte
            JOIN kategorie_filter ON rezepte.kategorie_id = kategorie_filter.id`;
        return data;
    }
    catch (error) {
        console.error('Database Error:', error);
        throw new Error('Failed to fetch revenue data.');
    }
}

