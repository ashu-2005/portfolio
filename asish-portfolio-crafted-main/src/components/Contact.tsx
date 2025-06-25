
import { Mail, Phone, Github, Linkedin, Send } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { useState } from 'react';
import { useToast } from '@/hooks/use-toast';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Message Sent!",
      description: "Thank you for your message. I'll get back to you soon!",
    });
    setFormData({ name: '', email: '', message: '' });
  };

  const contactInfo = [
    {
      icon: Mail,
      label: 'Email',
      value: 'asishdhalsamanta@gmail.com',
      link: 'mailto:asishdhalsamanta@gmail.com'
    },
    {
      icon: Phone,
      label: 'Phone',
      value: '+91 6371276821',
      link: 'tel:+916371276821'
    },
    {
      icon: Github,
      label: 'GitHub',
      value: 'ashu-2005',
      link: 'https://github.com/ashu-2005'
    },
    {
      icon: Linkedin,
      label: 'LinkedIn',
      value: 'Asish Dhal Samanta',
      link: 'https://linkedin.com/in/asish-dhal-samanta'
    }
  ];

  return (
    <section id="contact" className="py-20 px-4 bg-gray-800/50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-4">Get In Touch</h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Have a project in mind or want to collaborate? I'd love to hear from you!
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div className="space-y-6">
            <h3 className="text-2xl font-bold text-white mb-6">Contact Information</h3>
            {contactInfo.map((info, index) => (
              <Card key={index} className="bg-gray-900 border-gray-700 hover:border-red-500 transition-all duration-300">
                <CardContent className="p-4">
                  <a 
                    href={info.link}
                    className="flex items-center space-x-4 text-gray-300 hover:text-red-500 transition-colors duration-300"
                    target={info.link.startsWith('http') ? '_blank' : '_self'}
                    rel={info.link.startsWith('http') ? 'noopener noreferrer' : ''}
                  >
                    <div className="p-3 bg-red-600/20 rounded-lg">
                      <info.icon className="text-red-500" size={24} />
                    </div>
                    <div>
                      <p className="font-semibold">{info.label}</p>
                      <p className="text-sm">{info.value}</p>
                    </div>
                  </a>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Contact Form */}
          <Card className="bg-gray-900 border-gray-700">
            <CardContent className="p-8">
              <h3 className="text-2xl font-bold text-white mb-6">Send a Message</h3>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <Input
                    placeholder="Your Name"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="bg-gray-800 border-gray-600 text-white placeholder-gray-400 focus:border-red-500"
                    required
                  />
                </div>
                <div>
                  <Input
                    type="email"
                    placeholder="Your Email"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="bg-gray-800 border-gray-600 text-white placeholder-gray-400 focus:border-red-500"
                    required
                  />
                </div>
                <div>
                  <Textarea
                    placeholder="Your Message"
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="bg-gray-800 border-gray-600 text-white placeholder-gray-400 focus:border-red-500 min-h-[120px]"
                    required
                  />
                </div>
                <Button 
                  type="submit"
                  className="w-full bg-red-600 hover:bg-red-700 text-white py-3 transition-all duration-300 hover:scale-105"
                >
                  <Send className="mr-2 h-4 w-4" />
                  Send Message
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Contact;
