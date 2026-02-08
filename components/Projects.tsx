"use client"
import React, { useState, useEffect } from 'react';
import { FREELANCE_PROJECTS } from '../constants';
import { Category, FreelanceProject } from '../types';
import { Folder, Globe, Lock, Star, Layout, Server, Shield, Archive, Eye, X, Image as ImageIcon } from 'lucide-react';

const Projects: React.FC = () => {
  const [filter, setFilter] = useState<Category | 'ALL'>('ALL');
  const [selectedProject, setSelectedProject] = useState<FreelanceProject | null>(null);

  // Lock body scroll when modal is open
  useEffect(() => {
    if (selectedProject) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => { document.body.style.overflow = 'unset'; };
  }, [selectedProject]);

  const filteredProjects = filter === 'ALL'
    ? FREELANCE_PROJECTS
    : FREELANCE_PROJECTS.filter(p => p.category === filter);

  // Sorting: Featured first
  const sortedProjects = [...filteredProjects].sort((a, b) =>
    (a.featured === b.featured) ? 0 : a.featured ? -1 : 1
  );

  const categories = ['ALL', Category.SAAS, Category.SCRAPING, Category.API];

  return (
    <section id="projects" className="py-20 px-4 max-w-7xl mx-auto transition-colors duration-300">
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 mb-12">
        <h2 className="text-3xl font-bold text-terminal-header">
          <span className="text-terminal-green">03.</span> Project Database
        </h2>

        {/* Filter Tabs */}
        <div className="flex bg-terminal-panel p-1 rounded-lg border border-terminal-border overflow-x-auto transition-colors">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setFilter(cat as any)}
              className={`px-4 py-2 text-sm font-medium rounded-md transition-all whitespace-nowrap ${filter === cat
                ? 'bg-terminal-border text-terminal-header shadow-sm'
                : 'text-terminal-body hover:text-terminal-header'
                }`}
            >
              {cat === 'ALL' ? 'All Modules' : cat}
            </button>
          ))}
        </div>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {sortedProjects.map((project, idx) => (
          <ProjectCard
            key={idx}
            project={project}
            onOpen={() => setSelectedProject(project)}
          />
        ))}

        {/* Placeholder Card for More Projects */}
        <div className="group bg-terminal-bg/30 border border-dashed border-terminal-border rounded-lg p-6 flex flex-col justify-center items-center text-center min-h-[300px] hover:border-terminal-cyan/50 hover:bg-terminal-panel transition-all">
          <div className="p-4 rounded-full bg-terminal-panel border border-terminal-border mb-4 group-hover:scale-110 transition-transform">
            <Archive size={32} className="text-terminal-body group-hover:text-terminal-cyan transition-colors" />
          </div>
          <h3 className="font-bold text-terminal-header text-lg mb-2">Archive Restricted</h3>
          <p className="text-terminal-body text-sm max-w-xs mb-6 leading-relaxed">
            This database displays only a fraction of deployed systems. 15+ additional private enterprise projects available for review.
          </p>
          <a href="#contact" className="px-4 py-2 rounded border border-terminal-border text-xs font-mono text-terminal-body hover:text-terminal-header hover:border-terminal-cyan hover:bg-terminal-cyan/10 transition-colors">
            Request Full Access
          </a>
        </div>
      </div>

      {/* Project Modal */}
      {selectedProject && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6">
          <div
            className="absolute inset-0 bg-black/80 backdrop-blur-sm animate-fade-in"
            onClick={() => setSelectedProject(null)}
          />
          <div className="relative w-full max-w-4xl max-h-[90vh] overflow-y-auto bg-terminal-panel border border-terminal-border rounded-xl shadow-2xl flex flex-col animate-fade-in custom-scrollbar">

            {/* Modal Header */}
            <div className="sticky top-0 z-10 flex items-center justify-between p-6 border-b border-terminal-border bg-terminal-panel/95 backdrop-blur">
              <div>
                <h3 className="text-2xl font-bold text-terminal-header">{selectedProject.title}</h3>
                <div className="text-sm font-mono text-terminal-cyan mt-1 flex items-center gap-2">
                  {selectedProject.category}
                  <span className="text-terminal-border">|</span>
                  {selectedProject.date}
                </div>
              </div>
              <button
                onClick={() => setSelectedProject(null)}
                className="p-2 rounded hover:bg-terminal-bg border border-transparent hover:border-terminal-border text-terminal-body hover:text-terminal-header transition-all"
              >
                <X size={24} />
              </button>
            </div>

            {/* Modal Content */}
            <div className="p-6 md:p-8 space-y-8">

              {/* Description */}
              <div className="prose prose-invert max-w-none">
                <p className="text-terminal-body text-base md:text-lg leading-relaxed whitespace-pre-wrap">
                  {selectedProject.detailedDescription || selectedProject.description}
                </p>
              </div>

              {/* Tech Stack */}
              <div>
                <h4 className="text-sm font-bold text-terminal-header uppercase tracking-wider mb-3">System Architecture</h4>
                <div className="flex flex-wrap gap-2">
                  {selectedProject.techStack.map((tech, i) => (
                    <span key={i} className="text-xs font-mono px-3 py-1.5 rounded border bg-terminal-bg border-terminal-cyan/20 text-terminal-header">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* Gallery */}
              {selectedProject.gallery && selectedProject.gallery.length > 0 && (
                <div>
                  <h4 className="text-sm font-bold text-terminal-header uppercase tracking-wider mb-4 flex items-center gap-2">
                    <ImageIcon size={16} /> Interface Gallery
                  </h4>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {selectedProject.gallery.map((img, idx) => (
                      <div key={idx} className="group relative rounded-lg overflow-hidden border border-terminal-border aspect-video bg-terminal-bg">
                        <img
                          src={img}
                          alt={`${selectedProject.title} preview ${idx + 1}`}
                          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                          loading="lazy"
                        />
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>

            {/* Modal Footer */}
            <div className="p-6 border-t border-terminal-border bg-terminal-bg/50 flex justify-end gap-3">
              <button
                onClick={() => setSelectedProject(null)}
                className="px-4 py-2 rounded text-sm font-medium text-terminal-body hover:text-terminal-header transition-colors"
              >
                Close Protocol
              </button>
              {selectedProject.website && (
                <a
                  href={`https://${selectedProject.website}`}
                  target="_blank"
                  rel="noreferrer"
                  className="px-6 py-2 rounded bg-terminal-cyan text-white dark:text-black font-bold text-sm hover:bg-cyan-400 transition-colors flex items-center gap-2"
                >
                  Launch System <Globe size={16} />
                </a>
              )}
            </div>

          </div>
        </div>
      )}
    </section>
  );
};

const ProjectCard: React.FC<{
  project: FreelanceProject;
  onOpen: () => void
}> = ({ project, onOpen }) => {
  const isFeatured = project.featured;
  const hasGallery = project.gallery && project.gallery.length > 0;

  // Icon Selection based on category
  const getIcon = () => {
    if (project.category === Category.SAAS) return <Layout size={24} className="text-terminal-purple" />;
    if (project.category === Category.SCRAPING) return <Shield size={24} className="text-terminal-green" />;
    return <Server size={24} className="text-terminal-yellow" />;
  };

  return (
    <div className={`group bg-terminal-panel border rounded-lg p-6 flex flex-col h-full transition-all hover:-translate-y-1 relative overflow-hidden
      ${isFeatured
        ? 'md:col-span-2 border-terminal-cyan/40 hover:shadow-[0_0_20px_rgba(6,182,212,0.1)]'
        : 'border-terminal-border hover:border-terminal-cyan/30 hover:shadow-lg'
      }
    `}>
      {/* Featured Badge */}
      {isFeatured && (
        <div className="absolute top-0 right-0 bg-terminal-cyan/10 border-l border-b border-terminal-cyan/30 px-3 py-1 rounded-bl-lg">
          <span className="text-[10px] font-mono font-bold text-terminal-cyan flex items-center gap-1 uppercase tracking-wider">
            <Star size={10} className="fill-terminal-cyan" />
            {/* Flagship */}
          </span>
        </div>
      )}

      <div className="flex justify-between items-start mb-4">
        <div className={`p-3 rounded-lg ${isFeatured ? 'bg-terminal-bg border border-terminal-border' : 'bg-transparent'}`}>
          {getIcon()}
        </div>
        <div className="flex gap-3 pr-2">
          {project.website ? (
            <a href={`https://${project.website}`} target="_blank" rel="noreferrer" className="text-terminal-body hover:text-terminal-header transition-colors" title="Live Website">
              <Globe size={18} />
            </a>
          ) : (
            <span title="Confidential / Backend" className="cursor-help">
              <Lock size={16} className="text-terminal-body" />
            </span>
          )}
        </div>
      </div>

      <h3 className={`font-bold text-terminal-header mb-2 group-hover:text-terminal-cyan transition-colors ${isFeatured ? 'text-2xl' : 'text-lg'}`}>
        {project.title}
      </h3>

      <div className="text-xs font-mono text-terminal-body/80 mb-4 flex items-center gap-2">
        {project.date}
        <span className="w-1 h-1 rounded-full bg-terminal-body"></span>
        <span className="text-terminal-border uppercase">{project.category}</span>
      </div>

      <p className={`text-terminal-body mb-6 flex-grow ${isFeatured ? 'text-base leading-relaxed max-w-2xl' : 'text-sm'}`}>
        {project.description}
      </p>

      {/* Action Area */}
      <div className="mt-auto flex flex-col gap-4">
        <div className="flex flex-wrap gap-2">
          {project.techStack.map((tech, i) => (
            <span key={i} className={`text-xs font-mono px-2 py-1 rounded border 
              ${isFeatured
                ? 'bg-terminal-bg border-terminal-cyan/20 text-terminal-header'
                : 'bg-terminal-bg/50 border-terminal-border text-terminal-body group-hover:text-terminal-header group-hover:border-terminal-cyan/30 transition-colors'
              }`}>
              {tech}
            </span>
          ))}
        </div>

        {/* Gallery / Details Trigger */}
        {(hasGallery || project.detailedDescription) && (
          <button
            onClick={onOpen}
            className="w-full mt-2 py-2 border border-terminal-border rounded text-sm text-terminal-body hover:text-terminal-cyan hover:border-terminal-cyan transition-colors flex items-center justify-center gap-2 group/btn"
          >
            {hasGallery ? <ImageIcon size={14} /> : <Eye size={14} />}
            <span>{hasGallery ? 'View Gallery & Details' : 'View System Details'}</span>
          </button>
        )}
      </div>
    </div>
  );
};

export default Projects;