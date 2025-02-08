import React from 'react';
import { Camera, Mail, Phone, MapPin, Instagram } from 'lucide-react';
import { Toaster } from 'react-hot-toast';
import { ImageSlider } from './components/ImageSlider';
import { ContactForm } from './components/ContactForm';
import { Portfolio } from './components/Portfolio';
import { Header } from './components/Header';
import { Footer } from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-black text-white">
      <Header />
      
      {/* Hero Section with Image Slider */}
      <div className="relative h-screen">
        <ImageSlider />
        <div className="relative z-10 h-full flex items-center justify-center text-center px-4">
          <div>
            <Camera className="w-16 h-16 mx-auto mb-4 text-blue-400" />
            <h1 className="text-4xl md:text-6xl font-bold mb-4">Capturing Moments</h1>
            <p className="text-xl text-gray-300">Wedding, Event & Party Photography</p>
          </div>
        </div>
      </div>

      {/* Portfolio Section */}
      <section id="portfolio" className="py-20 px-4 md:px-8">
        <h2 className="text-3xl font-bold text-center mb-12">Recent Works</h2>
        <Portfolio />
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 px-4 md:px-8 bg-gray-900">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">Get in Touch</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div>
              <h3 className="text-xl font-semibold mb-6">Contact Information</h3>
              <div className="space-y-4">
                <div className="flex items-center">
                  <Phone className="w-5 h-5 text-blue-400 mr-3" />
                  <span>+81 80-7356-0355</span>
                </div>
                <div className="flex items-center">
                  <Mail className="w-5 h-5 text-blue-400 mr-3" />
                  <span>maleeshamahendra@gmail.com</span>
                </div>
                <div className="flex items-center">
                  <MapPin className="w-5 h-5 text-blue-400 mr-3" />
                  <span>Tokyo, Japan</span>
                </div>
                <div className="flex items-center">
                  <Instagram className="w-5 h-5 text-blue-400 mr-3" />
                  <a href="https://instagram.com" className="hover:text-blue-400">@yourinstagram</a>
                </div>
              </div>
            </div>
            <div>
              <ContactForm />
            </div>
          </div>
        </div>
      </section>

      <Footer />
      
      <Toaster position="bottom-right" />
    </div>
  );
}

export default App;