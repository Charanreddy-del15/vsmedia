import React, { useState } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Services from './components/Services';
import WhyUs from './components/WhyUs';
import Process from './components/Process';
import Founder from './components/Founder';
import BookingForm from './components/BookingForm';
import FinalCTA from './components/FinalCTA';
import Footer from './components/Footer';
import MobileStickyBar from './components/MobileStickyBar';
import BookingModal from './components/BookingModal';

export default function App() {
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedService, setSelectedService] = useState('Performance Marketing');

  const handleOpenBooking = (serviceName) => {
    if (typeof serviceName === 'string') {
      setSelectedService(serviceName);
    }
    setModalOpen(true);
  };

  const handleCloseModal = () => {
    setModalOpen(false);
  };

  return (
    <div className="vs-media-app">
      <Header onOpenBooking={handleOpenBooking} />
      
      <main>
        <Hero onOpenBooking={handleOpenBooking} />
        <About />
        <Services onSelectService={handleOpenBooking} />
        <WhyUs />
        <Process />
        <Founder />
        <BookingForm selectedService={selectedService} />
        <FinalCTA onOpenBooking={handleOpenBooking} />
      </main>

      <Footer onOpenBooking={handleOpenBooking} />

      {/* Mobile Bottom Bar */}
      <MobileStickyBar onOpenBooking={handleOpenBooking} />

      {/* Instant Call Booking Modal */}
      <BookingModal 
        isOpen={modalOpen} 
        onClose={handleCloseModal} 
        selectedService={selectedService} 
      />
    </div>
  );
}
