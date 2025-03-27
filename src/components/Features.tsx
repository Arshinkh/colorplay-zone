
import { useRef, useEffect, useState } from 'react';
import { cn } from '@/lib/utils';

const features = [
  {
    title: "Color-Coded Activities",
    description: "Our unique color system helps you easily identify and remember each activity area.",
    colorClass: "from-blue-500 to-purple-600"
  },
  {
    title: "Real-Time Booking",
    description: "Book your favorite activities in real-time and get instant confirmation.",
    colorClass: "from-green-500 to-teal-500"
  },
  {
    title: "Professional Equipment",
    description: "All our activities come with top-quality, professionally maintained equipment.",
    colorClass: "from-orange-500 to-red-500"
  },
  {
    title: "Expert Instructors",
    description: "Get guidance from our experienced instructors who are passionate about their activities.",
    colorClass: "from-purple-500 to-pink-500"
  }
];

const Features = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);
  
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.1 }
    );
    
    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }
    
    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);
  
  return (
    <section ref={sectionRef} id="features" className="py-20 md:py-32 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="section-title">Why Choose Us</h2>
          <p className="section-subtitle">
            Experience the difference with our carefully designed features that enhance your enjoyment
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div 
              key={index}
              className={cn(
                "glass-card rounded-2xl p-8 text-center transition-all duration-500",
                isVisible ? "animate-slide-up opacity-100" : "opacity-0 translate-y-10",
              )}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className={`w-16 h-16 mx-auto mb-6 rounded-2xl bg-gradient-to-br ${feature.colorClass} shadow-lg`}></div>
              <h3 className="text-xl font-bold mb-3 text-gray-900">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
