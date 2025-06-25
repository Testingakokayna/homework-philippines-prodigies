
import { Button } from "@/components/ui/button";

const Pricing = () => {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-4xl mx-auto px-4 text-center">
        <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
          Simple, Premium Pricing
        </h2>
        
        <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-3xl p-8 md:p-12 shadow-xl border border-blue-200">
          <div className="text-6xl md:text-7xl font-bold text-blue-600 mb-4">
            ₱5,000,000
          </div>
          <div className="text-2xl md:text-3xl font-semibold text-gray-900 mb-6">
            Flat Rate Per Homework
          </div>
          <div className="text-lg text-gray-700 mb-8">
            + ₱1 back if you score 100%
          </div>
          
          <div className="bg-green-100 border border-green-300 rounded-xl p-6 mb-8">
            <div className="text-green-800 font-semibold text-lg">
              💯 Perfect Score Guarantee
            </div>
            <div className="text-green-700 mt-2">
              We're so confident in our quality, we'll give you ₱1 back for every perfect score!
            </div>
          </div>
          
          <Button 
            size="lg" 
            className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 text-lg font-semibold rounded-full shadow-lg hover:shadow-xl transition-all duration-300"
          >
            Start Your First Assignment
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Pricing;
