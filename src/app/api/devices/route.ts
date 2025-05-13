import { sql } from '@vercel/postgres';
import { NextResponse } from 'next/server';


export async function GET() {
    try {
        const { rows } = await sql`SELECT 
    devices.*,
    brand.name AS brand_name  
    FROM brand
    JOIN brand ON devices.brand_id = brand.id`;
        return NextResponse.json(rows);
    } catch (error) {
        return NextResponse.json({ error }, { status: 500 });
    }
}