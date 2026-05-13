'use client';
import { useRef, useState, useEffect } from 'react';
import styles from './TestimoniSection.module.css';

const testimoni = [
  { name: 'Nur Aimmatun Nadlifah', event: 'Google Maps', text: '“Tempatnya bagus banget dan aesthetic, fasilitasnya lengkap, dengan view pemandangan yang cantik, dan pastinya bikin nyaman bangett.”', rating: 5, avatar: 'N' },
  { name: 'ri. riarie', event: 'Google Maps', text: '“Rapih dan bersih banget, viewnyaa oke banget, layanannya jugaa lengkap dan friendly jugaa jadi seru. Ga takut ninggalin pets disini”', rating: 5, avatar: 'R' },
  { name: 'Sinta Permata', event: 'Google Maps', text: '“Keren banget hasilnya! Prom night aku jadi lebih berkesan. Pasti bakal booking lagi untuk acara berikutnya.”', rating: 5, avatar: 'S' },
  { name: 'Aulia Rahma', event: 'Google Maps', text: '“Riasannya cantik banget dan tahan lama seharian! Sangat profesional dan tepat waktu. Highly recommended!”', rating: 5, avatar: 'A' },
];

export default function TestimoniSection() {
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
    <section className={styles.section} id="testimoni">
      <div className={styles.container}>
        <div className={styles.header}>
          <div className="section-label-line">
            <span className="section-label">Kata Mereka</span>
          </div>
          <h2 className="section-title">Testimoni</h2>
        </div>

        {/* Scrollable Container */}
        <div className={styles.scrollWrap} ref={scrollRef} onScroll={handleScroll}>
          <div className={styles.scrollInner}>
            {testimoni.map((t, i) => (
              <div key={i} className={styles.card}>
                <div className={styles.stars}>
                  {'★'.repeat(t.rating)}
                </div>
                <p className={styles.text}>{t.text}</p>
                <div className={styles.authorDivider} />
                <div className={styles.author}>
                  <div className={styles.avatar}>{t.avatar}</div>
                  <div>
                    <div className={styles.name}>{t.name}</div>
                    <div className={styles.meta}>{t.event}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Custom Progress Bar (Scrollbar) */}
        {isScrollable && (
          <div className={styles.progressWrap}>
            <div 
              className={styles.progressThumb} 
              style={{ width: `${scrollData.width}%`, left: `${scrollData.left}%` }} 
            />
          </div>
        )}

        {/* Summary Card */}
        <div className={styles.summaryWrap}>
          <div className={styles.summaryCard}>
            <span className={styles.summaryStar}>★</span>
            <span className={styles.summaryScore}>4.9</span>
            <span className={styles.summaryText}>dari Google Maps · Ulasan Terverifikasi</span>
          </div>
        </div>

      </div>
    </section>
  );
}
