
import { Code, Database, Shield, Monitor, Server, Terminal } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

const Skills = () => {
  const skillCategories = [
    {
      icon: Code,
      title: 'Web Development',
      skills: ['HTML', 'CSS', 'JavaScript', 'PHP', 'Fullstack'],
      color: 'text-blue-500'
    },
    {
      icon: Database,
      title: 'Database',
      skills: ['MySQL', 'Database Design', 'Query Optimization'],
      color: 'text-green-500'
    },
    {
      icon: Terminal,
      title: 'Programming Languages',
      skills: ['Java', 'C', 'Python', 'JavaScript'],
      color: 'text-yellow-500'
    },
    {
      icon: Monitor,
      title: 'Operating Systems',
      skills: ['Windows', 'Linux', 'System Administration'],
      color: 'text-purple-500'
    },
    {
      icon: Shield,
      title: 'Cybersecurity',
      skills: ['Security Analysis', 'Vulnerability Assessment', 'Risk Management'],
      color: 'text-red-500'
    },
    {
      icon: Server,
      title: 'AI & Machine Learning',
      skills: ['Machine Learning', 'Deep Learning', 'Data Analysis'],
      color: 'text-indigo-500'
    }
  ];

  return (
    <section id="skills" className="py-20 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-4">Skills & Technologies</h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Here are the technologies and skills I've developed throughout my academic journey and practical experience.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillCategories.map((category, index) => (
            <Card 
              key={index} 
              className="bg-gray-900 border-gray-700 hover:border-red-500 transition-all duration-300 hover:scale-105"
            >
              <CardContent className="p-6">
                <div className="flex items-center mb-4">
                  <category.icon className={`${category.color} mr-3`} size={32} />
                  <h3 className="text-xl font-bold text-white">{category.title}</h3>
                </div>
                <div className="space-y-2">
                  {category.skills.map((skill, skillIndex) => (
                    <div key={skillIndex} className="flex items-center">
                      <div className={`w-2 h-2 rounded-full ${category.color.replace('text-', 'bg-')} mr-3`}></div>
                      <span className="text-gray-300">{skill}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
