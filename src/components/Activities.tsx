
import { useRef } from 'react';
import ActivityCard from './ActivityCard';

const Activities = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  
  const activities = [
    {
      title: "Cricket",
      description: "Step onto the pitch, swing the bat, and feel the thrill of cricket! Book your match now and unleash your inner champion.",
      colorClass: "cricket-btn",
      cardClass: "cricket-card"
    },
    {
      title: "Football",
      description: "Kick off your passion! Whether it's a friendly match or intense practice, our football fields are ready for action. Book your slot today!",
      colorClass: "football-btn",
      cardClass: "football-card"
    },
    {
      title: "Pickleball",
      description: "A game for all ages! Try pickleball on our specially designed courts and experience a blend of tennis, badminton, and ping pong. Book now!",
      colorClass: "pickleball-btn",
      cardClass: "pickleball-card"
    },
    {
      title: "Arcade Games",
      description: "Enter the world of endless fun! From classic pinball to modern virtual reality, our arcade games will keep you entertained for hours. Start playing now!",
      colorClass: "arcade-btn",
      cardClass: "arcade-card"
    },
    {
      title: "Steam Bath",
      description: "Relax and unwind in our rejuvenating steam baths. Detox, recharge, and feel your stress melt away. Book a relaxing session today!",
      colorClass: "steam-btn",
      cardClass: "steam-card"
    },
    {
      title: "Food Court",
      description: "Tasty treats, delicious meals, and snacks await you! Enjoy your favorite dishes while you recharge between activities. Dive into flavor!",
      colorClass: "food-btn",
      cardClass: "food-card"
    },
    {
      title: "Trampoline",
      description: "Bounce to your heart's content! Experience gravity-defying jumps and endless fun on our trampolines. Book your session now and jump into fun!",
      colorClass: "trampoline-btn",
      cardClass: "trampoline-card"
    },
    {
      title: "Turf",
      description: "Feel the grass beneath your feet and take your game to the next level. Our turf fields are perfect for soccer, rugby, and more. Book your spot today!",
      colorClass: "turf-btn",
      cardClass: "turf-card"
    }
  ];

  return (
    <section id="activities" ref={sectionRef} className="py-20 md:py-32 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="section-title">Vibrant Activities</h2>
          <p className="section-subtitle">
            Dive into our colorful world of activities, each designed to give you a unique experience
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 md:gap-8">
          {activities.map((activity, index) => (
            <ActivityCard
              key={index}
              title={activity.title}
              description={activity.description}
              color={activity.colorClass}
              className={activity.cardClass}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Activities;
