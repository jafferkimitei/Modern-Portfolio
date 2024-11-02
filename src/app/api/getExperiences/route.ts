
import { NextResponse } from 'next/server';
import { groq } from 'next-sanity';
import { sanityClient } from '../../../../sanity';
import { Experience } from '../../../../typings';

const query = groq`*[_type == "experience"] {
  ...,
  technologies[] ->
}`;

export async function GET() {
    try {
        const experiences: Experience[] = await sanityClient.fetch(query);
        return NextResponse.json({ experiences });
    } catch (error) {
        console.error('Error fetching experiences:', error);
        return NextResponse.json({ error: 'Failed to fetch data' }, { status: 500 });
    }
}
