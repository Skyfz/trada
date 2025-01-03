'use client'

import React from 'react';
import { Card } from "@nextui-org/react";

const roadmapItems = [
  {
    quarter: "Q2 2024",
    title: "Enhanced AI Models",
    description: "Rolling out next-generation neural networks for improved signal accuracy"
  },
  {
    quarter: "Q3 2024",
    title: "Mobile App Launch",
    description: "Native iOS and Android apps for on-the-go trading"
  },
  {
    quarter: "Q4 2024",
    title: "Institutional API",
    description: "Enterprise API access for institutional clients"
  },
  {
    quarter: "Q1 2025",
    title: "Global Expansion",
    description: "New data centers in Asia and Europe for reduced latency"
  }
];

export function Roadmap() {
  return (
    <section id="roadmap" className="py-20 px-6">
      <div className="container mx-auto">
        <h2 className="text-4xl font-bold text-center mb-4">Product Roadmap</h2>
        <p className="text-center text-gray-600 dark:text-gray-300 mb-12 max-w-2xl mx-auto">
          Our commitment to continuous innovation and improvement
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {roadmapItems.map((item, index) => (
            <Card key={index} className="p-6">
              <div className="text-primary-500 font-bold mb-2">{item.quarter}</div>
              <h3 className="text-xl font-bold mb-2">{item.title}</h3>
              <p className="text-gray-600 dark:text-gray-300">{item.description}</p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}