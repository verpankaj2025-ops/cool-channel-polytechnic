import Link from 'next/link';
import { MapPin, Phone, Clock, Wind, ArrowRight } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300 pt-16 pb-8">
      <div className="container mx-auto px-4 md:px-6 max-w-7xl">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Brand */}
          <div>
            <Link href="/" className="flex items-center gap-2 mb-6">
              <div className="bg-blue-600 text-white p-2 rounded-lg">
                <Wind className="w-6 h-6" />
              </div>
              <div>
                <h2 className="text-xl font-bold text-white leading-none tracking-tight">Cool Channel</h2>
                <p className="text-xs text-blue-400 font-medium mt-0.5">Sales & Service</p>
              </div>
            </Link>
            <p className="text-sm text-gray-400 mb-6 leading-relaxed">
              Trusted air conditioning contractor in Lucknow with 15+ years of experience in sales, installation, and servicing of all AC types.
            </p>
            <div className="flex items-center gap-2">
              <div className="flex text-yellow-400">
                {[...Array(5)].map((_, i) => (
                  <svg key={i} className="w-4 h-4 fill-current" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
              <span className="text-sm font-medium text-white">4.9 Google Reviews</span>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-6">Quick Links</h3>
            <ul className="space-y-3">
              {['Home', 'Services', 'About Us', 'Contact'].map((link) => (
                <li key={link}>
                  <Link href={`#${link.toLowerCase().replace(' ', '-')}`} className="text-sm hover:text-blue-400 transition-colors flex items-center gap-2">
                    <ArrowRight className="w-3 h-3" />
                    {link}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Service Areas */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-6">Service Areas</h3>
            <ul className="grid grid-cols-2 gap-y-3 gap-x-4">
              {['Indira Nagar', 'Gomti Nagar', 'Munsipula', 'Chinhat', 'Aliganj', 'Kapoorthala', 'Hazratganj'].map((area) => (
                <li key={area} className="text-sm text-gray-400 flex items-center gap-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-blue-500" />
                  {area}
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-6">Contact Us</h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-blue-500 shrink-0 mt-0.5" />
                <span className="text-sm text-gray-400 leading-relaxed">
                  Polytechnic Chauraha, Sector 8, Block D, Indira Nagar, Lucknow, Uttar Pradesh 226016
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-blue-500 shrink-0" />
                <a href="tel:+919451013770" className="text-sm text-gray-400 hover:text-white transition-colors">
                  +91 94510 13770
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Clock className="w-5 h-5 text-blue-500 shrink-0" />
                <span className="text-sm text-gray-400">
                  09:00 AM to 09:00 PM
                </span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-sm text-gray-500">
            &copy; {new Date().getFullYear()} Cool Channel. All rights reserved.
          </p>
          <p className="text-sm text-gray-500">
            Best AC Sales & Service in Lucknow
          </p>
        </div>
      </div>
    </footer>
  );
}
