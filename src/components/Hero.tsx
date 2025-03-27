
import { useEffect, useRef } from 'react';
import { Activity, DumbbellIcon, Gamepad2Icon, UtensilsIcon, ZapIcon } from 'lucide-react';

const Hero = () => {
  const imageContainerRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    const container = imageContainerRef.current;
    if (!container) return;
    
    const handleMouseMove = (e: MouseEvent) => {
      const { left, top, width, height } = container.getBoundingClientRect();
      const x = (e.clientX - left) / width - 0.5;
      const y = (e.clientY - top) / height - 0.5;
      
      const images = container.querySelectorAll('.parallax-image');
      images.forEach((image, index) => {
        const factor = (index + 1) * 5;
        (image as HTMLElement).style.transform = `translate(${x * factor}px, ${y * factor}px)`;
      });
    };
    
    container.addEventListener('mousemove', handleMouseMove);
    return () => {
      container.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return (
    <section className="relative min-h-screen flex items-center overflow-hidden bg-gradient-to-b from-white to-gray-50 pt-20">
      <div className="absolute inset-0 bg-gradient-radial from-transparent to-white/60 z-0"></div>
      
      <div ref={imageContainerRef} className="container mx-auto px-4 relative z-10 py-16 md:py-24">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="intro-animation">
            <h1 className="animate-fade-in text-5xl md:text-6xl lg:text-7xl font-bold leading-tight hero-text mb-6">
              Discover Your <span className="bg-gradient-to-r from-blue-600 to-purple-600 text-gradient">Colorful</span> Adventure
            </h1>
            
            <p className="animate-fade-in text-xl text-gray-600 mb-8 max-w-lg">
              Experience a world of vibrant activities, each with its unique color and excitement. From sports to relaxation, we have something for everyone.
            </p>

            <div className="hidden sm:flex space-x-6 mb-8 animate-fade-in">
              <div className="p-3 bg-green-100 rounded-full text-green-600">
                <Activity size={28} />
              </div>
              <div className="p-3 bg-blue-100 rounded-full text-blue-600">
                <DumbbellIcon size={28} />
              </div>
              <div className="p-3 bg-purple-100 rounded-full text-purple-600">
                <Gamepad2Icon size={28} />
              </div>
              <div className="p-3 bg-yellow-100 rounded-full text-yellow-600">
                <ZapIcon size={28} />
              </div>
              <div className="p-3 bg-orange-100 rounded-full text-orange-600">
                <UtensilsIcon size={28} />
              </div>
            </div>
            
            <div className="animate-fade-in flex flex-wrap gap-4">
              <a href="#activities" className="activity-btn bg-gradient-to-r from-blue-600 to-purple-600 text-white">
                Explore Activities
              </a>
              <a href="#booking" className="activity-btn bg-white border border-gray-200 text-gray-800 hover:border-gray-300">
                Book Now
              </a>
            </div>
          </div>
          
          <div className="relative h-[500px] hidden md:block">
            <div className="parallax-image absolute w-56 h-56 rounded-2xl shadow-xl top-0 right-0 cricket-card animate-float overflow-hidden" style={{animationDelay: '0s'}}>
              <div className="absolute inset-0 bg-green-100/50 flex items-center justify-center">
                <Activity size={48} className="text-green-600" />
                <span className="absolute bottom-4 font-medium text-green-800">Cricket</span>
              </div>
            </div>
            <div className="parallax-image absolute w-48 h-48 rounded-2xl shadow-xl top-20 left-20 football-card animate-float overflow-hidden" style={{animationDelay: '0.5s'}}>
              <div className="absolute inset-0 bg-blue-100/50 flex items-center justify-center">
                <DumbbellIcon size={40} className="text-blue-600" />
                <span className="absolute bottom-4 font-medium text-blue-800">Football</span>
              </div>
            </div>
            <div className="parallax-image absolute w-64 h-64 rounded-2xl shadow-xl bottom-0 right-20 arcade-card animate-float overflow-hidden" style={{animationDelay: '1s'}}>
              <div className="absolute inset-0 bg-red-100/50 flex items-center justify-center">
                <Gamepad2Icon size={56} className="text-red-600" />
                <span className="absolute bottom-4 font-medium text-red-800">Arcade</span>
              </div>
            </div>
            <div className="parallax-image absolute w-40 h-40 rounded-2xl shadow-xl bottom-32 left-0 trampoline-card animate-float overflow-hidden" style={{animationDelay: '1.5s'}}>
              <div className="absolute inset-0 bg-yellow-100/50 flex items-center justify-center">
                <ZapIcon size={36} className="text-yellow-600" />
                <span className="absolute bottom-4 font-medium text-yellow-800">Trampoline</span>
              </div>
            </div>
          </div>
        </div>
        
        <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce-subtle">
          <a href="#activities" className="block text-gray-400 hover:text-gray-700 transition-colors">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
            </svg>
          </a>
        </div>
      </div>
      
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-white to-transparent"></div>
    </section>
  );
};

export default Hero;
