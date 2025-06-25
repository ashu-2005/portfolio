
import { ShoppingCart, Palette, Lock, Zap } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

const Services = () => {
  const services = [
    {
      icon: ShoppingCart,
      title: 'E-commerce Development',
      description: 'Full-stack e-commerce websites with secure payment integration and user-friendly interfaces.',
      features: ['Custom Shopping Cart', 'Payment Gateway Integration', 'Inventory Management', 'Admin Dashboard']
    },
    {
      icon: Palette,
      title: 'UI/UX Design',
      description: 'Creating intuitive and visually appealing user interfaces that enhance user experience.',
      features: ['Responsive Design', 'User Research', 'Wireframing', 'Prototyping']
    },
    {
      icon: Lock,
      title: 'Security Implementation',
      description: 'Implementing robust security measures to protect user data and ensure safe transactions.',
      features: ['Data Encryption', 'Secure Authentication', 'Vulnerability Testing', 'Security Audits']
    },
    {
      icon: Zap,
      title: 'Performance Optimization',
      description: 'Optimizing websites for speed, performance, and better user engagement.',
      features: ['Code Optimization', 'Database Tuning', 'Caching Strategies', 'Load Testing']
    }
  ];

  return (
    <section id="services" className="py-20 px-4 bg-gray-800/50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-4">My Services</h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Specialized in full-stack e-commerce development with a focus on security and user experience.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {services.map((service, index) => (
            <Card key={index} className="bg-gray-900 border-gray-700 hover:border-red-500 transition-all duration-300 group">
              <CardContent className="p-8">
                <div className="flex items-center mb-6">
                  <div className="p-3 bg-red-600/20 rounded-lg mr-4 group-hover:bg-red-600/30 transition-colors duration-300">
                    <service.icon className="text-red-500" size={32} />
                  </div>
                  <h3 className="text-2xl font-bold text-white">{service.title}</h3>
                </div>
                
                <p className="text-gray-400 mb-6 leading-relaxed">
                  {service.description}
                </p>
                
                <ul className="space-y-3">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-gray-300">
                      <div className="w-2 h-2 bg-red-500 rounded-full mr-3"></div>
                      {feature}
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
