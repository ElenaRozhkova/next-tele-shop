import postgres from 'postgres';
const sql = postgres(process.env.POSTGRES_URL!, { ssl: 'require' });

export const GET = async (req: Request) => {
    try {
        const data = await sql`SELECT
  name AS type_name
FROM
  type `;
        return data;
    }
    catch (error) {
        console.error('Database Error:', error);
        throw new Error('Failed to fetch revenue data.');
    }
}