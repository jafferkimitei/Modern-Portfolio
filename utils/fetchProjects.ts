import { Project } from "../typings";

const baseUrl = process.env.NEXT_PUBLIC_BASE_URL;

export const fetchProjects = async() => {
    const res = await fetch(`${baseUrl}/api/getProjects`);

    const data = await res.json()
    const projects: Project[]  = data.projects;

    console.log("fetching", projects);

    return projects;
}