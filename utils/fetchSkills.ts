import { Skill } from "../typings";

const baseUrl = process.env.NEXT_PUBLIC_BASE_URL;

export const fetchSkills = async() => {
    const res = await fetch(`${baseUrl}/api/getSkills`);

    const data = await res.json()
    const skills: Skill[] = data.skills;

    console.log("fetching", skills);

    return skills;
}