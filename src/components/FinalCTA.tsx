
import { Button } from "@/components/ui/button";

const FinalCTA = () => {
  return (
    <section className="py-20 bg-gradient-to-r from-blue-600 to-blue-800 text-white">
      <div className="max-w-4xl mx-auto px-4 text-center">
        <h2 className="text-4xl md:text-5xl font-bold mb-6">
          Ready to Excel in Your Studies?
        </h2>
        <p className="text-xl mb-8 opacity-90">
          Join thousands of students who trust Al, Ke & Em for their academic success
        </p>
        
        <Button 
          size="lg" 
          className="bg-white text-blue-600 hover:bg-gray-100 px-8 py-4 text-lg font-semibold rounded-full shadow-lg hover:shadow-xl transition-all duration-300 mb-6"
        >
          Submit Your First Assignment
        </Button>
        
        <div className="text-sm opacity-75 space-y-1">
          <p>🔒 Secure payment • 🤐 Confidential • 🇵🇭 Philippines-based</p>
        </div>
      </div>
    </section>
  );
};

export default FinalCTA;
