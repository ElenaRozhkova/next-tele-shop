import postgres from 'postgres';
const sql = postgres(process.env.POSTGRES_URL!, { ssl: 'require' });

export async function getRecipes() {
    try {
        //const res = await fetch('http://localhost:3000/api/rezepte');
        const data = await sql`  SELECT rezepte.id, rezepte.titel, kategorie_filter.title as kategorie, rezepte.typ, rezepte.aufwaermbar 
  FROM rezepte
  JOIN kategorie_filter ON rezepte.kategorie_id = kategorie_filter.id`;

        console.log(data);

        return data;
    }
    catch (error) {
        console.error('Database Error:', error);
        throw new Error('Failed to fetch revenue data.');
    }
}

export async function getFilterKategorie() {

    try {
        //const res = await fetch('http://localhost:3000/api/kategorie');
        const data = await sql`SELECT * FROM kategorie_filter`;

        console.log(data);

        return data;
    }
    catch (error) {
        console.error('Database Error:', error);
        throw new Error('Failed to fetch revenue data.');
    }

    //  const res = await fetch('http://localhost:3000/api/kategorie');
    // return res.json();
}