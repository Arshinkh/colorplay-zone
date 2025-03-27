
import { useState } from 'react';
import { cn } from '@/lib/utils';

const activities = [
  { id: 'cricket', name: 'Cricket', color: 'bg-activity-cricket', textColor: 'text-white' },
  { id: 'football', name: 'Football', color: 'bg-activity-football', textColor: 'text-white' },
  { id: 'pickleball', name: 'Pickleball', color: 'bg-activity-pickleball', textColor: 'text-white' },
  { id: 'arcade', name: 'Arcade Games', color: 'bg-activity-arcade', textColor: 'text-white' },
  { id: 'steam', name: 'Steam Bath', color: 'bg-activity-steam', textColor: 'text-gray-800' },
  { id: 'food', name: 'Food Court', color: 'bg-activity-food', textColor: 'text-white' },
  { id: 'trampoline', name: 'Trampoline', color: 'bg-activity-trampoline', textColor: 'text-gray-800' },
  { id: 'turf', name: 'Turf', color: 'bg-activity-turf', textColor: 'text-white' }
];

const timeSlots = [
  '9:00 AM', '10:00 AM', '11:00 AM', '12:00 PM', 
  '1:00 PM', '2:00 PM', '3:00 PM', '4:00 PM', 
  '5:00 PM', '6:00 PM', '7:00 PM', '8:00 PM'
];

const Booking = () => {
  const [selectedActivity, setSelectedActivity] = useState('');
  const [selectedDate, setSelectedDate] = useState('');
  const [selectedTime, setSelectedTime] = useState('');
  const [persons, setPersons] = useState(1);
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // In a real app, this would submit the booking data to a server
    console.log({
      activity: selectedActivity,
      date: selectedDate,
      time: selectedTime,
      persons
    });
    
    // Show success message or redirect
    alert('Booking submitted successfully!');
  };
  
  return (
    <section id="booking" className="py-20 md:py-32 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="section-title">Book Your Activity</h2>
          <p className="section-subtitle">
            Select your favorite activity, choose a date and time, and get ready for an amazing experience
          </p>
        </div>
        
        <div className="max-w-4xl mx-auto">
          <div className="glass-card rounded-2xl p-8 md:p-10">
            <form onSubmit={handleSubmit} className="space-y-8">
              <div>
                <label className="block text-lg font-medium text-gray-700 mb-4">
                  Select Activity
                </label>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                  {activities.map((activity) => (
                    <button
                      key={activity.id}
                      type="button"
                      onClick={() => setSelectedActivity(activity.id)}
                      className={cn(
                        "p-4 rounded-xl transition-all duration-300 flex items-center justify-center",
                        "border-2 hover:shadow-md transform hover:scale-105",
                        selectedActivity === activity.id
                          ? `${activity.color} ${activity.textColor} border-transparent`
                          : "bg-white border-gray-200 text-gray-700"
                      )}
                    >
                      {activity.name}
                    </button>
                  ))}
                </div>
              </div>
              
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="date" className="block text-lg font-medium text-gray-700 mb-2">
                    Select Date
                  </label>
                  <input
                    type="date"
                    id="date"
                    value={selectedDate}
                    onChange={(e) => setSelectedDate(e.target.value)}
                    className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    required
                  />
                </div>
                
                <div>
                  <label htmlFor="time" className="block text-lg font-medium text-gray-700 mb-2">
                    Select Time
                  </label>
                  <select
                    id="time"
                    value={selectedTime}
                    onChange={(e) => setSelectedTime(e.target.value)}
                    className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    required
                  >
                    <option value="">Choose a time slot</option>
                    {timeSlots.map((time) => (
                      <option key={time} value={time}>
                        {time}
                      </option>
                    ))}
                  </select>
                </div>
              </div>
              
              <div>
                <label htmlFor="persons" className="block text-lg font-medium text-gray-700 mb-2">
                  Number of Persons
                </label>
                <input
                  type="number"
                  id="persons"
                  min="1"
                  max="20"
                  value={persons}
                  onChange={(e) => setPersons(parseInt(e.target.value))}
                  className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
              </div>
              
              <div className="pt-4">
                <button
                  type="submit"
                  className={cn(
                    "w-full py-4 rounded-xl font-medium text-white text-lg transition-all duration-300",
                    "transform hover:scale-[1.02] shadow-lg",
                    selectedActivity 
                      ? `bg-activity-${selectedActivity}`
                      : "bg-gray-400",
                    (selectedActivity === 'steam' || selectedActivity === 'trampoline') && "text-gray-800"
                  )}
                  disabled={!selectedActivity || !selectedDate || !selectedTime}
                >
                  Book Now
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Booking;
