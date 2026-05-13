import type { Metadata } from 'next';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Script from 'next/script';

export const metadata: Metadata = {
  title: 'Katalog Attire - Koleksi Gaun & Jas Akad Cacalovas',
  description: 'Temukan koleksi attire eksklusif Cacalovas untuk momen akad nikah. Gaun pengantin modern, kebaya adat Jawa, dan jas pria pilihan terbaik. Tersedia di Purwokerto, Banjarnegara, Wonosobo.',
  keywords: ['Attire Cacalovas'],
  alternates: { canonical: 'https://cacalovas.com/attire' },
  openGraph: {
    title: 'Katalog Attire - Koleksi Gaun & Jas Akad Cacalovas',
    description: 'Temukan koleksi attire eksklusif Cacalovas untuk momen akad nikah. Gaun pengantin modern, kebaya adat Jawa, dan jas pria pilihan terbaik. Tersedia di Purwokerto, Banjarnegara, Wonosobo.',
    url: 'https://cacalovas.com/attire',
    images: [{ url: '/images/hero-bg.png', width: 1200, height: 630, alt: 'Katalog Attire - Koleksi Gaun & Jas Akad Cacalovas' }],
  },
};

export default function AttirePage() {
  return (
    <>
      <Navbar />
      <main style={{ minHeight: '100vh', paddingTop: '8rem', paddingBottom: '5rem', background: '#FDF5F0' }}>
        <div style={{ maxWidth: 1000, margin: '0 auto', padding: '0 1.5rem' }}>
          
          {/* Header Text */}
          <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
            <h1 style={{ fontFamily: 'Cormorant Garamond, serif', fontSize: 'clamp(2rem, 5vw, 3.5rem)', color: '#3D2420', marginBottom: '1rem', fontWeight: 600 }}>
              Koleksi Attire Kami
            </h1>
            <p style={{ fontFamily: 'DM Sans, sans-serif', color: '#7A5A53', maxWidth: 600, margin: '0 auto', lineHeight: 1.8 }}>
              Koleksi gaun pengantin, kebaya adat, dan jas pria eksklusif dari <strong>@cacalovas.attire</strong>. Temukan busana terbaik untuk hari spesialmu.
            </p>
            <a href="https://www.instagram.com/cacalovas.attire/" target="_blank" rel="noopener noreferrer" 
               style={{ display: 'inline-block', marginTop: '1.5rem', fontFamily: 'DM Sans, sans-serif', fontSize: '0.85rem', fontWeight: 600, color: '#B5735F', textDecoration: 'none', borderBottom: '1px solid #B5735F', paddingBottom: '2px' }}>
              Lihat di Instagram →
            </a>
          </div>

          {/* Elfsight Instagram Widget */}
          <div style={{ background: '#fff', borderRadius: 20, padding: '1rem', boxShadow: '0 10px 40px rgba(181, 115, 95, 0.08)' }}>
            <Script src="https://elfsightcdn.com/platform.js" strategy="lazyOnload" />
            <div className="elfsight-app-0e86ef9f-d273-44d3-b964-8a3079002ea6" data-elfsight-app-lazy></div>
          </div>

        </div>
      </main>
      <Footer />
    </>
  );
}
