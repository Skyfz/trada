'use client'
import React from 'react';
import { Card, CardBody } from "@nextui-org/react";
import { Bot, Cpu, Shield, Zap, Globe, Clock } from 'lucide-react';

const features = [
  {
    icon: <Bot className="w-8 h-8" />,
    title: "AI-Powered Signals",
    description: "Neural networks analyze market patterns 24/7 to generate high-probability trading signals"
  },
  {
    icon: <Cpu className="w-8 h-8" />,
    title: "Quantum Processing",
    description: "Advanced quantum-resilient algorithms for ultra-fast trade execution"
  },
  {
    icon: <Shield className="w-8 h-8" />,
    title: "Enterprise Security",
    description: "MQTT authentication and military-grade encryption protect your trades"
  },
  {
    icon: <Zap className="w-8 h-8" />,
    title: "Instant Execution",
    description: "Serverless architecture ensures minimal latency for trade copying"
  },
  {
    icon: <Globe className="w-8 h-8" />,
    title: "Global Markets",
    description: "Trade forex, crypto, stocks, and commodities across multiple exchanges"
  },
  {
    icon: <Clock className="w-8 h-8" />,
    title: "24/7 Trading",
    description: "Automated systems work round the clock to capture opportunities"
  }
];

export function Features() {
  return (
    <section id="features" className="py-20 px-6">
        <h2 className="text-4xl font-bold text-center mb-4">Advanced Trading Features</h2>
        <p className="text-center text-gray-600 dark:text-gray-300 mb-12 max-w-2xl mx-auto">
          Our cutting-edge technology stack delivers institutional-grade trading capabilities to retail traders
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <Card key={index} className="p-6">
              <CardBody className="flex flex-col items-center text-center">
                <div className="mb-4 text-primary-500">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-bold mb-2">{feature.title}</h3>
                <p className="text-gray-600 dark:text-gray-300">{feature.description}</p>
              </CardBody>
            </Card>
          ))}
        </div>
    </section>
  );
}