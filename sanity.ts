import { createClient } from "next-sanity";
import createImageUrlBuilder from '@sanity/image-url';
// import { apiVersion, dataset, projectId } from "@/sanity/env";
// import { urlFor } from './src/sanity/lib/image';


export const config = {
    dataset: process.env.NEXT_PUBLIC_SANITY_DATASET || "production",
    projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID || "thqfwi0b",
    apiVersion: "2024-10-31",
    useCdn: process.env.NODE_ENV === "production",
};

export const sanityClient = createClient(config);

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const urlFor = (source: any) =>
    createImageUrlBuilder(config).image(source);