import { sql } from '@vercel/postgres';
import { NextResponse } from 'next/server';

export async function GET() {
    try {
        const { rows } = await sql`SELECT * FROM kategorie_filter`;
        return NextResponse.json(rows);
    } catch (error) {
        return NextResponse.json({ error }, { status: 500 });
    }
}