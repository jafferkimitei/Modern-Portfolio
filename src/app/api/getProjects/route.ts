
import { NextResponse } from 'next/server';
import { groq } from 'next-sanity';
import { sanityClient } from '../../../../sanity';
import { Project } from '../../../../typings';

const query = groq`*[_type == "project"] {
  ...,
  technologies[] ->
}`;

export async function GET() {
    try {
        const projects: Project[] = await sanityClient.fetch(query);
        return NextResponse.json({ projects });
    } catch (error) {
        console.error('Error fetching projects:', error);
        return NextResponse.json({ error: 'Failed to fetch data' }, { status: 500 });
    }
}
