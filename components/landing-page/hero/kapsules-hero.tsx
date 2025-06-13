import LandingShell from "@components/landing-page/shell/LandingShell";
import SearchForm from "@components/landing-page/prompt/SearchForm";
import NavRow from "@components/landing-page/navRow/NavRow";
import ProjectsGrid from "@components/landing-page/projects/ProjectsGrid";

export default function KapsulesHero() {
  return (
    <LandingShell>
      <SearchForm />
      <NavRow />
      <ProjectsGrid />
    </LandingShell>
  );
}
