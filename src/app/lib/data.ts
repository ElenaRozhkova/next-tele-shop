import postgres from 'postgres';
const sql = postgres(process.env.POSTGRES_URL!, { ssl: 'require' });

export async function getRecipes() {
    try {
        const data = await sql`SELECT
  devices.id,
  devices.name,
  devices.price,
  devices.image_url,
  devices.properties,
  brand.name AS brand_name,
  type.name AS type_name
FROM
  devices
JOIN
  brand ON devices.brand_id = brand.id
JOIN
  type ON devices.type_id = type.id;`;
        return data;
    }
    catch (error) {
        console.error('Database Error:', error);
        throw new Error('Failed to fetch revenue data.');
    }
}

