import React from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const FaqAccordion = () => {
  const faqs = [
    { question: "How old is James?", answer: "James is 21 years old." },
    { question: "What is his Favorite Sports?", answer: "His favorite sport is basketball." },
    { question: "What is his Favorite Food?", answer: "His favorite food is fried chicken." },
  ];

  return (
    <Accordion type="single" collapsible className="text-white">
      {faqs.map((faq, index) => (
        <AccordionItem key={index} value={`item-${index}`}>
          <AccordionTrigger className="text-white hover:text-gray-300">
            {faq.question}
          </AccordionTrigger>
          <AccordionContent className="text-gray-200">
            {faq.answer}
          </AccordionContent>
        </AccordionItem>
      ))}
    </Accordion>
  );
};

export default FaqAccordion;
