"use client";

import React from "react";
import { Github, FilePlus, ImageIcon, LayoutTemplate } from "lucide-react";

interface Project {
  title: string;
  image: string;
  github: string;
  open: string;
  overview: string;
}

const navButtons = [
  "Admin Dashboard",
  "Landing Page",
  "AI Chat Interface",
  "Auth Provider Client",
];

const projects: Project[] = [
  { title: "Project Alpha", image: "", github: "#", open: "#", overview: "#" },
  { title: "UI Builder", image: "", github: "#", open: "#", overview: "#" },
  { title: "Gen8 Studio", image: "", github: "#", open: "#", overview: "#" },
  { title: "DeployKit", image: "", github: "#", open: "#", overview: "#" },
];

function SearchForm() {
  const formWrapper: React.CSSProperties = {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    background: "#fff",
    borderRadius: "0.75rem",
    padding: "0.5rem",
    boxShadow: "0 4px 10px rgba(0,0,0,0.1)",
    maxWidth: "720px",
    width: "100%",
    marginBottom: "1.5rem",
    zIndex: 1,
  };

  const inputWrapper: React.CSSProperties = {
    display: "grid",
    gridTemplateColumns: "auto 1fr auto",
    gap: "0.5rem",
    border: "1px solid #bbb",
    borderRadius: "0.5rem",
    padding: "0.5rem",
    background: "#f9f9f9",
    width: "100%",
    boxSizing: "border-box",
  };

  const input: React.CSSProperties = {
    gridColumn: "2",
    padding: "0.5rem",
    fontSize: "0.9rem",
    border: "1px solid #ccc",
    borderRadius: "0.375rem",
    outline: "none",
    background: "#fff",
    fontFamily: "Inter, sans-serif",
    width: "100%",
  };

  const iconColumn: React.CSSProperties = {
    display: "flex",
    flexDirection: "column",
    gap: "0.5rem",
  };

  const iconButton: React.CSSProperties = {
    backgroundColor: "#1a1a1a",
    color: "#fff",
    border: "1px solid #333",
    padding: "0.5rem",
    borderRadius: "0.375rem",
    fontSize: "0.85rem",
    fontWeight: 600,
    fontFamily: "Inter, sans-serif",
    cursor: "pointer",
    transition: "background 0.2s ease, transform 0.1s ease",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    width: "2.5rem",
    height: "2.5rem",
  };

  return (
    <div style={formWrapper}>
      <div style={inputWrapper}>
        <div style={iconColumn}>
          <button style={iconButton}>
            <Github size={16} />
          </button>
          <button style={iconButton}>
            <LayoutTemplate size={16} />
          </button>
        </div>
        <input type="text" placeholder="What would you like to build?" style={input} />
        <div style={iconColumn}>
          <button style={iconButton}>
            <FilePlus size={16} />
          </button>
          <button style={iconButton}>
            <ImageIcon size={16} />
          </button>
        </div>
      </div>
    </div>
  );
}

function NavRow() {
  const navButton: React.CSSProperties = {
    backgroundColor: "#1a1a1a",
    color: "#fff",
    border: "1px solid #333",
    padding: "0.5rem 1rem",
    borderRadius: "0.375rem",
    fontSize: "0.85rem",
    fontWeight: 600,
    fontFamily: "Inter, sans-serif",
    cursor: "pointer",
    transition: "background 0.2s ease, transform 0.1s ease",
    whiteSpace: "nowrap",
    flexShrink: 0,
    zIndex: 1,
  };

  const navRow: React.CSSProperties = {
    display: "flex",
    gap: "0.5rem",
    flexWrap: "wrap",
    justifyContent: "center",
    maxWidth: "720px",
    width: "100%",
    zIndex: 1,
  };

  return (
    <div style={navRow}>
      {navButtons.map((label) => (
        <button key={label} style={navButton}>
          {label}
        </button>
      ))}
    </div>
  );
}

