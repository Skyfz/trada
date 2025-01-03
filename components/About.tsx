'use client'

import React from 'react';
import { Card } from "@nextui-org/react";

export function About() {
  return (
    <section id="about" className="py-20 px-6">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-4xl font-bold mb-6">About Trada</h2>
            <p className="text-lg text-gray-600 dark:text-gray-300 mb-6">
              Founded in Sandton, South Africa, Trada has revolutionized automated trading through advanced technology and innovative solutions. Our team of experts combines decades of market experience with cutting-edge technology.
            </p>
            <p className="text-lg text-gray-600 dark:text-gray-300">
              We serve traders globally, providing institutional-grade tools and systems that were previously only available to large financial institutions. Our mission is to democratize algorithmic trading through accessible, powerful technology.
            </p>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <Card className="p-6 text-center">
              <h3 className="text-4xl font-bold text-primary-500 mb-2">50K+</h3>
              <p>Active Traders</p>
            </Card>
            <Card className="p-6 text-center">
              <h3 className="text-4xl font-bold text-primary-500 mb-2">99.9%</h3>
              <p>Uptime</p>
            </Card>
            <Card className="p-6 text-center">
              <h3 className="text-4xl font-bold text-primary-500 mb-2">24/7</h3>
              <p>Support</p>
            </Card>
            <Card className="p-6 text-center">
              <h3 className="text-4xl font-bold text-primary-500 mb-2">150+</h3>
              <p>Countries</p>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}