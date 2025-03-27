
import { useState, useRef, useEffect } from 'react';
import { cn } from "@/lib/utils";

interface ActivityCardProps {
  title: string;
  description: string;
  color: string;
  className?: string;
}

const ActivityCard = ({ title, description, color, className }: ActivityCardProps) => {
  const [isInView, setIsInView] = useState(false);
  const cardRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true);
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.2 }
    );
    
    if (cardRef.current) {
      observer.observe(cardRef.current);
    }
    
    return () => {
      if (cardRef.current) {
        observer.unobserve(cardRef.current);
      }
    };
  }, []);
  
  return (
    <div 
      ref={cardRef}
      className={cn(
        "activity-card p-8 md:p-10 glass-card",
        isInView ? "animate-scale-in" : "opacity-0",
        className
      )}
    >
      <h3 className="text-2xl md:text-3xl font-bold mb-4 text-gray-900">{title}</h3>
      <p className="text-gray-600 mb-6">{description}</p>
      <a href="#booking" className={`activity-btn ${color}`}>
        Book Now
      </a>
    </div>
  );
};

export default ActivityCard;
