'use client'

import React from 'react';
import { Card, CardBody, CardHeader, Button, Divider, Chip } from "@nextui-org/react";
import { Check } from 'lucide-react';

const plans = [
  {
    name: "Free",
    price: 0,
    features: [
      "Basic trading signals",
      "Manual trade copying",
      "Community access",
      "Basic documentation"
    ]
  },
  {
    name: "Basic",
    price: 10,
    isFavorite: true,
    features: [
      "All Free features",
      "Automated trade copying",
      "Priority signals",
      "Email support"
    ]
  },
  {
    name: "Pro",
    price: 50,
    features: [
      "All Basic features",
      "Advanced algorithms",
      "Custom indicators",
      "24/7 support",
      "API access"
    ]
  },
  {
    name: "Premium",
    price: 150,
    features: [
      "All Pro features",
      "VIP signals",
      "Dedicated server",
      "1-on-1 consultation",
      "Custom solutions",
      "White-label options"
    ]
  }
];

export function Pricing() {
  return (
    <section id="pricing" className="py-20 px-6">
      <div className="container mx-auto">
        <h2 className="text-4xl font-bold text-center mb-4">Transparent Pricing</h2>
        <p className="text-center text-gray-600 dark:text-gray-300 mb-12">
          Choose the plan that fits your trading needs
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {plans.map((plan) => (
            <Card key={plan.name} className={`p-6 ${plan.isFavorite ? 'border-2 border-primary-500' : ''}`}>
              <CardHeader className="pb-6 pt-2 px-4 flex-col items-start">
                <div className="w-full flex justify-between items-center flex-col space-y-4">
                
                  <h3 className="font-bold text-2xl">{plan.name}</h3>
                 
                </div>
                <div className="mt-2">
                  <span className="text-4xl font-bold">${plan.price}</span>
                  <span className="text-gray-500">/month</span>
                </div>
                <p className="text-sm text-gray-500 mt-2">
                  Save 10% with yearly billing
                </p>
                
              {plan.isFavorite && (
                  <div className=' pt-4 items-center justify-between flex'>
                    <Chip className="" color="primary" variant="flat">Popular Choice</Chip>
                </div>)}
              
              </CardHeader>
              
              <Divider/>
              <CardBody className="py-4">
                <ul className="space-y-4">
                  {plan.features.map((feature) => (
                    <li key={feature} className="flex items-center gap-2">
                      <Check size={20} className="text-primary-500" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
                <Button
                  color="primary"
                  className={`w-full mt-6 font-semibold h-12 ${
                    plan.name === "Basic" 
                      ? "bg-gradient-to-r from-purple-600 to-blue-600 text-white shadow-lg hover:shadow-xl transition-all"
                      : ""
                  }`}
                  variant={plan.name === "Basic" ? "solid" : "bordered"}
                  href={`/dashboard/signup?plan=${plan.name.toLowerCase()}`}
                  as="a"
                >
                  Get Started
                </Button>
              </CardBody>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}