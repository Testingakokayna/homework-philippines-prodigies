
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const FAQ = () => {
  const faqs = [
    {
      question: "How fast do I get my answers?",
      answer: "Our expert team works 24/7 to deliver your homework solutions. Most assignments are completed within 2-4 hours, with complex projects taking up to 24 hours. We pride ourselves on speed without compromising quality."
    },
    {
      question: "What subjects do you cover?",
      answer: "We cover all major subjects including Mathematics, Science (Physics, Chemistry, Biology), English, Filipino, History, Economics, Computer Science, Engineering, and more. Our team includes specialists from various academic fields with advanced degrees."
    },
    {
      question: "How does the ₱1 perfect-score rebate work?",
      answer: "Simple! When you achieve a perfect score (100%) on any assignment we've helped with, just send us proof of your grade and we'll refund ₱1 to your account. It's our way of celebrating your success and showing confidence in our work."
    }
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-4xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-xl text-gray-600">
            Everything you need to know about our service
          </p>
        </div>

        <Accordion type="single" collapsible className="space-y-4">
          {faqs.map((faq, index) => (
            <AccordionItem 
              key={index} 
              value={`item-${index}`}
              className="bg-white rounded-lg border border-gray-200 px-6"
            >
              <AccordionTrigger className="text-left text-lg font-semibold hover:no-underline">
                {faq.question}
              </AccordionTrigger>
              <AccordionContent className="text-gray-600 leading-relaxed pt-2">
                {faq.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
};

export default FAQ;
