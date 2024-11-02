import { Social } from "../typings";

const baseUrl = process.env.NEXT_PUBLIC_BASE_URL;

export const fetchSocials = async() => {
    const res = await fetch(`${baseUrl}/api/getSocials`);

    const data = await res.json()
    const socials: Social[] = data.socials;

    console.log("fetching", socials);

    return socials;
}