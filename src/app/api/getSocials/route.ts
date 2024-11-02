
import { NextResponse } from 'next/server';
import { groq } from 'next-sanity';
import { sanityClient } from '../../../../sanity';
import { Social } from '../../../../typings';

const query = groq`*[_type == "social"]`;

export async function GET() {
    try {
        const socials: Social[] = await sanityClient.fetch(query);
        return NextResponse.json({ socials });
    } catch (error) {
        console.error('Error fetching socials:', error);
        return NextResponse.json({ error: 'Failed to fetch data' }, { status: 500 });
    }
}
