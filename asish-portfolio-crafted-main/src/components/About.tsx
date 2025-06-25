
import { Calendar, MapPin, Briefcase } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

const About = () => {
  return (
    <section id="about" className="py-20 px-4 bg-gray-800/50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-4">About Me</h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            I'm Asish, a passionate Computer Science student with a strong focus on cybersecurity and web development.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <Card className="bg-gray-900 border-gray-700 hover:border-red-500 transition-all duration-300">
            <CardContent className="p-6">
              <Calendar className="text-red-500 mb-4" size={48} />
              <h3 className="text-xl font-bold mb-2 text-white">Education</h3>
              <p className="text-gray-400">
                B-Tech in Computer Science<br />
                Gandhi Institute for Technological Advancement<br />
                Graduating 2026
              </p>
            </CardContent>
          </Card>

          <Card className="bg-gray-900 border-gray-700 hover:border-red-500 transition-all duration-300">
            <CardContent className="p-6">
              <Briefcase className="text-red-500 mb-4" size={48} />
              <h3 className="text-xl font-bold mb-2 text-white">Experience</h3>
              <p className="text-gray-400">
                Internship at CTTC<br />
                AI & Machine Learning<br />
                June 2024 – July 2024
              </p>
            </CardContent>
          </Card>

          <Card className="bg-gray-900 border-gray-700 hover:border-red-500 transition-all duration-300">
            <CardContent className="p-6">
              <MapPin className="text-red-500 mb-4" size={48} />
              <h3 className="text-xl font-bold mb-2 text-white">Location</h3>
              <p className="text-gray-400">
                Bhubaneswar<br />
                Odisha, India<br />
                Available for remote work
              </p>
            </CardContent>
          </Card>
        </div>

        <div className="mt-12 text-center">
          <p className="text-lg text-gray-300 max-w-4xl mx-auto leading-relaxed">
            My journey in technology began with curiosity about how digital systems work and evolved into a passion 
            for creating secure, innovative solutions. During my internship at CTTC, I focused on learning and 
            analyzing AI and ML technologies, which broadened my understanding of modern tech applications. 
            I'm particularly interested in the intersection of cybersecurity and web development, where I can 
            create robust applications that prioritize user security and experience.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
