import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';

interface ProjectData {
  id: string;
  title: string;
  description: string;
  imageUrl: string;
  content: React.ReactNode;
}

export default function ProjectDetail() {
  const { id } = useParams();
  const navigate = useNavigate();

  const projects: Record<string, ProjectData> = {
    'freddy-fazbear': {
      id: 'freddy-fazbear',
      title: 'Freddy Fazbear Animatronic',
      description: 'As a part of Point Loma High Schools Engineering Design and Development course we designed, constructed, and programmed Freddy Fazbear.',
      imageUrl: 'https://imgur.com/jjOOgwa.jpg',
      content: (
        <div className="prose max-w-none">
          <h2>Project Overview</h2>
          <p>Detailed documentation coming soon...</p>
          
          <h2>Development Process</h2>
          <p>Step by step process will be documented here...</p>
          
          <h2>Technical Details</h2>
          <ul>
            <li>Arduino-based control system</li>
            <li>Custom 3D printed components</li>
            <li>Servo motor animations</li>
            <li>LED lighting effects</li>
          </ul>
        </div>
      ),
    },
  };

  const project = projects[id || ''];

  if (!project) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Project Not Found</h1>
          <button
            onClick={() => navigate('/')}
            className="text-indigo-600 hover:text-indigo-800 flex items-center gap-2 mx-auto"
          >
            <ArrowLeft className="w-5 h-5" />
            Return Home
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="container mx-auto px-6 py-12">
        <button
          onClick={() => navigate('/')}
          className="text-indigo-600 hover:text-indigo-800 flex items-center gap-2 mb-8"
        >
          <ArrowLeft className="w-5 h-5" />
          Back to Portfolio
        </button>

        <h1 className="text-4xl font-bold text-gray-900 mb-6">{project.title}</h1>
        
        <img
          src={project.imageUrl}
          alt={project.title}
          className="w-full max-h-[600px] object-cover rounded-lg mb-8"
        />

        <div className="bg-white rounded-lg shadow-md p-8">
          {project.content}
        </div>
      </div>
    </div>
  );
}