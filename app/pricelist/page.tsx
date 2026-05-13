import type { Metadata } from 'next';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

export const metadata: Metadata = {
  title: 'Pricelist Cacalovas Make Up Artist',
  description: 'Lihat daftar harga lengkap layanan Make Up Artist Cacalovas Terbaru.',
  keywords: ['Pricelist Cacalovas'],
  alternates: { canonical: 'https://cacalovas.com/pricelist' },
  openGraph: {
    title: 'Pricelist Cacalovas Make Up Artist',
    description: 'Lihat daftar harga lengkap layanan Make Up Artist Cacalovas Terbaru.',
    url: 'https://cacalovas.com/pricelist',
  },
};

export default function PricelistPage() {
  return (
    <>
      <Navbar />
      <main style={{ minHeight: '100vh', paddingTop: '8rem', paddingBottom: '5rem', background: '#FDF5F0' }}>
        <div style={{ maxWidth: 900, margin: '0 auto', padding: '0 1.5rem' }}>
          
          {/* Header Text */}
          <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
            <h1 style={{ fontFamily: 'Cormorant Garamond, serif', fontSize: 'clamp(2rem, 5vw, 3.5rem)', color: '#3D2420', marginBottom: '1rem', fontWeight: 600 }}>
              Pricelist Layanan
            </h1>
            <p style={{ fontFamily: 'DM Sans, sans-serif', color: '#7A5A53', maxWidth: 600, margin: '0 auto', lineHeight: 1.8 }}>
              Katalog harga lengkap layanan Make Up Artist Cacalovas. <br />
              (Silakan *scroll* di dalam kotak di bawah ini untuk membaca halamannya)
            </p>
          </div>

          {/* Embed PDF Google Drive */}
          <div style={{ width: '100%', height: '85vh', minHeight: '600px', borderRadius: 20, overflow: 'hidden', boxShadow: '0 10px 40px rgba(181, 115, 95, 0.1)', border: '1px solid #EDD5CB', background: '#fff' }}>
            {/* TODO: Ganti 'YOUR_FILE_ID' dengan ID file PDF kamu di Google Drive */}
            <iframe 
              src="https://drive.google.com/file/d/1aZgMbb7xS-LpIa0qBEFKIaVdfutIUeCK/preview" 
              width="100%" 
              height="100%" 
              style={{ border: 'none' }}
              allow="autoplay"
              title="Pricelist Cacalovas"
            ></iframe>
          </div>
          
          {/* Tombol CTA Alternative */}
          <div style={{ textAlign: 'center', marginTop: '2.5rem' }}>
            <p style={{ fontFamily: 'DM Sans, sans-serif', color: '#9A7A73', fontSize: '0.85rem', marginBottom: '1rem' }}>
              Tidak bisa membuka PDF di atas?
            </p>
            {/* TODO: Ganti link href dengan URL asli PDF-nya jika mau bisa didownload */}
            <a href="https://drive.google.com/file/d/1aZgMbb7xS-LpIa0qBEFKIaVdfutIUeCK/view" target="_blank" rel="noopener noreferrer" 
               style={{ display: 'inline-block', background: 'transparent', color: '#3D2420', padding: '0.75rem 2rem', borderRadius: 9999, fontFamily: 'DM Sans, sans-serif', fontWeight: 600, fontSize: '0.9rem', border: '1.5px solid #3D2420', textDecoration: 'none' }}>
              Buka di Tab Baru
            </a>
          </div>

        </div>
      </main>
      <Footer />
    </>
  );
}
