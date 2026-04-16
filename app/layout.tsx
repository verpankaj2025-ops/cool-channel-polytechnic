import type { Metadata } from 'next';
import { Inter, Space_Grotesk } from 'next/font/google';
import './globals.css';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import FloatingWhatsApp from '@/components/FloatingWhatsApp';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-sans',
});

const spaceGrotesk = Space_Grotesk({
  subsets: ['latin'],
  variable: '--font-heading',
});

export const metadata: Metadata = {
  title: 'Cool Channel | Best AC Sales & Service in Lucknow',
  description: '15+ Years Experience | All Types of Air Conditioning Solutions including Ductable, Cassette, Tower, VRV/VRF, Split, and Window A/C. Call +91 94510 13770.',
  keywords: 'AC service in Lucknow, AC repair Indira Nagar, AC installation Gomti Nagar, VRV AC service Lucknow, Cool Channel, AC Sales Lucknow',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const schemaData = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": "Cool Channel",
    "image": "https://picsum.photos/seed/ac/1200/800",
    "@id": "",
    "url": "https://coolchannel.com",
    "telephone": "+919451013770",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "Polytechnic Chauraha, Sector 8, Block D, Indira Nagar",
      "addressLocality": "Lucknow",
      "addressRegion": "UP",
      "postalCode": "226016",
      "addressCountry": "IN"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": 26.8756,
      "longitude": 80.9966
    },
    "openingHoursSpecification": {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": [
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday",
        "Sunday"
      ],
      "opens": "11:00",
      "closes": "20:00"
    },
    "sameAs": [
      "https://wa.me/919451013770"
    ]
  };

  return (
    <html lang="en" className={`${inter.variable} ${spaceGrotesk.variable} scroll-smooth`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }}
        />
      </head>
      <body className="font-sans antialiased text-gray-900 bg-gray-50 flex flex-col min-h-screen" suppressHydrationWarning>
        <Header />
        <main className="flex-grow pt-[72px] md:pt-[88px]">
          {children}
        </main>
        <Footer />
        <FloatingWhatsApp />
      </body>
    </html>
  );
}
