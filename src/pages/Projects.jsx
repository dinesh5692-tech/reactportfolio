import React from "react";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";

const Projects = () => {
  const projectList = [
    {
      name: "Heuristic Puzzle Forge",
      description:
        "Our project aims to develop a gaming website Heuristic Puzzle Forge for students and developers who can learn UI/UX design by playing this game. While encouraging strategy, skill development, and a sense of accomplishment, the game is made to provide enjoyment, excitement, and much knowledge about UI/UX Design",
      tech: ["React", "DnD", "Hooks", "Confetti"],
      github: "https://github.com/prakashmariappan/callofcreative",
      live: "https://heuristicpuzzleforge.netlify.app/",
      image: "/project1.png",  // Replace with project image
    },
    {
      name: "My Personal Portfolio",
      description:
        "A personal portfolio to showcase my skills, experience, and projects with smooth navigation and responsive design.",
      tech: ["React", "Tailwind", "Html","CSS","JavaScript"],
      github: "https://github.com/mchouhan5692/reactportfolio",
      live: "https://github.com/mchouhan5692.netlify.app/",
      image: "/project2.png", // Replace with project image
    },
    {
      name: "FocusFlow",
      description:
        "FocusFlow is a sleek, animated productivity app designed to help stay focused and organized using the Pomodoro technique. Built with React and styled using Tailwind CSS",
      tech: ["React", "Tailwind", "Html","CSS","JavaScript"],
      github: "https://github.com/ragasree123/FocusFlow",
      live: "https://appfocusflow.netlify.app/",
      image: "/project3.png", // Replace with project image
    },
  ];

  return (
    <section
      id="projects"
      className="py-20 px-10 bg-[#0f172a] min-h-screen"
    >
      <h2 className="text-4xl font-bold mb-12 text-center text-white">
        Projects
      </h2>

      <div className="grid md:grid-cols-2 gap-10">
        {projectList.map((project, index) => (
          <div
            key={index}
            className="bg-[#1e293b] border-2 border-blue-500 rounded-xl p-5 shadow-lg hover:scale-105 duration-300"
          >
            {/* Project Image */}
            <div className="relative">
              <img
                src={project.image}
                alt={project.name}
                className="rounded-md"
              />
              <div className="absolute top-4 right-4 flex gap-2">
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-blue-500 p-2 rounded-md hover:scale-110 duration-300"
                >
                  <FaGithub className="text-white" size={20} />
                </a>
                <a
                  href={project.live}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-blue-500 p-2 rounded-md hover:scale-110 duration-300"
                >
                  <FaExternalLinkAlt className="text-white" size={20} />
                </a>
              </div>
            </div>

            {/* Project Details */}
            <div className="mt-5">
              <h3 className="text-white text-xl font-bold">
                {project.name}
              </h3>
              <p className="text-gray-400 mt-2">{project.description}</p>

              {/* Tech Stack */}
              <div className="flex gap-2 flex-wrap mt-4">
                {project.tech.map((techItem, idx) => (
                  <span
                    key={idx}
                    className="bg-[#0f172a] text-blue-400 px-3 py-1 rounded-md text-sm"
                  >
                    {techItem}
                  </span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
