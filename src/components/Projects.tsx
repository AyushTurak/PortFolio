import { ExternalLink, Github } from 'lucide-react';

const Projects = () => {
  const projects = [
    {
      title: 'Chat App (Novi-style)',
      description:
        'Android chat application built with Kotlin & Jetpack Compose. Features message persistence with Room, network calls via Retrofit, and sync logic for consistent chat state across devices.',
      image:
        'https://images.pexels.com/photos/3184309/pexels-photo-3184309.jpeg?auto=compress&cs=tinysrgb&w=800',
      tags: ['Kotlin', 'Jetpack Compose', 'Retrofit', 'Room'],
      liveUrl: '#',
      githubUrl: 'https://github.com/AyushTurak/ChatApp',
    },
    {
      title: 'SmartStudy',
      description:
        'A study-assistant Android app (notes + quizzes + study schedule). Focused on responsive Jetpack Compose UI, local persistence, and offline-first UX for students.',
      image:
        'https://images.pexels.com/photos/4145191/pexels-photo-4145191.jpeg?auto=compress&cs=tinysrgb&w=800',
      tags: ['Android', 'Kotlin', 'Jetpack Compose', 'Room'],
      liveUrl: '#',
      githubUrl: 'https://github.com/AyushTurak/SmartStudy',
    },
    {
      title: 'Automated Pill Dispenser (Prototype)',
      description:
        'Android + embedded prototype for an automated pill dispenser. Includes scheduling with WorkManager, local DB with Room, and a companion mobile UI to manage doses and reminders. Patent filed for the design and automation flow.',
      image:
        'https://images.pexels.com/photos/technology-iphone-desk-business-193003.jpeg?auto=compress&cs=tinysrgb&w=800',
      tags: ['Kotlin', 'WorkManager', 'IoT', 'Android'],
      liveUrl: '#',
      githubUrl: 'https://github.com/AyushTurak', // repo/link available on profile
    },
    {
      title: 'Personal Finance Manager',
      description:
        'Full-stack finance tracker: Spring Boot backend + React frontend, MySQL storage, JWT auth, category analytics, CSV/PDF export and monthly reports with charts.',
      image:
        'https://images.pexels.com/photos/4386373/pexels-photo-4386373.jpeg?auto=compress&cs=tinysrgb&w=800',
      tags: ['Spring Boot', 'React', 'MySQL', 'JWT'],
      liveUrl: '#',
      githubUrl: 'https://github.com/AyushTurak', // project available in my repos/profile
    },
    {
      title: 'Portfolio Website / UI Experiments',
      description:
        'This portfolio (React + Tailwind) and several UI experiments demonstrating polished animations, responsive layouts, and accessible components.',
      image:
        'https://images.pexels.com/photos/574072/pexels-photo-574072.jpeg?auto=compress&cs=tinysrgb&w=800',
      tags: ['React', 'Tailwind CSS', 'Accessibility', 'Animations'],
      liveUrl: '#',
      githubUrl: 'https://github.com/AyushTurak',
    },
    {
      title: 'Neural Networks Lab Work',
      description:
        'Course lab experiments: perceptrons for logic gates, feedforward networks, CNN on MNIST, and experiments with scikit-learn and TensorFlow for classification tasks.',
      image:
        'https://images.pexels.com/photos/3861969/pexels-photo-3861969.jpeg?auto=compress&cs=tinysrgb&w=800',
      tags: ['Python', 'TensorFlow', 'scikit-learn', 'CNN'],
      liveUrl: '#',
      githubUrl: 'https://github.com/AyushTurak',
    },
  ];

  return (
    <section
      id="projects"
      className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-slate-50 to-slate-100"
    >
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4">
            Featured Projects
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-blue-600 to-cyan-600 mx-auto rounded-full mb-4"></div>
          <p className="text-gray-600 max-w-2xl mx-auto">
            A selection of projects that showcase my skills and passion for building
            exceptional digital experiences.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="group bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2"
            >
              <div className="relative overflow-hidden h-48">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="absolute bottom-4 left-4 right-4 flex gap-3">
                    <a
                      href={project.liveUrl}
                      className="flex-1 flex items-center justify-center gap-2 bg-white text-gray-900 px-4 py-2 rounded-lg font-medium hover:bg-gray-100 transition-colors"
                    >
                      <ExternalLink size={16} />
                      <span>Live</span>
                    </a>
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 flex items-center justify-center gap-2 bg-gray-900 text-white px-4 py-2 rounded-lg font-medium hover:bg-gray-800 transition-colors"
                    >
                      <Github size={16} />
                      <span>Code</span>
                    </a>
                  </div>
                </div>
              </div>

              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors">
                  {project.title}
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed mb-4">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag, tagIndex) => (
                    <span
                      key={tagIndex}
                      className="px-3 py-1 bg-gradient-to-r from-blue-50 to-cyan-50 text-blue-700 text-xs font-medium rounded-full border border-blue-100"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