function ProjectsGrid() {
  const projectsCard: React.CSSProperties = {
    marginTop: "2rem",
    background: "#ffffffee",
    backdropFilter: "blur(8px)",
    padding: "1.5rem",
    borderRadius: "1rem",
    boxShadow: "0 8px 20px rgba(0, 0, 0, 0.15)",
    maxWidth: "900px",
    width: "100%",
    zIndex: 1,
  };

  const grid: React.CSSProperties = {
    display: "grid",
    gap: "1rem",
    marginTop: "1rem",
    gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
  };

  const card: React.CSSProperties = {
    background: "#1a1a1a",
    color: "#fff",
    borderRadius: "0.75rem",
    padding: "0",
    overflow: "hidden",
    boxShadow: "0 2px 6px rgba(0,0,0,0.2)",
    textAlign: "center",
    position: "relative",
  };

  const imageStyle: React.CSSProperties = {
    width: "100%",
    height: "120px",
    objectFit: "cover",
    backgroundColor: "#333",
  };

  const actions: React.CSSProperties = {
    display: "flex",
    justifyContent: "space-around",
    padding: "0.75rem 1rem",
    borderTop: "1px solid #333",
  };

  const actionBtn: React.CSSProperties = {
    fontSize: "0.75rem",
    fontWeight: 600,
    color: "#fff",
    background: "#222",
    border: "1px solid #444",
    borderRadius: "0.375rem",
    padding: "0.25rem 0.5rem",
    cursor: "pointer",
    transition: "all 0.2s",
  };

  const hoverOverlay: React.CSSProperties = {
    position: "absolute",
    bottom: "0",
    width: "100%",
    background: "rgba(0,0,0,0.8)",
    color: "#fff",
    padding: "0.5rem",
    fontSize: "0.85rem",
    fontWeight: 600,
    opacity: 0,
    transition: "opacity 0.3s ease-in-out",
  };

  const cardWrapper: React.CSSProperties = {
    position: "relative",
    cursor: "pointer",
  };

  return (
    <div style={projectsCard}>
      <h3 style={{ fontSize: "1.25rem", fontWeight: 700, marginBottom: "1rem" }}>
        Your Projects
      </h3>
      <div style={grid}>
        {projects.map((project) => (
          <div key={project.title} style={cardWrapper}>
            <div style={card}>
              <div style={{ position: "relative" }}>
                <div style={imageStyle} />
                <div className="hover-overlay" style={hoverOverlay}>
                  {project.title}
                </div>
              </div>
              <div style={actions}>
                <a href={project.open} style={actionBtn}>
                  Open
                </a>
                <a href={project.github} style={actionBtn}>
                  GitHub
                </a>
                <a href={project.overview} style={actionBtn}>
                  Overview
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default function KapsulesHero() {
  const container: React.CSSProperties = {
    position: "relative",
    width: "100%",
    minHeight: "100vh",
    padding: "1.5rem",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    background: "radial-gradient(circle at center, #a0d36e, #3d5a25)",
    boxSizing: "border-box",
    overflow: "hidden",
  };

  const star: React.CSSProperties = {
    position: "absolute",
    width: "180vmin",
    height: "180vmin",
    background: "black",
    borderRadius: "0%",
    clipPath:
      "polygon(50% 0%, 60% 40%, 100% 50%, 60% 60%, 50% 100%, 40% 60%, 0% 50%, 40% 40%)",
    filter: "blur(30px)",
    zIndex: 0,
    opacity: 0.12,
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%) rotate(45deg)",
  };

  const badge: React.CSSProperties = {
    position: "absolute",
    top: "1rem",
    right: "1rem",
    backgroundColor: "#111",
    color: "#fff",
    padding: "0.25rem 0.75rem",
    borderRadius: "0.5rem",
    fontSize: "0.7rem",
    fontFamily: "Inter, sans-serif",
    zIndex: 1,
  };

  const title: React.CSSProperties = {
    color: "#fff",
    fontSize: "5rem",
    fontWeight: 900,
    fontFamily: '"Segoe UI", Tahoma, Geneva, Verdana, sans-serif',
    textAlign: "center",
    margin: "0.5rem 2rem",
    letterSpacing: "-1px",
    textShadow: "0 4px 12px rgba(0,0,0,0.5)",
    zIndex: 1,
  };

  const subtitle: React.CSSProperties = {
    margin: "0.5rem 0 1rem",
    color: "#e8ffe0",
    fontSize: "1rem",
    fontWeight: 500,
    fontFamily: "Inter, sans-serif",
    textAlign: "center",
    zIndex: 1,
  };

  return (
    <div style={container}>
      <div style={star} />
      <div style={badge}>v1.00</div>
      <h1 style={title}>Kapsules</h1>
      <h2 style={subtitle}>Powered by GENR8</h2>
      <SearchForm />
      <NavRow />
      <ProjectsGrid />
    </div>
  );
}
