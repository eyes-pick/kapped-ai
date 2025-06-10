const projects = [
    { title: "Project Alpha", image: "", github: "#", open: "#", overview: "#" },
    { title: "UI Builder", image: "", github: "#", open: "#", overview: "#" },
    { title: "Gen8 Studio", image: "", github: "#", open: "#", overview: "#" },
    { title: "DeployKit", image: "", github: "#", open: "#", overview: "#" },
];

const ProjectsGrid = () => {
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
                                    href={project.open}
                                    className="text-xs font-semibold text-white bg-neutral-800 border border-neutral-700 rounded-md px-2 py-1 hover:bg-neutral-700 transition"
                                >
                                    Open
                                </a>
                                <a
                                    href={project.github}
                                    className="text-xs font-semibold text-white bg-neutral-800 border border-neutral-700 rounded-md px-2 py-1 hover:bg-neutral-700 transition"
                                >
                                    GitHub
                                </a>
                                <a
                                    href={project.overview}
                                    className="text-xs font-semibold text-white bg-neutral-800 border border-neutral-700 rounded-md px-2 py-1 hover:bg-neutral-700 transition"
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
