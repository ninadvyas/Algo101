import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
  } from '@/components/ui/accordion';
  
  const Faq = () => {
    const faqs = [
      {
        question: 'What is Algo101?',
        answer:
          ' Algo101 is a website to help you learn about different algorithms. It has explanations and cool visualizations to show you how each algorithm works step by step.',
      },
      {
        question: 'What kind of algorithms can I learn on Algo101?',
        answer:
          'Right now, Algo101 covers the basics, like sorting and searching methods. We’re adding more complex topics soon!',
      },
      {
        question: 'What are visualizations, and how do they help?',
        answer:
          'Visualizations are like animations of algorithms in action. They show you each step, so you can easily follow how an algorithm processes data.',
      },
      {
        question: 'Will there be practice problems?',
        answer:
          'Yes! We’re working on adding a section where you can try solving problems to practice the algorithms you learn.',
      },
    ];
  
    return (
      <section className="py-8">
        <div className="container">
          {faqs.map((faq, index) => (
            <Accordion key={index} type="single" collapsible>
              <AccordionItem value={`item-${index}`}>
                <AccordionTrigger className="hover:text-foreground/60 hover:no-underline">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent>{faq.answer}</AccordionContent>
              </AccordionItem>
            </Accordion>
          ))}
        </div>
      </section>
    );
  };
  
  export default Faq;
  