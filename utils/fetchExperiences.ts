import { Experience } from "../typings";

export const fetchExperiences = async () => {
  try {
    const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/getExperiences`);
    
    if (!res.ok) {
      throw new Error(`Failed to fetch experiences, status: ${res.status}`);
    }
    
    const data = await res.json();
    const experiences: Experience[] = data.experiences;

    console.log("fetching", experiences);

    return experiences;
  } catch (error) {
    console.error("Error fetching experiences:", error);
    return [];
  }
};
