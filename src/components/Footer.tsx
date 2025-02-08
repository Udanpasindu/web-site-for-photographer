import React from 'react';
import { Camera, Mail, Phone, MapPin, Instagram, Facebook, Twitter } from 'lucide-react';

export const Footer = () => {
  return (
    <footer className="bg-gray-900">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Brand Section */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <Camera className="w-8 h-8 text-blue-400" />
              <span className="text-xl font-bold text-white">Maleesha Mahendra Photography</span>
            </div>
            <p className="text-gray-400">
              Capturing life's precious moments in Japan. Specializing in weddings, events, and parties.
            </p>
            <div className="flex space-x-4">
              <a
                href="https://instagram.com"
                className="text-gray-400 hover:text-blue-400 transition-colors"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a
                href="https://facebook.com"
                className="text-gray-400 hover:text-blue-400 transition-colors"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Facebook className="w-5 h-5" />
              </a>
              <a
                href="https://twitter.com"
                className="text-gray-400 hover:text-blue-400 transition-colors"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Twitter className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white font-semibold text-lg mb-4">Quick Links</h3>
            <nav className="space-y-2">
              <a href="#" className="block text-gray-400 hover:text-blue-400 transition-colors">
                Home
              </a>
              <a href="#portfolio" className="block text-gray-400 hover:text-blue-400 transition-colors">
                Portfolio
              </a>
              <a href="#about" className="block text-gray-400 hover:text-blue-400 transition-colors">
                About
              </a>
              <a href="#contact" className="block text-gray-400 hover:text-blue-400 transition-colors">
                Contact
              </a>
            </nav>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-white font-semibold text-lg mb-4">Contact Info</h3>
            <div className="space-y-2">
              <div className="flex items-center text-gray-400">
                <Phone className="w-5 h-5 mr-2 text-blue-400" />
                <span>+81 80-7356-0355</span>
              </div>
              <div className="flex items-center text-gray-400">
                <Mail className="w-5 h-5 mr-2 text-blue-400" />
                <span>maleeshamahendra@gmail.com</span>
              </div>
              <div className="flex items-center text-gray-400">
                <MapPin className="w-5 h-5 mr-2 text-blue-400" />
                <span>Tokyo, Japan</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-gray-800">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm">
              &copy; {new Date().getFullYear()} Udan Pasindu Jayasekara. All rights reserved.
            </p>
            <div className="mt-4 md:mt-0">
              <nav className="flex space-x-4 text-sm">
                <a href="#" className="text-gray-400 hover:text-blue-400 transition-colors">
                  Privacy Policy
                </a>
                <a href="#" className="text-gray-400 hover:text-blue-400 transition-colors">
                  Terms of Service
                </a>
              </nav>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};