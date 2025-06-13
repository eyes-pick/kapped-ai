import LandingShell from "@components/landing-page/shell/LandingShell";
import SearchForm from "@components/landing-page/prompt/SearchForm";
import NavRow from "@components/landing-page/navRow/NavRow";
import ProjectsGrid, { type Project } from "@components/landing-page/projects/ProjectsGrid";

const demoProjects: Project[] = [
  {
    title: "Project Alpha",
    image: "",
    github: "https://github.com/genr8/project-alpha",
    open: "https://alpha.kapsules.dev",
    overview: "/projects/alpha",
  },
  {
    title: "UI Builder",
    image: "",
    github: "https://github.com/genr8/ui-builder",
    open: "https://builder.kapsules.dev",
    overview: "/projects/ui-builder",
  },
  {
    title: "Gen8 Studio",
    image: "",
    overview: "/projects/gen8-studio",
  },
  {
    title: "DeployKit",
    image: "",
    github: "https://github.com/genr8/deploykit",
  },
];

/**
 * Displays the landing page hero with search form, navigation and demo projects.
 */
export default function KapsulesHero() {
  return (
    <LandingShell>
      <SearchForm />
      <NavRow />
      <ProjectsGrid projects={demoProjects} />
    </LandingShell>
  );
}
