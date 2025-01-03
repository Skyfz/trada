'use client'

import React from 'react';
import { Accordion, AccordionItem } from "@nextui-org/react";

const faqs = [
  {
    question: "How does your trading system work?",
    answer: "Our system utilizes advanced MQTT protocols and distributed microservices architecture to process market data through our proprietary neural networks. Signals are generated using quantum-resilient algorithms and delivered in real-time to our clients."
  },
  {
    question: "What payment methods do you accept?",
    answer: "We accept various payment methods including USD and ZAR via Mastercard, OxOw payment gateway, and major cryptocurrencies for maximum flexibility and security."
  },
  {
    question: "Where are you located?",
    answer: "We are headquartered in Sandton, South Africa, but serve clients globally through our cloud-based infrastructure."
  },
  {
    question: "How do I get started?",
    answer: "Simply choose a plan, create an account, and download our client-side trading system. Our step-by-step guide will help you set up and connect to our signal service."
  },
  {
    question: "Is my investment safe?",
    answer: "We prioritize security using industry-standard encryption and authentication protocols. However, all trading carries inherent risks, and past performance doesn't guarantee future results."
  }
];

export function FAQ() {
  return (
    <section id="faq" className="py-20 px-6">
      <div className="container mx-auto max-w-4xl">
        <h2 className="text-4xl font-bold text-center mb-12">Frequently Asked Questions</h2>
        <Accordion variant="bordered">
          {faqs.map((faq, index) => (
            <AccordionItem
              key={index}
              aria-label={faq.question}
              title={faq.question}
            >
              {faq.answer}
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
}