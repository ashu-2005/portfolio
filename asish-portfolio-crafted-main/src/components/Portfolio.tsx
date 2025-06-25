
import { ExternalLink, Github } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

const Portfolio = () => {
  const projects = [
    {
      title: 'Movie Recommendation System',
      description: 'A Python-based website that recommends movies based on user searches using machine learning algorithms.',
      technologies: ['Python', 'Machine Learning', 'Flask', 'Pandas', 'Scikit-learn'],
      features: [
        'Content-based filtering algorithm',
        'User-friendly search interface',
        'Personalized recommendations',
        'Movie database integration'
      ],
      github: '#',
      demo: '#'
    },
    {
      title: 'Facial Recognition Technology',
      description: 'An internship project using deep learning, OpenCV, and Python for face detection and identification.',
      technologies: ['Python', 'OpenCV', 'Deep Learning', 'TensorFlow', 'Computer Vision'],
      features: [
        'Real-time face detection',
        'Face recognition accuracy optimization',
        'Multiple face tracking',
        'Security application integration'
      ],
      github: '#',
      demo: '#'
    },
    {
      title: 'E-commerce Website',
      description: 'A full-stack e-commerce platform with enhanced user experience, secure login, and real-time interaction.',
      technologies: ['HTML', 'CSS', 'JavaScript', 'PHP', 'MySQL'],
      features: [
        'Secure user authentication',
        'Shopping cart functionality',
        'Payment gateway integration',
        'Admin dashboard'
      ],
      github: '#',
      demo: '#'
    }
  ];

  return (
    <section id="portfolio" className="py-20 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-4">Portfolio</h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Here are some of my key projects that showcase my skills in web development, machine learning, and cybersecurity.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <Card key={index} className="bg-gray-900 border-gray-700 hover:border-red-500 transition-all duration-300 group">
              <CardContent className="p-6">
                <h3 className="text-xl font-bold text-white mb-3 group-hover:text-red-500 transition-colors duration-300">
                  {project.title}
                </h3>
                
                <p className="text-gray-400 mb-4 leading-relaxed">
                  {project.description}
                </p>
                
                <div className="mb-4">
                  <h4 className="text-sm font-semibold text-red-500 mb-2">Technologies:</h4>
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech, techIndex) => (
                      <span key={techIndex} className="px-2 py-1 bg-gray-800 text-gray-300 text-xs rounded">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
                
                <div className="mb-6">
                  <h4 className="text-sm font-semibold text-red-500 mb-2">Key Features:</h4>
                  <ul className="space-y-1">
                    {project.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center text-gray-400 text-sm">
                        <div className="w-1.5 h-1.5 bg-red-500 rounded-full mr-2"></div>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
                
                <div className="flex gap-3">
                  <Button 
                    variant="outline" 
                    size="sm" 
                    className="border-gray-600 text-gray-300 hover:bg-gray-800 flex-1"
                  >
                    <Github className="mr-2 h-4 w-4" />
                    Code
                  </Button>
                  <Button 
                    size="sm" 
                    className="bg-red-600 hover:bg-red-700 text-white flex-1"
                  >
                    <ExternalLink className="mr-2 h-4 w-4" />
                    Demo
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
