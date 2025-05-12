import postgres from 'postgres';
const sql = postgres(process.env.POSTGRES_URL!, { ssl: 'require' });

export async function getRecipes() {
    try {
        const data = await sql`  SELECT * from brand`;
        return data;
    }
    catch (error) {
        console.error('Database Error:', error);
        throw new Error('Failed to fetch revenue data.');
    }
}

