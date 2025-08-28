import { motion } from "framer-motion";
import { ExternalLink, Github } from "lucide-react";

function Projects() {
  const projects = [
    {
      title: "CodeQuest",
      description: "A POTD platform that offers daily coding challenges tailored for college students, promoting consistent problem-solving. It features multi-platform progress tracking, streak monitoring, leaderboards, and insightful user analytics to boost engagement and learning.",
      tags: ["Typescript", "Node.js", "MongoDB", "Express.js", "Tailwind CSS"],
      liveLink: "https://codequest.srkrcodingclub.in",
      githubLink: "https://github.com/codevoid048/codequest",
    },
    {
      title: "Travel Nest",
      description: "A holiday rental platform that allows users to list and book accommodations, including hotels, residences, and vacation rentals. It features location-based search with interactive map integration, cost-per-night details, reviews and ratings, and an intuitive booking system, providing a seamless experience for both hosts and travelers.",
      tags: ["JavaScript", "Node.js", "Express.js", "MongoDB", 'HTML5', 'CSS3'],
      liveLink: "https://airbnb-zu4i.onrender.com",
      githubLink: "https://github.com/saiganesh4151/Travel-Nest",
    },

  ];

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: index => ({
      opacity: 0,
      x: index % 2 === 0 ? -30 : 30,
    }),
    show: {
      opacity: 1,
      x: 0,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 20,
        mass: 0.5,
        duration: 0.4,
      },
    },
  };

  return (
    <section id="projects" className="w-full py-22 bg-[#0a0a0a] relative overflow-hidden">
      <div className="absolute inset-0 z-0">
        <div className="absolute top-40 left-20 w-72 h-72 bg-blue-500/10 rounded-full filter blur-3xl"></div>
        <div className="absolute bottom-40 right-20 w-72 h-72 bg-blue-700/10 rounded-full filter blur-3xl"></div>
      </div>

      <div className="max-w-8xl mx-auto px-4 sm:px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.3 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4 mt-16">
            My <span className="text-blue-500">Projects</span>
          </h2>
          <div className="w-20 h-1 bg-blue-500 mx-auto mb-6"></div>
          <p className="text-gray-300 max-w-2xl mx-auto">
            Here are some of my recent projects. Each project represents a unique challenge and solution that I've
            worked on.
          </p>
        </motion.div>

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-50px" }}
          className="grid grid-cols-1 md:grid-cols-2 sm:grid-cols-1 lg:grid-cols-3 gap-6 sm:gap-8"
        >
          {projects.map((project, index) => (
            <motion.div
              key={index}
              custom={index}
              variants={itemVariants}
              className="group bg-[#111111] rounded-lg border border-gray-800 hover:border-blue-500/50 transition-all duration-300 hover:shadow-xl hover:shadow-blue-900/60 p-8"
            >
              <div className="flex items-start justify-between mb-6">
                <h3 className="text-xl font-bold text-white group-hover:text-blue-500 transition-colors duration-200">
                  {project.title}
                </h3>
                <div className="flex gap-2 ml-4 opacity-0 group-hover:opacity-100 transition-opacity duration-200">
                  {project.liveLink && (
                    <a
                      href={project.liveLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="bg-blue-600 hover:bg-blue-700 text-white p-2 rounded-full transition-all duration-200"
                      aria-label="View live project"
                    >
                      <ExternalLink size={16} />
                    </a>
                  )}
                  <a
                    href={project.githubLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-gray-800 hover:bg-gray-700 text-white p-2 rounded-full transition-all duration-200"
                    aria-label="View GitHub repository"
                  >
                    <Github size={16} />
                  </a>
                </div>
              </div>

              <p className="text-gray-400 mb-10 text-sm leading-relaxed">
                {project.description}
              </p>

              <div className="flex flex-wrap gap-2">
                {project.tags.map((tag, idx) => (
                  <span
                    key={idx}
                    className="text-xs bg-blue-500/10 text-blue-400 px-3 py-1 rounded-full border border-blue-500/20"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2, duration: 0.3 }}
          className="text-center mt-12"
        >
          <a
            href="https://github.com/saiganesh4151"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex mb-16 items-center gap-2 bg-[#111111] border border-gray-800 hover:border-blue-500/30 text-white px-6 py-3 rounded-full transition-all duration-200 hover:shadow-lg hover:shadow-blue-900/10"
          >
            <Github size={18} />
            View More on GitHub
          </a>
        </motion.div>
      </div>
    </section>
  );
}

export default Projects;