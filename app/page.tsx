"use client"

import Layout from "../components/Layout"
import { motion } from "framer-motion"
import { Code, Database, Globe } from "lucide-react"

export default function Home() {
  const fadeIn = {
    initial: { opacity: 0 },
    animate: { opacity: 1 },
    transition: { duration: 0.5 },
  }

  const staggerChildren = {
    animate: {
      transition: {
        staggerChildren: 0.1,
      },
    },
  }

  const skills = [
    { name: "Python", icon: Code },
    { name: "Web traffic analysis", icon: Globe },
    { name: "Frontend Development", icon: Globe },
    { name: "Backend Development", icon: Database },
  ]

  return (
    <Layout>
      <motion.section id="about" {...fadeIn} className="mb-20">
        <h2 className="text-4xl font-bold mb-6 tracking-tight">About Me</h2>
        <motion.div
          className="border border-current p-8"
          initial={{ borderWidth: 0 }}
          animate={{ borderWidth: 1 }}
          transition={{ duration: 0.5 }}
        >
          <p className="mb-3 text-lg">
            Name: <span className="font-semibold">Nezumi</span>
          </p>
          <p className="mb-3 text-lg">
            Age: <span className="font-semibold">16</span>
          </p>
          <p className="mb-3 text-lg">
            Location: <span className="font-semibold">Fukuoka, Japan</span>
          </p>
          <p className="text-lg">
            A passionate developer with a strong foundation in Python, currently exploring the exciting world of frontend development.
          </p>
        </motion.div>
      </motion.section>

      <motion.section id="skills" {...fadeIn} className="mb-20">
        <h2 className="text-4xl font-bold mb-10 tracking-tight">Skills</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-6">
          {skills.map((skill, index) => (
            <motion.div
              key={index}
              className="border border-current p-6 flex items-center space-x-4 rounded-lg"
              variants={fadeIn}
            >
              <skill.icon size={32} className="text-primary" />
              <h3 className="text-xl font-semibold">{skill.name}</h3>
            </motion.div>
          ))}
        </div>
      </motion.section>

      <motion.section id="projects" {...fadeIn} className="mb-20">
        <h2 className="text-4xl font-bold mb-6 tracking-tight">Projects</h2>
        <motion.div className="space-y-8" variants={staggerChildren} initial="initial" animate="animate">
          {[
            {
              title: "URL Shortener",
              description: "Backend modification and frontend design for a URL shortening service.",
              link: "https://s.moyashi.xyz",
            },
            {
              title: "LINE Works SDK",
              description: "Implemented MQTT communication, login, and basic messaging functionalities.",
              link: "https://github.com/nanato12/line-works-sdk",
            },
            {
              title: "Nezu Notify",
              description: "Web-based tool for LINE Notify token generation, revocation, and message sending.",
              link: "https://github.com/nezumi0627/nezu-notify",
            },
            {
              title: "GitHub README Animation",
              description: "Technique for adding SVG animations to GitHub README profiles.",
              link: "https://github.com/nezumi0627/nezumi0627",
            },
          ].map((project, index) => (
            <motion.div key={index} className="border-b border-current pb-6 last:border-b-0" variants={fadeIn}>
              <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
              <p className="mb-4">{project.description}</p>
              <motion.a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block border border-current py-2 px-4 font-semibold transition-opacity duration-300"
                whileTap={{ opacity: 0.5 }}
              >
                View Project
              </motion.a>
            </motion.div>
          ))}
        </motion.div>
      </motion.section>

      <motion.section id="contact" {...fadeIn}>
        <h2 className="text-4xl font-bold mb-6 tracking-tight">Contact</h2>
        <motion.div
          className="border border-current p-8"
          initial={{ borderWidth: 0 }}
          animate={{ borderWidth: 1 }}
          transition={{ duration: 0.5 }}
        >
          <p className="mb-4 text-lg">Feel free to reach out to me for collaborations or questions!</p>
          <motion.a
            href="https://github.com/nezumi0627"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block border border-current py-2 px-4 font-semibold transition-opacity duration-300"
            whileTap={{ opacity: 0.5 }}
          >
            GitHub: @nezumi0627
          </motion.a>
          <motion.a
            href="https://x.com/nezum1n1um"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block border border-current py-2 px-4 font-semibold transition-opacity duration-300 ml-4"
            whileTap={{ opacity: 0.5 }}
          >
            Twitter: @nezum1n1um
          </motion.a>
        </motion.div>
      </motion.section>
    </Layout>
  )
}
