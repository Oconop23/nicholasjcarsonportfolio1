import React from 'react';
import { Wrench } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

interface Project {
  id: string;
  title: string;
  description: string;
  imageUrl: string;
}

export default function Projects() {
  const navigate = useNavigate();

  const projects: Project[] = [
    {
      id: "freddy-fazbear",
      title: "Freddy Fazbear Animatronic",
      description: "As a part of Point Loma High Schools Engineering Design and Development course we designed, constructed, and programmed Freddy Fazbear.",
      imageUrl: "https://imgur.com/jjOOgwa.jpg",
    }
  ];

  return (
    <section className="py-24 bg-gray-50">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-bold text-gray-900 mb-12 flex items-center gap-3 justify-center">
          <Wrench className="w-8 h-8 text-indigo-600" />
          Projects
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {projects.map((project) => (
            <button
              key={project.id}
              onClick={() => navigate(`/project/${project.id}`)}
              className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-shadow"
            >
              <div className="aspect-w-16 aspect-h-9">
                <img
                  src={project.imageUrl}
                  alt={project.title}
                  className="object-cover w-full h-96"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-2">{project.title}</h3>
                <p className="text-gray-600">{project.description}</p>
              </div>
            </button>
          ))}
        </div>
      </div>
    </section>
  );
}