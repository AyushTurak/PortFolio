const Skills = () => {
  const skillCategories = [
    {
      category: 'Mobile / Android',
      skills: [
        { name: 'Kotlin', level: 95 },
        { name: 'Jetpack Compose', level: 92 },
        { name: 'Android SDK', level: 94 },
        { name: 'Retrofit (Networking)', level: 90 },
        { name: 'Room (Persistence)', level: 88 },
        { name: 'WorkManager (Background)', level: 85 },
      ],
    },
    {
      category: 'Backend & Full-Stack',
      skills: [
        { name: 'Java', level: 90 },
        { name: 'Spring Boot', level: 88 },
        { name: 'MySQL / SQL', level: 86 },
        { name: 'REST APIs', level: 88 },
        { name: 'React', level: 84 },
        { name: 'JWT Auth', level: 80 },
      ],
    },
    {
      category: 'Tools, ML & Others',
      skills: [
        { name: 'Git', level: 93 },
        { name: 'Docker', level: 78 },
        { name: 'CI/CD', level: 80 },
        { name: 'Python', level: 75 },
        { name: 'TensorFlow / ML', level: 70 },
        { name: 'Figma (UI)', level: 82 },
      ],
    },
  ];

  return (
    <section id="skills" className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4">
            Skills & Expertise
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-blue-600 to-cyan-600 mx-auto rounded-full mb-4"></div>
          <p className="text-gray-600 max-w-2xl mx-auto">
            A comprehensive overview of my technical skills and proficiency levels
            across mobile, backend, and tooling — honed through projects, internships,
            and coursework.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {skillCategories.map((category, index) => (
            <div
              key={index}
              className="bg-gradient-to-br from-slate-50 to-slate-100 rounded-xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100"
            >
              <h3 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
                <span className="w-2 h-8 bg-gradient-to-b from-blue-600 to-cyan-600 rounded-full mr-3"></span>
                {category.category}
              </h3>

              <div className="space-y-5">
                {category.skills.map((skill, skillIndex) => (
                  <div key={skillIndex}>
                    <div className="flex justify-between mb-2">
                      <span className="text-sm font-medium text-gray-700">
                        {skill.name}
                      </span>
                      <span className="text-sm font-bold text-blue-600">
                        {skill.level}%
                      </span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2.5 overflow-hidden">
                      <div
                        className="h-full bg-gradient-to-r from-blue-600 to-cyan-600 rounded-full transition-all duration-1000 ease-out"
                        style={{
                          width: `${skill.level}%`,
                        }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 bg-gradient-to-r from-blue-600 to-cyan-600 rounded-2xl p-8 sm:p-12 shadow-2xl">
          <div className="text-center text-white">
            <h3 className="text-3xl font-bold mb-4">Always Learning</h3>
            <p className="text-blue-50 max-w-2xl mx-auto leading-relaxed">
              Technology evolves rapidly — I keep learning new frameworks, tools, and
              best practices to deliver reliable, performant, and user-friendly apps.
              Currently exploring Kotlin Multiplatform, advanced Jetpack libraries, and
              practical ML workflows for mobile.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
