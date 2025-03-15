"use client";
import React, { useState, useRef } from "react";
import ProjectCard from "./ProjectCard";
import ProjectTag from "./ProjectTag";
import { motion, useInView } from "framer-motion";

const projectsData = [
  {
    id: 1,
    title: "Ai course App",
    description: "This is an ai powered application which helps the simple students to learn the complex concepts usning ai.",
    image: "/images/projects/1.jpg",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/Pluggycode/MagnaAI",
    previewUrl: "https://magnaai.vercel.app",
  },
  {
    id: 2,
    title: "Veg Basket E-commersce appliction",
    description: "This is an MERN stack appliction which resolve the real world problem of our city,and helps to the people to buy vegitable and fruits frem where they lived in..",
    image: "/images/projects/2.jpg",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/Pluggycode/vegbasket",
    previewUrl: "/refresh",
  },
  {
    id: 3,
    title: "Ai-powered Content generator",
    description: "This is an next.js app which helps to the bloggers and content creators to build their content in more felxible way to reach more people usinG aI..",
    image: "/images/projects/3.jpg",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/Pluggycode/content-ai",
    previewUrl: "/refresh",
  },
  {
    id: 4,
    title: "My Portfolio",
    description: "This is an app which provides more information about me and my creation in webdev Field.",
    image: "/images/projects/4.jpg",
    tag: ["All", "Mobile"],
    gitUrl: "/",
    previewUrl: "/",
  },
  {
    id: 5,
    title: "Ai-Podcast",
    description: "An app which helps to the people need tool to create something amazing and create in form of ai powered podcast",
    image: "/images/projects/5.jpeg",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/Pluggycode/shortsapp",
    previewUrl: "https://magnapodcast.vercel.app/",
  },
];

const ProjectsSection = () => {
  const [tag, setTag] = useState("All");
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const handleTagChange = (newTag) => {
    setTag(newTag);
  };

  const filteredProjects = projectsData.filter((project) =>
    project.tag.includes(tag)
  );

  const cardVariants = {
    initial: { y: 50, opacity: 0 },
    animate: { y: 0, opacity: 1 },
  };

  return (
    <section id="projects">
      <h2 className="text-center text-4xl font-bold text-white mt-4 mb-8 md:mb-12">
        My Projects
      </h2>
      <div className="text-white flex flex-row justify-center items-center gap-2 py-6">
        <ProjectTag
          onClick={handleTagChange}
          name="All"
          isSelected={tag === "All"}
        />
        <ProjectTag
          onClick={handleTagChange}
          name="Web"
          isSelected={tag === "Web"}
        />
        <ProjectTag
          onClick={handleTagChange}
          name="Mobile"
          isSelected={tag === "Mobile"}
        />
      </div>
      <ul ref={ref} className="grid md:grid-cols-3 gap-8 md:gap-12">
        {filteredProjects.map((project, index) => (
          <motion.li
            key={index}
            variants={cardVariants}
            initial="initial"
            animate={isInView ? "animate" : "initial"}
            transition={{ duration: 0.3, delay: index * 0.4 }}
          >
            <ProjectCard
              key={project.id}
              title={project.title}
              description={project.description}
              imgUrl={project.image}
              gitUrl={project.gitUrl}
              previewUrl={project.previewUrl}
            />
          </motion.li>
        ))}
      </ul>
    </section>
  );
};

export default ProjectsSection;
