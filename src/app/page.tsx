import Header from "../components/Header";
import Hero from "../components/Hero";
import About from "../components/About";
import WorkExperience from "../components/Experience";
import Skills from "../components/Skills";
import Projects from "../components/Projects";
import ContactMe from "../components/ContactMe";
import Link from "next/link";
import Image from "next/image";
import { Experience, PageInfo, Project, Skill, Social } from "../../typings";
import { fetchPageInfo } from "../../utils/fetchPageInfo";
import { fetchExperiences } from "../../utils/fetchExperiences";
import { fetchSkills } from "../../utils/fetchSkills";
import { fetchProjects } from "../../utils/fetchProjects";
import { fetchSocials } from "../../utils/fetchSocials";

// Use async/await directly in the component for data fetching
const Home = async () => {
  let pageInfo: PageInfo | null = null;
  let experiences: Experience[] | null = null;
  let skills: Skill[] | null = null;
  let projects: Project[] | null = null;
  let socials: Social[] | null = null;

  try {
    pageInfo = await fetchPageInfo();
    experiences = await fetchExperiences();
    skills = await fetchSkills();
    projects = await fetchProjects();
    socials = await fetchSocials();
  } catch (error) {
    console.error("Error fetching data:", error);
  }

  return (
    <div className="bg-[rgb(36,36,36)] text-white h-screen snap-y snap-mandatory overflow-y-scroll overflow-x-hidden z-0 scrollbar scrollbar-track-gray-400/20 scrollbar-thumb-[#F7AB0A]/80 md:scale-100 scale-67">
      {socials && <Header socials={socials} />}

      <section id="hero" className="snap-start">
        {pageInfo && <Hero pageInfo={pageInfo} />}
      </section>

      <section id="about" className="snap-center">
        {pageInfo && <About pageInfo={pageInfo} />}
      </section>

      <section id="experience" className="snap-center h-[150vh]">
        {experiences && <WorkExperience experiences={experiences} />}
      </section>

      <section id="skills" className="snap-start h-[150vh]">
        {skills && <Skills skills={skills} />}
      </section>

      <section id="projects" className="snap-start">
        {projects && <Projects projects={projects} />}
      </section>

      <section id="contactme" className="snap-start h-[125vh]">
        <ContactMe />
      </section>

      <Link href="#hero" passHref>
  <footer className="sticky bottom-5 w-full cursor-pointer">
    <div className="flex items-center justify-center">
      <Image
        className="h-10 w-10 rounded-full filter grayscale object-cover hover:grayscale-0 transition-all"
        src="/images/artflow1.png"
        alt="Back to top"
        width={40}
        height={40}
      />
    </div>
  </footer>
</Link>

    </div>
  );
};

export default Home;
