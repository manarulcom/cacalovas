'use client';
import { useRef, useState, useEffect } from 'react';

// Testimoni data - shared across city pages with city context
const allTestimoni = [
  { name: 'Nur Aimmatun N.', event: 'Google Maps', text: 'Tempatnya bagus banget dan aesthetic, fasilitasnya lengkap. Riasannya natural dan elegan banget!', rating: 5, avatar: 'N' },
  { name: 'Aulia Rahma', event: 'Google Maps', text: 'Riasannya cantik banget dan tahan lama seharian! Sangat profesional dan tepat waktu. Highly recommended!', rating: 5, avatar: 'A' },
  { name: 'Sinta Permata', event: 'Google Maps', text: 'Keren banget hasilnya! Prom night aku jadi lebih berkesan. Pasti bakal booking lagi untuk acara berikutnya.', rating: 5, avatar: 'S' },
  { name: 'Riarie R.', event: 'Google Maps', text: 'Rapih dan bersih banget. Layanannya lengkap dan friendly. Hasil riasannya melebihi ekspektasi!', rating: 5, avatar: 'R' },
];

export default function CityTestimoni({ city }: { city: string }) {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [scrollData, setScrollData] = useState({ width: 100, left: 0 });
  const [isScrollable, setIsScrollable] = useState(false);

  const handleScroll = () => {
    if (scrollRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = scrollRef.current;
      if (scrollWidth > clientWidth) {
        setIsScrollable(true);
        const width = (clientWidth / scrollWidth) * 100;
        const left = (scrollLeft / scrollWidth) * 100;
        setScrollData({ width, left });
      } else {
        setIsScrollable(false);
      }
    }
  };

  useEffect(() => {
    handleScroll();
    window.addEventListener('resize', handleScroll);
    return () => window.removeEventListener('resize', handleScroll);
  }, []);

  return (
    <section style={{ background: '#FFFFFF', padding: '5rem 1.5rem' }}>
      <div style={{ maxWidth: 960, margin: '0 auto' }}>
        <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
          <span style={{ fontFamily: 'DM Sans, sans-serif', fontSize: '0.7rem', fontWeight: 600, letterSpacing: '0.2em', textTransform: 'uppercase', color: '#B5735F' }}>Kata Mereka</span>
          <h2 style={{ fontFamily: 'Cormorant Garamond, serif', fontSize: 'clamp(1.75rem, 4vw, 2.5rem)', fontWeight: 500, color: '#3D2420', marginTop: '0.5rem' }}>
            Ulasan Klien Cacalovas
          </h2>
          <p style={{ fontFamily: 'DM Sans, sans-serif', color: '#9A7A73', marginTop: '0.75rem', fontSize: '0.9rem' }}>
            Dipercaya ratusan klien di {city} dan sekitarnya
          </p>
        </div>

        {/* Scrollable cards */}
        <div
          ref={scrollRef}
          onScroll={handleScroll}
          style={{ display: 'flex', gap: '1.25rem', overflowX: 'auto', scrollSnapType: 'x mandatory', WebkitOverflowScrolling: 'touch', scrollbarWidth: 'none', paddingBottom: '0.5rem' }}
        >
          {allTestimoni.map((t, i) => (
            <div key={i} style={{ flex: '0 0 300px', scrollSnapAlign: 'start', background: '#FDF5F0', borderRadius: '16px', padding: '1.75rem', border: '1px solid #EDD5CB' }}>
              <div style={{ color: '#B5735F', fontSize: '1rem', marginBottom: '0.75rem' }}>{'★'.repeat(t.rating)}</div>
              <p style={{ fontFamily: 'DM Sans, sans-serif', fontSize: '0.9rem', color: '#5C3D35', lineHeight: 1.8, marginBottom: '1.25rem', fontStyle: 'italic' }}>"{t.text}"</p>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', borderTop: '1px solid #EDD5CB', paddingTop: '1rem' }}>
                <div style={{ width: 36, height: 36, borderRadius: '50%', background: '#3D2420', color: '#EDD5CB', display: 'flex', alignItems: 'center', justifyContent: 'center', fontFamily: 'DM Sans, sans-serif', fontWeight: 700, fontSize: '0.9rem', flexShrink: 0 }}>{t.avatar}</div>
                <div>
                  <div style={{ fontFamily: 'DM Sans, sans-serif', fontWeight: 600, fontSize: '0.875rem', color: '#3D2420' }}>{t.name}</div>
                  <div style={{ fontFamily: 'DM Sans, sans-serif', fontSize: '0.75rem', color: '#9A7A73' }}>{t.event}</div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Progress bar */}
        {isScrollable && (
          <div style={{ width: 200, height: 4, background: '#EDD5CB', borderRadius: 9999, margin: '1.5rem auto 0', position: 'relative', overflow: 'hidden' }}>
            <div style={{ position: 'absolute', top: 0, left: `${scrollData.left}%`, width: `${scrollData.width}%`, height: '100%', background: '#B5735F', borderRadius: 9999, transition: 'left 0.1s ease-out' }} />
          </div>
        )}

        {/* Rating summary */}
        <div style={{ textAlign: 'center', marginTop: '2rem' }}>
          <div style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem', background: '#FDF5F0', border: '1px solid #EDD5CB', borderRadius: '9999px', padding: '0.625rem 1.5rem' }}>
            <span style={{ color: '#B5735F', fontWeight: 700 }}>★</span>
            <span style={{ fontFamily: 'Cormorant Garamond, serif', fontSize: '1.25rem', fontWeight: 700, color: '#3D2420' }}>4.9</span>
            <span style={{ fontFamily: 'DM Sans, sans-serif', fontSize: '0.8rem', color: '#9A7A73' }}>dari Google Maps · Ulasan Terverifikasi</span>
          </div>
        </div>
      </div>
    </section>
  );
}
