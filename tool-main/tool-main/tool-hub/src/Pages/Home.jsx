import ToolCard from "../components/ToolCard";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { motion } from "framer-motion";

const tools = [
  {
    name: "Live Figma",
    url: "https://free-figma.vercel.app/",
    description: "A real-time collaborative design tool built with Next.js and Liveblocks.",
    tags: ["Next.js", "Liveblocks", "Canvas", "Real-time"],
  },
  {
    name: "AI Calculator",
    url: "https://ai-cal-frt.vercel.app/",
    description: "Draw on canvas and get smart AI-calculated answers using Gemini API.",
    tags: ["Canvas", "AI", "Gemini", "React"],
  },
  {
    name: "Gemini AI Clone",
    url: "https://github.com/Shivam-Kag/Gemini-Clone",
    description: "Chat with an AI using a clean Gemini-like interface built in React.",
    tags: ["React", "Gemini API", "Chatbot", "AI"],
  },
  {
    name: "Image Search Engine",
    url: "https://shivam-kag.github.io/Image--Search-Engine/",
    description: "Real-time image search app using Unsplash API and vanilla JS.",
    tags: ["HTML", "CSS", "JS", "Unsplash"],
  },
];

export default function Home() {
  return (
    <div className="bg-gradient-to-br from-sky-50 to-white min-h-screen">
      <Header />

      <div className="pt-28 pb-10 px-6 max-w-6xl mx-auto">
        <h1 className="text-4xl md:text-5xl font-bold text-center text-gray-800 mb-12">
          Explore Tools Built with ❤️
        </h1>

        <div className="grid gap-8 md:grid-cols-2">
          {tools.map((tool, index) => (
            <motion.div
              key={tool.name}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2 }}
            >
              <ToolCard tool={tool} />
            </motion.div>
          ))}
        </div>
      </div>

      {/* About Developer */}
      <section id="about" className="bg-white dark:bg-gray-900 py-14 px-6 transition-colors duration-500">
  <div className="max-w-6xl mx-auto text-center">
    <h2 className="text-3xl font-bold text-blue-800 dark:text-blue-300 mb-10">About the Developers</h2>

    <div className="grid gap-8 sm:grid-cols-2 md:grid-cols-4">
      {[
        // {
        //   name: "Ujjawal Joshi",
        //   role: "Frontend Developer",
        //   github: "https://github.com/uj-joshi",
        //   linkedin: "https://www.linkedin.com/in/ujjawal-joshi-5ba325278",
        //   avatar: "https://avatars.githubusercontent.com/u/1?v=4",
        // },
         {
          name: "Nikhil Soni",
          role: "ui/ux and Frontend Developer",
          github: "https://github.com/Nikhilsoni3093",
          linkedin: "https://www.linkedin.com/in/nikhil-soni-ba4679294/",
          avatar: "https://avatars.githubusercontent.com/u/2?v=4",
        },
        // {
        //   name: "Sandhya Rathor",
        //   role: "UI/UX Designer",
        //   github: "https://github.com/iamvis",
        //   linkedin: "https://linkedin.com/in/dev3",
        //   avatar: "data:image/png;base64,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",
        // },
        // {
        //   name: "Vishal Prajapati",
        //   role: "AI & Realtime Systems",
        //   github: "https://github.com/dev4",
        //   linkedin: "https://www.linkedin.com/in/vishal-prajapati-6708961b7/",
        //   avatar: "https://avatars.githubusercontent.com/u/4?v=4",
        // },
      ].map((dev, index) => (
        <div key={index} className="bg-gray-100 dark:bg-gray-800 p-6 rounded-xl shadow hover:scale-105 transition">
          <img
            src={dev.avatar}
            alt={`${dev.name} Avatar`}
            className="w-20 h-20 rounded-full mx-auto mb-4 border-4 border-blue-500 dark:border-blue-400"
          />
          <h3 className="text-xl font-semibold text-blue-700 dark:text-blue-400">{dev.name}</h3>
          <p className="text-gray-700 dark:text-gray-300 mt-1">{dev.role}</p>
          <div className="flex justify-center gap-4 mt-3 text-blue-600 dark:text-blue-300">
            <a href={dev.github} target="_blank" rel="noopener noreferrer" className="hover:underline">GitHub</a>
            <a href={dev.linkedin} target="_blank" rel="noopener noreferrer" className="hover:underline">LinkedIn</a>
          </div>
        </div>
      ))}
    </div>
  </div>
</section>



      <Footer />
    </div>
  );
}
