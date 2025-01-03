'use client'

import React from 'react';
import { Card, Button } from "@nextui-org/react";
import { Mail, Phone, MapPin, Share2, MessageCircle } from 'lucide-react';

export function Contact() {
  const handleEmail = () => window.location.href = 'mailto:support@trada.com';
  const handleCall = () => window.location.href = 'tel:+27101234567';
  const handleWhatsApp = () => window.location.href = 'https://wa.me/27101234567';
  const handleShare = async () => {
    if (navigator.share) {
      try {
        await navigator.share({
          title: 'Trada Trading Platform',
          text: 'Check out this amazing trading platform!',
          url: window.location.href,
        });
      } catch (error) {
        console.log('Error sharing:', error);
      }
    }
  };

  return (
    <section id="contact" className="py-20 px-6">
      <div className="container mx-auto">
        <h2 className="text-4xl font-bold text-center mb-4">Get in Touch</h2>
        <p className="text-center text-gray-600 dark:text-gray-300 mb-12 max-w-2xl mx-auto">
          Our support team is available 24/7 to assist you
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-8 max-w-6xl mx-auto">
          <Card className="p-6 text-center cursor-pointer" onClick={handleEmail}>
            <Mail className="w-8 h-8 mx-auto mb-4 text-primary-500" />
            <h3 className="font-bold mb-2">Email Us</h3>
            <p className="text-gray-600 dark:text-gray-300">support@trada.com</p>
          </Card>
          <Card className="p-6 text-center cursor-pointer" onClick={handleCall}>
            <Phone className="w-8 h-8 mx-auto mb-4 text-primary-500" />
            <h3 className="font-bold mb-2">Call Us</h3>
            <p className="text-gray-600 dark:text-gray-300">+27 10 123 4567</p>
          </Card>
          <Card className="p-6 text-center">
            <MapPin className="w-8 h-8 mx-auto mb-4 text-primary-500" />
            <h3 className="font-bold mb-2">Visit Us</h3>
            <p className="text-gray-600 dark:text-gray-300">Sandton, Johannesburg</p>
          </Card>
          <Card className="p-6 text-center cursor-pointer" onClick={handleWhatsApp}>
            <MessageCircle className="w-8 h-8 mx-auto mb-4 text-primary-500" />
            <h3 className="font-bold mb-2">WhatsApp</h3>
            <p className="text-gray-600 dark:text-gray-300">Chat with us</p>
          </Card>
          <Card className="p-6 text-center cursor-pointer" onClick={handleShare}>
            <Share2 className="w-8 h-8 mx-auto mb-4 text-primary-500" />
            <h3 className="font-bold mb-2">Share</h3>
            <p className="text-gray-600 dark:text-gray-300">Tell others</p>
          </Card>
        </div>
      </div>
    </section>
  );
}