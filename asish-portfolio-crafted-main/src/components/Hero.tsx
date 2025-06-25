
import { ChevronDown, Download } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Hero = () => {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center px-4 pt-16">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <div className="space-y-6 animate-fade-in">
          <h1 className="text-5xl lg:text-7xl font-bold">
            <span className="text-red-500">Hello,</span> I'm Asish
          </h1>
          <h2 className="text-2xl lg:text-3xl text-gray-300 font-light">
            Cybersecurity & Web Development
            <span className="block text-red-500">Enthusiast</span>
          </h2>
          <p className="text-lg text-gray-400 max-w-xl">
            Dedicated Bachelor's of Computer Science student specializing in cybersecurity and web development, 
            eager to contribute meaningfully to the tech industry.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Button className="bg-red-600 hover:bg-red-700 text-white px-8 py-3 rounded-lg transition-all duration-300 hover:scale-105">
              <a href="#contact">Let's Talk</a>
            </Button>
            <Button variant="outline" className="border-gray-600 text-gray-300 hover:bg-gray-800 px-8 py-3 rounded-lg transition-all duration-300 hover:scale-105">
              <Download className="mr-2 h-4 w-4" />
              Download CV
            </Button>
          </div>
        </div>
        
        <div className="flex justify-center lg:justify-end animate-scale-in">
          <div className="relative">
            <div className="w-80 h-80 lg:w-96 lg:h-96 rounded-full bg-gradient-to-br from-red-500 to-red-700 p-2">
              <img 
                src="https://cdn.corenexis.com/view/?img=d/ju11/NEoWJS.jpg" 
                alt="Asish Dhal Samanta"
                className="w-full h-full rounded-full object-cover"
              />
            </div>
            <div className="absolute -bottom-4 -right-4 bg-red-600 text-white px-4 py-2 rounded-lg font-semibold">
              B.Tech CSE
            </div>
          </div>
        </div>
      </div>
      
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <ChevronDown className="text-red-500" size={32} />
      </div>
    </section>
  );
};

export default Hero;
