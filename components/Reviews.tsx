'use client'

import React from 'react';
import { Card, Avatar } from "@nextui-org/react";

const reviews = [
  {
    name: "Sarah Chen",
    role: "Professional Trader",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=100&h=100",
    content: "The AI signals have transformed my trading strategy. The accuracy is remarkable."
  },
  {
    name: "Michael Roberts",
    role: "Hedge Fund Manager",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=100&h=100",
    content: "Trada's institutional API seamlessly integrated with our existing systems. Exceptional service."
  },
  {
    name: "David Nkosi",
    role: "Retail Trader",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=100&h=100",
    content: "The automated trading system has given me more time while improving my results."
  }
];

export function Reviews() {
  return (
    <section id="reviews" className="py-20 px-6">
      <div className="container mx-auto">
        <h2 className="text-4xl font-bold text-center mb-4">Trader Reviews</h2>
        <p className="text-center text-gray-600 dark:text-gray-300 mb-12 max-w-2xl mx-auto">
          See what our community of traders has to say
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {reviews.map((review, index) => (
            <Card key={index} className="p-6">
              <div className="flex items-center mb-4">
                <Avatar src={review.image} className="w-12 h-12" />
                <div className="ml-4">
                  <div className="font-bold">{review.name}</div>
                  <div className="text-sm text-gray-500">{review.role}</div>
                </div>
              </div>
              <p className="text-gray-600 dark:text-gray-300">{review.content}</p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}