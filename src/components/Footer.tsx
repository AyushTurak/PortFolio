import { Heart, Github, Linkedin, Mail, Twitter } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    { icon: Github, url: 'https://github.com/AyushTurak', label: 'GitHub' },
    { icon: Linkedin, url: 'https://www.linkedin.com/in/ayush-turak', label: 'LinkedIn' },
    // { icon: Twitter, url: 'https://twitter.com', label: 'Twitter' }, // replace if you have a specific handle
    { icon: Mail, url: 'mailto:turakayush@gmail.com', label: 'Email' },
  ];

  const quickLinks = [
    { label: 'Home', id: 'home' },
    { label: 'About', id: 'about' },
    { label: 'Projects', id: 'projects' },
    { label: 'Skills', id: 'skills' },
    { label: 'Contact', id: 'contact' },
  ];

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          <div>
            <h3 className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent mb-4">
              Ayush Turak
            </h3>
            <p className="text-gray-400 leading-relaxed mb-4">
              Android Application Developer — Kotlin, Jetpack Compose, Retrofit, Room. I build production-ready mobile apps and enjoy open-source collaboration.
            </p>
            <div className="flex gap-4">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.label}
                  className="p-2 bg-gray-800 rounded-lg hover:bg-gradient-to-r hover:from-blue-600 hover:to-cyan-600 transition-all duration-300 hover:scale-110"
                >
                  <social.icon size={20} />
                </a>
              ))}
            </div>
          </div>

          <div>
            <h4 className="text-lg font-bold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <button
                    onClick={() => scrollToSection(link.id)}
                    className="text-gray-400 hover:text-blue-400 transition-colors"
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-bold mb-4">Get In Touch</h4>
            <ul className="space-y-3 text-gray-400">
              <li>
                <a
                  href="mailto:turakayush@gmail.com"
                  className="hover:text-blue-400 transition-colors"
                >
                  turakayush@gmail.com
                </a>
              </li>
              <li>
                <a
                  href="tel:+917758977625"
                  className="hover:text-blue-400 transition-colors"
                >
                  +91-7758977625
                </a>
              </li>
              <li>Nagpur, Maharashtra, India</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8 flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-gray-400 text-sm text-center sm:text-left">
            {currentYear} Ayush Turak. All rights reserved.
          </p>
          <p className="text-gray-400 text-sm flex items-center gap-2">
            Built with <Heart size={16} className="text-red-500 fill-current" /> using
            React & Tailwind CSS
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
