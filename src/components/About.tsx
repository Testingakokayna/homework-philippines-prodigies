
const About = () => {
  return (
    <section className="py-20 bg-blue-50">
      <div className="max-w-6xl mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Meet Al, Ke & Em
            </h2>
            <p className="text-lg text-gray-700 mb-6 leading-relaxed">
              Welcome to the Philippines' premier homework assistance service! We're Al, Ke & Em - 
              three passionate educators who've revolutionized academic support with our 24/7 expert team.
            </p>
            <p className="text-lg text-gray-700 mb-6 leading-relaxed">
              Our team consists of degree-holding professionals from top Philippine universities, 
              ensuring every assignment receives the expert attention it deserves. We guarantee 
              quality, speed, and complete confidentiality.
            </p>
            <div className="grid grid-cols-2 gap-6 mt-8">
              <div className="text-center">
                <div className="text-3xl font-bold text-blue-600">24/7</div>
                <div className="text-gray-600">Support Available</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-blue-600">100%</div>
                <div className="text-gray-600">Quality Guarantee</div>
              </div>
            </div>
          </div>
          
          <div className="relative">
            <img 
              src="https://images.unsplash.com/photo-1605810230434-7631ac76ec81?w=600&h=400&fit=crop" 
              alt="Team of Al, Ke & Em - Educational experts"
              className="rounded-2xl shadow-2xl"
            />
            <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-blue-200 rounded-full opacity-50 blur-xl"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
