'use client'
import React from 'react';
import { Button, Card } from "@nextui-org/react";
import { ArrowRight, Bot } from 'lucide-react';

export function Hero() {
  return (
    <div className="flex items-center justify-center">
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center max-w-4xl mx-auto">
          <div className="flex justify-center mb-6">
            <Bot size={64} className="text-primary-500" />
          </div>
          <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-purple-600 to-blue-600">
            Next-Gen Trading Automation
          </h1>
          <p className="text-xl mb-8 text-gray-600 dark:text-gray-300">
            Leverage our advanced MQTT-based distributed systems and serverless architecture for automated trading signals and execution. Built with quantum-resilient authentication and neural predictive analytics.
          </p>
          <div className="flex gap-4 justify-center">
            <Button 
              size="lg" 
              color="primary"
              endContent={<ArrowRight />}
              as="a"
              href="/dashboard"
            >
              Go to Dashboard
            </Button>
            <Button
              size="lg"
              variant="bordered"
              as="a"
              href="#features"
            >
              Learn More
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}