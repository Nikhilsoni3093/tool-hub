import { Link } from "react-router-dom";

export default function ToolCard({ tool }) {
    return (
      <div className="bg-white p-6 rounded-2xl shadow-xl hover:scale-105 transition-transform duration-300 border border-gray-200">
        <h2 className="text-xl font-semibold text-gray-800">{tool.name}</h2>
        <p className="text-gray-600 mt-2 mb-4">{tool.description}</p>
        <div className="flex gap-2 flex-wrap text-sm text-white mb-4">
          {tool.tags?.map(tag => (
            <span key={tag} className="bg-blue-500 px-2 py-0.5 rounded-md">{tag}</span>
          ))}
        </div>
        <a
          href={tool.url}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block px-4 py-2 bg-blue-600 text-white rounded-xl hover:bg-blue-700 transition"
        >
          Open →
        </a>
      </div>
    );
  }
  
  