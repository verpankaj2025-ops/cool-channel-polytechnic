'use client';

import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'motion/react';
import { Phone, MessageCircle, CheckCircle2, Star, ShieldCheck, Wrench, Settings, Snowflake, Wind, MapPin, Clock } from 'lucide-react';

const fadeIn = {
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-100px" },
  transition: { duration: 0.6 }
};

const staggerContainer = {
  initial: { opacity: 0 },
  whileInView: { opacity: 1 },
  viewport: { once: true, margin: "-100px" },
  transition: { staggerChildren: 0.1 }
};

export default function Home() {
  return (
    <div className="flex flex-col w-full">
      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden bg-blue-900">
        <div className="absolute inset-0 z-0">
          <Image
            src="https://loremflickr.com/1920/1080/hvac,technician"
            alt="AC Service Background"
            fill
            className="object-cover opacity-40 mix-blend-overlay"
            priority
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-blue-900/90 to-blue-900/40" />
        </div>

        <div className="container mx-auto px-4 md:px-6 max-w-7xl relative z-10 py-20">
          <motion.div 
            className="max-w-3xl"
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-blue-500/20 border border-blue-400/30 text-blue-200 text-sm font-medium mb-6 backdrop-blur-sm">
              <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
              <span>4.9 Google Reviews | 15+ Years Experience</span>
            </div>
            
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-heading font-bold text-white leading-tight mb-6">
              Best AC Sales & <span className="text-blue-400">Service</span> in Lucknow
            </h1>
            
            <p className="text-lg md:text-xl text-blue-100 mb-10 max-w-2xl leading-relaxed">
              Trusted air conditioning contractor providing all types of AC solutions. From installation to repair, we ensure your comfort all year round.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <a 
                href="tel:+919451013770" 
                className="inline-flex items-center justify-center gap-2 bg-white text-blue-900 px-8 py-4 rounded-xl font-bold text-lg hover:bg-blue-50 transition-all shadow-xl shadow-blue-900/20 hover:-translate-y-1"
              >
                <Phone className="w-5 h-5" />
                Call Now
              </a>
              <a 
                href="https://wa.me/919451013770" 
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 bg-green-500 text-white px-8 py-4 rounded-xl font-bold text-lg hover:bg-green-600 transition-all shadow-xl shadow-green-500/20 hover:-translate-y-1"
              >
                <MessageCircle className="w-5 h-5" />
                WhatsApp Us
              </a>
            </div>
            
            <div className="mt-12 flex items-center gap-6 text-sm text-blue-200">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-5 h-5 text-blue-400" />
                <span>Expert Technicians</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-5 h-5 text-blue-400" />
                <span>Quick Response</span>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-24 bg-white">
        <div className="container mx-auto px-4 md:px-6 max-w-7xl">
          <motion.div className="text-center max-w-3xl mx-auto mb-16" {...fadeIn}>
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-gray-900 mb-4">Our Premium Services</h2>
            <p className="text-lg text-gray-600">Comprehensive air conditioning solutions for residential and commercial spaces.</p>
          </motion.div>

          <motion.div 
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
            variants={staggerContainer}
            initial="initial"
            whileInView="whileInView"
          >
            {[
              { title: 'Ductable A/C', image: 'https://loremflickr.com/100/100/hvac,duct', desc: 'Efficient cooling for large commercial spaces with concealed ductwork.' },
              { title: 'Cassette A/C', image: 'https://loremflickr.com/100/100/ac,cassette', desc: 'Ceiling-mounted units perfect for offices and retail stores.' },
              { title: 'Tower A/C', image: 'https://loremflickr.com/100/100/ac,tower', desc: 'High-capacity cooling for halls, restaurants, and large living areas.' },
              { title: 'VRV/VRF A/C', image: 'https://loremflickr.com/100/100/hvac,system', desc: 'Advanced multi-zone climate control for modern buildings.' },
              { title: 'Split A/C', image: 'https://loremflickr.com/100/100/ac,split', desc: 'Quiet and efficient cooling for bedrooms and living rooms.' },
              { title: 'Window A/C', image: 'https://loremflickr.com/100/100/ac,window', desc: 'Compact and cost-effective cooling for single rooms.' },
            ].map((service, i) => (
              <motion.div 
                key={i}
                variants={fadeIn}
                className="bg-gray-50 rounded-2xl p-8 border border-gray-100 hover:border-blue-200 hover:shadow-xl hover:shadow-blue-900/5 transition-all group"
              >
                <div className="w-14 h-14 bg-blue-100 text-blue-600 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform overflow-hidden">
                  <Image src={service.image} alt={service.title} width={56} height={56} className="w-full h-full object-cover" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{service.title}</h3>
                <p className="text-gray-600 leading-relaxed">{service.desc}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Accessories & Spare Parts Section */}
      <section className="py-24 bg-gray-50 border-y border-gray-100">
        <div className="container mx-auto px-4 md:px-6 max-w-7xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            {/* Accessories */}
            <motion.div {...fadeIn}>
              <h2 className="text-3xl font-heading font-bold text-gray-900 mb-8">Premium Accessories</h2>
              <div className="space-y-6">
                <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 flex items-start gap-4">
                  <div className="w-12 h-12 bg-blue-50 text-blue-600 rounded-lg flex items-center justify-center shrink-0 overflow-hidden">
                    <Image src="https://loremflickr.com/100/100/copper,pipe" alt="Copper Pipes" width={48} height={48} className="w-full h-full object-cover" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">Copper Pipes</h3>
                    <p className="text-gray-600 mb-3">High-quality copper piping available at wholesale rates for durable installations.</p>
                    <span className="inline-block bg-green-100 text-green-700 text-xs font-bold px-2 py-1 rounded">Wholesale Rates</span>
                  </div>
                </div>
                <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 flex items-start gap-4">
                  <div className="w-12 h-12 bg-blue-50 text-blue-600 rounded-lg flex items-center justify-center shrink-0 overflow-hidden">
                    <Image src="https://loremflickr.com/100/100/ac,stand" alt="A/C Outdoor Stand" width={48} height={48} className="w-full h-full object-cover" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">A/C Outdoor Stand</h3>
                    <p className="text-gray-600">Sturdy and rust-resistant stands for safe outdoor unit mounting.</p>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Spare Parts */}
            <motion.div {...fadeIn}>
              <h2 className="text-3xl font-heading font-bold text-gray-900 mb-8">Genuine Spare Parts</h2>
              <div className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100 h-full flex flex-col justify-center">
                <h3 className="text-2xl font-bold text-blue-600 mb-4">All Types of A/C Spare Parts Available</h3>
                <p className="text-gray-600 mb-8 text-lg">We stock genuine parts for all major brands to ensure quick and reliable repairs.</p>
                
                <div className="grid grid-cols-2 gap-4">
                  {[
                    'compressor,ac',
                    'circuitboard,ac',
                    'fanmotor,hvac',
                    'hvac,parts'
                  ].map((keyword, i) => (
                    <div key={i} className="relative h-32 rounded-xl overflow-hidden bg-gray-100">
                      <Image
                        src={`https://loremflickr.com/400/300/${keyword}`}
                        alt="AC Spare Part"
                        fill
                        className="object-cover hover:scale-110 transition-transform duration-500"
                        referrerPolicy="no-referrer"
                      />
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* About Us Section */}
      <section id="about" className="py-24 bg-white">
        <div className="container mx-auto px-4 md:px-6 max-w-7xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div className="relative h-[500px] rounded-3xl overflow-hidden" {...fadeIn}>
              <Image
                src="https://loremflickr.com/800/1000/ac,installation"
                alt="AC Technician at work"
                fill
                className="object-cover"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-blue-900/80 to-transparent" />
              <div className="absolute bottom-8 left-8 right-8 bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-6 text-white">
                <div className="flex items-center gap-2 mb-2">
                  <Star className="w-6 h-6 fill-yellow-400 text-yellow-400" />
                  <span className="text-2xl font-bold">4.9</span>
                </div>
                <p className="font-medium">Highly rated on Google Reviews</p>
              </div>
            </motion.div>

            <motion.div {...fadeIn}>
              <h2 className="text-blue-600 font-bold tracking-wider uppercase text-sm mb-3">About Cool Channel</h2>
              <h3 className="text-3xl md:text-4xl font-heading font-bold text-gray-900 mb-6 leading-tight">
                15+ Years of Excellence in Air Conditioning
              </h3>
              <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                Cool Channel is a trusted air conditioning contractor in Lucknow. With over a decade and a half of experience, we specialize in the sales, installation, and servicing of all AC types. Our commitment to quality and customer satisfaction has made us a leader in the local cooling industry.
              </p>
              
              <div className="grid grid-cols-2 gap-6 mb-10">
                <div>
                  <h4 className="text-4xl font-bold text-blue-600 mb-2">15+</h4>
                  <p className="text-gray-600 font-medium">Years Experience</p>
                </div>
                <div>
                  <h4 className="text-4xl font-bold text-blue-600 mb-2">10k+</h4>
                  <p className="text-gray-600 font-medium">Happy Customers</p>
                </div>
              </div>

              <a 
                href="tel:+919451013770" 
                className="inline-flex items-center gap-2 bg-blue-600 text-white px-6 py-3 rounded-xl font-bold hover:bg-blue-700 transition-colors"
              >
                <Phone className="w-5 h-5" />
                Contact Our Experts
              </a>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Contact & Service Areas */}
      <section id="contact" className="py-24 bg-gray-900 text-white">
        <div className="container mx-auto px-4 md:px-6 max-w-7xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            <motion.div {...fadeIn}>
              <h2 className="text-3xl md:text-4xl font-heading font-bold mb-8">Get in Touch</h2>
              <p className="text-gray-400 text-lg mb-10 max-w-md">
                Ready to experience the best AC service in Lucknow? Contact us today for sales, installation, or repair.
              </p>

              <div className="space-y-8">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-blue-500/20 text-blue-400 rounded-xl flex items-center justify-center shrink-0">
                    <MapPin className="w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="text-xl font-bold mb-2">Visit Our Office</h4>
                    <p className="text-gray-400 leading-relaxed">
                      Polytechnic Chauraha, Sector 8, Block D,<br />
                      Indira Nagar, Lucknow,<br />
                      Uttar Pradesh 226016
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-blue-500/20 text-blue-400 rounded-xl flex items-center justify-center shrink-0">
                    <Phone className="w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="text-xl font-bold mb-2">Call Us</h4>
                    <a href="tel:+919451013770" className="text-2xl font-bold text-blue-400 hover:text-blue-300 transition-colors block mb-1">
                      +91 94510 13770
                    </a>
                    <p className="text-gray-400">Available during office hours</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-blue-500/20 text-blue-400 rounded-xl flex items-center justify-center shrink-0">
                    <Clock className="w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="text-xl font-bold mb-2">Office Timing</h4>
                    <p className="text-gray-400 text-lg">09:00 AM to 09:00 PM</p>
                    <p className="text-gray-500 text-sm mt-1">Open 7 days a week</p>
                  </div>
                </div>
              </div>
            </motion.div>

            <motion.div className="flex flex-col gap-8" {...fadeIn}>
              {/* Map */}
              <div className="w-full h-[300px] rounded-2xl overflow-hidden bg-gray-800 border border-gray-700">
                <iframe 
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3559.088174577544!2d80.99401131504403!3d26.87560098314389!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x399be2a6b8b8b8b9%3A0x8b8b8b8b8b8b8b8b!2sPolytechnic%20Chauraha%2C%20Indira%20Nagar%2C%20Lucknow!5e0!3m2!1sen!2sin!4v1620000000000!5m2!1sen!2sin" 
                  width="100%" 
                  height="100%" 
                  style={{ border: 0 }} 
                  allowFullScreen 
                  loading="lazy" 
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Cool Channel Location"
                ></iframe>
              </div>

              {/* Service Areas */}
              <div className="bg-gray-800 rounded-2xl p-8 border border-gray-700">
                <h3 className="text-xl font-bold mb-6 flex items-center gap-2">
                  <MapPin className="w-5 h-5 text-blue-400" />
                  Major Service Areas
                </h3>
                <div className="flex flex-wrap gap-3">
                  {['Indira Nagar', 'Gomti Nagar', 'Munsipula', 'Chinhat', 'Aliganj', 'Kapoorthala', 'Hazratganj'].map((area) => (
                    <span key={area} className="bg-gray-700 text-gray-300 px-4 py-2 rounded-full text-sm font-medium">
                      {area}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
}
