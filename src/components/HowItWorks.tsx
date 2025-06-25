
import { Pencil, Settings, Trophy } from "lucide-react";

const HowItWorks = () => {
  const steps = [
    {
      icon: Pencil,
      title: "Submit Your Assignment",
      description: "Upload your homework details and requirements through our secure platform."
    },
    {
      icon: Settings,
      title: "We Craft Expert Answers", 
      description: "Our team of degree-holding experts works on your assignment with precision."
    },
    {
      icon: Trophy,
      title: "Score Perfect? Get ₱1 Back!",
      description: "Achieve 100% and receive our special rebate as our confidence guarantee."
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            How It Works
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Three simple steps to academic excellence
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {steps.map((step, index) => (
            <div key={index} className="text-center group hover:transform hover:scale-105 transition-all duration-300">
              <div className="inline-flex items-center justify-center w-20 h-20 bg-blue-100 rounded-full mb-6 group-hover:bg-blue-200 transition-colors">
                <step.icon className="w-10 h-10 text-blue-600" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                {step.title}
              </h3>
              <p className="text-gray-600 leading-relaxed">
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
