import { Code, Palette, Zap, Users } from 'lucide-react';

const About = () => {
  const highlights = [
    {
      icon: Code,
      title: 'Android Development',
      description: 'Kotlin, Jetpack Compose, Retrofit, Room & WorkManager — building production-ready mobile apps.',
    },
    {
      icon: Palette,
      title: 'UI & Design',
      description: 'Creating responsive, accessible, and polished interfaces using modern design patterns.',
    },
    {
      icon: Zap,
      title: 'Backend & Performance',
      description: 'Experience with Spring Boot + MySQL backends and performance-focused mobile engineering.',
    },
    {
      icon: Users,
      title: 'Collaboration',
      description: 'Internship experience contributing to Novi AI at Culturevo and working in team-driven projects.',
    },
  ];

  return (
    <section id="about" className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4">
            About Me
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-blue-600 to-cyan-600 mx-auto rounded-full"></div>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <div className="bg-gradient-to-br from-blue-500 to-cyan-500 rounded-2xl p-8 shadow-2xl">
              <div className="bg-white rounded-xl p-8 h-full">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">
                  Ayush Turak — Android Developer
                </h3>
                <p className="text-gray-600 leading-relaxed mb-4">
                  I'm an Android Application Developer and a Computer Science student at
                  Yeshwantrao Chavan College of Engineering, Nagpur. I build mobile apps
                  using Kotlin and Jetpack Compose, focusing on clean, maintainable code.
                </p>
                <p className="text-gray-600 leading-relaxed mb-4">
                  I completed an internship at Culturevo where I worked on Novi AI,
                  implemented production-ready features, and solved real-world problems.
                  My projects include a chat app, an automated pill dispenser prototype,
                  and a Personal Finance Manager (Spring Boot + React + MySQL).
                </p>
                <p className="text-gray-600 leading-relaxed">
                  I enjoy contributing to open source, learning new technologies, and
                  preparing for technical interviews. Find my work on GitHub (AyushTurak)
                  or reach me at turakayush@gmail.com.
                </p>
              </div>
            </div>
          </div>

          <div className="grid sm:grid-cols-2 gap-6">
            {highlights.map((item, index) => (
              <div
                key={index}
                className="bg-gradient-to-br from-slate-50 to-slate-100 rounded-xl p-6 shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border border-gray-100"
              >
                <div className="w-12 h-12 bg-gradient-to-br from-blue-600 to-cyan-600 rounded-lg flex items-center justify-center mb-4 shadow-lg">
                  <item.icon className="text-white" size={24} />
                </div>
                <h4 className="text-xl font-bold text-gray-900 mb-2">
                  {item.title}
                </h4>
                <p className="text-gray-600 text-sm leading-relaxed">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
