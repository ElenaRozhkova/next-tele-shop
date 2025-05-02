import { sql } from '@vercel/postgres';
import { NextResponse } from 'next/server';


export async function GET() {
    try {
        const { rows } = await sql`SELECT 
    rezepte.*,
    kategorie_filter.title AS kategorie_name  
  FROM rezepte
  JOIN kategorie_filter ON rezepte.kategorie_id = kategorie_filter.id`;
        return NextResponse.json(rows);
    } catch (error) {
        return NextResponse.json({ error }, { status: 500 });
    }
}