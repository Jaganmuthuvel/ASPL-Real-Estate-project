import { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';

const FAQPage = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs = [
    {
      category: 'Buying',
      questions: [
        { q: 'What is the process to book a property?', a: 'You can book a property by paying a token advance. Our sales team will guide you through the required documentation and next steps.' },
        { q: 'Can NRIs buy property?', a: 'Yes, NRIs can buy residential and commercial properties in India subject to RBI regulations.' }
      ]
    },
    {
      category: 'Pricing & Loans',
      questions: [
        { q: 'Are there any hidden charges?', a: 'No, we believe in complete transparency. All costs including registration, GST, and maintenance are clearly explained upfront.' },
        { q: 'Do you help with home loans?', a: 'Yes, our projects are pre-approved by all major banks including SBI, HDFC, and ICICI. We have a dedicated team to assist with loan processing.' }
      ]
    },
    {
      category: 'Site Visits',
      questions: [
        { q: 'How can I schedule a site visit?', a: 'You can use the "Schedule Visit" button on our website or call our toll-free number to arrange a guided tour.' },
        { q: 'Are virtual tours available?', a: 'Yes, we provide 360-degree virtual tours for most of our properties on their respective project pages.' }
      ]
    }
  ];

  return (
    <div className="bg-background min-h-screen pb-16">
      <div className="bg-gray-900 text-white py-12">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-3xl md:text-4xl font-bold mb-4">Frequently Asked Questions</h1>
          <p className="text-gray-300">Find answers to common questions about our properties and processes.</p>
        </div>
      </div>

      <div className="container mx-auto px-4 py-12 max-w-3xl">
        {faqs.map((category, catIndex) => (
          <div key={catIndex} className="mb-10">
            <h2 className="text-2xl font-bold mb-6 text-primary border-b pb-2">{category.category}</h2>
            <div className="space-y-4">
              {category.questions.map((faq, idx) => {
                const globalIndex = catIndex * 10 + idx;
                const isOpen = openIndex === globalIndex;
                
                return (
                  <div key={idx} className="bg-white rounded-lg border border-border overflow-hidden">
                    <button 
                      onClick={() => setOpenIndex(isOpen ? null : globalIndex)}
                      className="w-full px-6 py-4 text-left flex justify-between items-center focus:outline-none hover:bg-gray-50"
                    >
                      <span className="font-bold text-gray-800">{faq.q}</span>
                      {isOpen ? <ChevronUp size={20} className="text-primary" /> : <ChevronDown size={20} className="text-gray-400" />}
                    </button>
                    {isOpen && (
                      <div className="px-6 py-4 bg-gray-50 text-gray-600 border-t border-border">
                        {faq.a}
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FAQPage;
