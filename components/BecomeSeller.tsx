'use client'

import React from 'react';
import { Card, Button } from "@nextui-org/react";
import { DollarSign, Users, Shield, Zap } from 'lucide-react';

const benefits = [
  {
    icon: <DollarSign className="w-8 h-8" />,
    title: "Earn More",
    description: "Generate passive income by selling your trading algorithms and signals"
  },
  {
    icon: <Users className="w-8 h-8" />,
    title: "Global Reach",
    description: "Access thousands of traders worldwide through our platform"
  },
  {
    icon: <Shield className="w-8 h-8" />,
    title: "Secure Platform",
    description: "Your intellectual property is protected with our advanced security"
  },
  {
    icon: <Zap className="w-8 h-8" />,
    title: "Easy Integration",
    description: "Simple API integration for your existing trading systems"
  }
];

export function BecomeSeller() {
  return (
    <section id="become-seller" className="py-20 px-6">
      <div className="container mx-auto">
        <h2 className="text-4xl font-bold text-center mb-4">Become a Seller</h2>
        <p className="text-center text-gray-600 dark:text-gray-300 mb-12 max-w-2xl mx-auto">
          Turn your trading algorithms into a profitable business
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {benefits.map((benefit, index) => (
            <Card key={index} className="p-6">
              <div className="flex flex-col items-center text-center">
                <div className="mb-4 text-primary-500">
                  {benefit.icon}
                </div>
                <h3 className="text-xl font-bold mb-2">{benefit.title}</h3>
                <p className="text-gray-600 dark:text-gray-300">{benefit.description}</p>
              </div>
            </Card>
          ))}
        </div>
        <div className="text-center">
          <Button
            size="lg"
            color="primary"
            className="font-semibold px-8 h-12 bg-gradient-to-r from-purple-600 to-blue-600 text-white shadow-lg hover:shadow-xl transition-all"
            as="a"
            href="/dashboard/become-seller"
          >
            Start Selling Today
          </Button>
        </div>
      </div>
    </section>
  );
}