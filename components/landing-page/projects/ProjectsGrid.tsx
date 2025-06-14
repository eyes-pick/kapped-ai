import { useEffect, useState } from "react";
import clsx from "clsx";

/**
 * Describes a single project displayed in the grid.
 */
export interface Project {
  title: string;
  image?: string;
  github?: string;
  open?: string;
  overview?: string;
}

interface ProjectsGridProps {
  /**
   * Optional list of projects. If omitted the component will try to fetch
   * projects from `/api/projects`.
   */
  projects?: Project[];
}

/**
 * Renders a grid of project cards using provided or fetched project data.
 */
const ProjectsGrid = ({ projects: initialProjects }: ProjectsGridProps) => {
  const [projects, setProjects] = useState<Project[]>(initialProjects ?? []);

  useEffect(() => {
    if (initialProjects) return;

    fetch("/api/projects")
      .then((res) => (res.ok ? res.json() : []))
      .then((data: Project[]) => setProjects(data))
      .catch(() => {
        // failed fetch is silently ignored
      });
  }, [initialProjects]);

  const linkOrDisabled = (url?: string) =>
    url && url !== "#" && url.trim().length > 0;
  return (
    <div className="mt-8 bg-white/95 backdrop-blur-lg p-6 rounded-2xl shadow-2xl max-w-4xl w-full z-10">
      <h3 className="text-xl font-bold mb-4">Your Projects</h3>
      <div className="grid gap-4 mt-4 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
        {projects.map((project) => (
          <div key={project.title} className="relative cursor-pointer group">
            <div className="bg-neutral-900 text-white rounded-xl overflow-hidden shadow-md text-center relative">
              <div className="relative">
                <div className="w-full h-32 bg-neutral-800" />
                <div className="absolute bottom-0 w-full bg-black/80 text-white px-2 py-2 text-sm font-semibold opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  {project.title}
                </div>
              </div>
              <div className="flex justify-around py-3 px-4 border-t border-neutral-800">
                <a
                  href={linkOrDisabled(project.open) ? project.open : undefined}
                  className={clsx(
                    "text-xs font-semibold text-white bg-neutral-800 border border-neutral-700 rounded-md px-2 py-1",
                    linkOrDisabled(project.open)
                      ? "hover:bg-neutral-700 transition"
                      : "opacity-50 cursor-not-allowed pointer-events-none",
                  )}
                >
                  Open
                </a>
                <a
                  href={
                    linkOrDisabled(project.github) ? project.github : undefined
                  }
                  className={clsx(
                    "text-xs font-semibold text-white bg-neutral-800 border border-neutral-700 rounded-md px-2 py-1",
                    linkOrDisabled(project.github)
                      ? "hover:bg-neutral-700 transition"
                      : "opacity-50 cursor-not-allowed pointer-events-none",
                  )}
                >
                  GitHub
                </a>
                <a
                  href={
                    linkOrDisabled(project.overview)
                      ? project.overview
                      : undefined
                  }
                  className={clsx(
                    "text-xs font-semibold text-white bg-neutral-800 border border-neutral-700 rounded-md px-2 py-1",
                    linkOrDisabled(project.overview)
                      ? "hover:bg-neutral-700 transition"
                      : "opacity-50 cursor-not-allowed pointer-events-none",
                  )}
                >
                  Overview
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProjectsGrid;
