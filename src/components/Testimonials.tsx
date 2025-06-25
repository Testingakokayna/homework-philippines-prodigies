
import { useState, useEffect } from "react";

const Testimonials = () => {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);
  
  const testimonials = [
    {
      quote: "Al, Ke & Em saved my semester! Their answers were so detailed and perfect, I scored 100% on my calculus assignment. Worth every peso!",
      name: "Maria Santos",
      school: "UP Diliman",
      image: "https://images.unsplash.com/photo-1494790108755-2616b612b47c?w=100&h=100&fit=crop&crop=face"
    },
    {
      quote: "The speed is incredible! I submitted my chemistry homework at 2 AM and had the perfect solution by 4 AM. These guys never sleep!",
      name: "Juan Dela Cruz", 
      school: "Ateneo de Manila",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop&crop=face"
    },
    {
      quote: "Finally got my ₱1 back after scoring perfect on my thesis! The quality is unmatched. Al, Ke & Em are true homework masters.",
      name: "Grace Reyes",
      school: "La Salle Manila", 
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop&crop=face"
    }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="py-20 bg-gradient-to-br from-blue-600 to-blue-800 text-white">
      <div className="max-w-4xl mx-auto px-4 text-center">
        <h2 className="text-4xl md:text-5xl font-bold mb-16">
          What Students Say
        </h2>
        
        <div className="relative min-h-[300px] flex items-center justify-center">
          {testimonials.map((testimonial, index) => (
            <div 
              key={index}
              className={`absolute inset-0 transition-all duration-500 ${
                index === currentTestimonial 
                  ? 'opacity-100 transform scale-100' 
                  : 'opacity-0 transform scale-95'
              }`}
            >
              <div className="bg-white/10 backdrop-blur-lg rounded-3xl p-8 md:p-12 border border-white/20">
                <blockquote className="text-xl md:text-2xl leading-relaxed mb-8">
                  "{testimonial.quote}"
                </blockquote>
                <div className="flex items-center justify-center space-x-4">
                  <img 
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="w-16 h-16 rounded-full border-2 border-white/30"
                  />
                  <div className="text-left">
                    <div className="font-semibold text-lg">{testimonial.name}</div>
                    <div className="opacity-75">{testimonial.school}</div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <div className="flex justify-center space-x-2 mt-8">
          {testimonials.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentTestimonial(index)}
              className={`w-3 h-3 rounded-full transition-all ${
                index === currentTestimonial 
                  ? 'bg-white' 
                  : 'bg-white/40 hover:bg-white/60'
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
