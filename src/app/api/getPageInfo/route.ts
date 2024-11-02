
import { NextResponse } from 'next/server';
import { groq } from 'next-sanity';
import { sanityClient } from '../../../../sanity';
import { PageInfo } from '../../../../typings';

const query = groq`*[_type == "pageInfo"] [0]`;

export async function GET() {
    try {
        const pageInfo: PageInfo = await sanityClient.fetch(query);
        return NextResponse.json({ pageInfo });
    } catch (error) {
        console.error('Error fetching pageInfo:', error);
        return NextResponse.json({ error: 'Failed to fetch data' }, { status: 500 });
    }
}
