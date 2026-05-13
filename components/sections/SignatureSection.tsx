'use client';
import { useRef, useState, useEffect } from 'react';
import Image from 'next/image';
import AnimateIn from '@/components/AnimateIn';
import styles from './SignatureSection.module.css';

type SigItem = { id: string; name: string; image_url: string };

const FALLBACK = [
  { id: '1', name: 'Flawless',       image_url: '/portfolio/flawless.jpg' },
  { id: '2', name: 'Soft Glam',      image_url: '/portfolio/soft glam.jpg' },
  { id: '3', name: 'Thai x Douyin',  image_url: '/portfolio/thai x douyin.jpg' },
  { id: '4', name: 'Douyin',         image_url: '/portfolio/douyin.jpg' },
  { id: '5', name: 'Low Visual',     image_url: '/portfolio/low visual.jpg' },
  { id: '6', name: 'Glam',           image_url: '/portfolio/glam.jpg' },
];

export default function SignatureSection() {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [scrollData, setScrollData] = useState({ width: 100, left: 0 });
  const [isScrollable, setIsScrollable] = useState(false);
  const [sigItems] = useState<SigItem[]>(FALLBACK);

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
  }, [sigItems]);

  return (
    <section className={styles.section} id="signature">
      {/* Header */}
      <AnimateIn direction="up">
        <div className={styles.header}>
          <div className="section-label-line">
            <span className="section-label">Our Signatures</span>
          </div>
          <h2 className="section-title">Gaya Riasan Andalan Cacalovas</h2>
        </div>
      </AnimateIn>

      {/* Scroll rail */}
      <AnimateIn direction="up" delay={100}>
        <div className={styles.railWrap}>
          <div className={styles.rail} ref={scrollRef} onScroll={handleScroll}>
            {sigItems.map((s) => (
              <div key={s.id} className={styles.card}>
                <div className={styles.imgWrap}>
                  <Image
                    src={s.image_url}
                    alt={`${s.name} – Gaya Riasan Cacalovas`}
                    fill
                    sizes="(max-width: 768px) 75vw, 31vw"
                    className={styles.cardImage}
                  />
                  <div className={styles.overlay}>
                    <span className={styles.cardName}>{s.name}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className={styles.fadeRight} />
        </div>

        {/* Custom Progress Bar */}
        {isScrollable && (
          <div className={styles.progressWrap}>
            <div
              className={styles.progressThumb}
              style={{ width: `${scrollData.width}%`, left: `${scrollData.left}%` }}
            />
          </div>
        )}
      </AnimateIn>

      {/* Subtext */}
      <AnimateIn direction="up" delay={150}>
        <div className={styles.subtext}>
          We can do : Soft flawless • Fresh • Thai x Douyin • Low visual • Bold • Toasty and Timeless look
        </div>
      </AnimateIn>

      {/* Bottom CTA */}
      <AnimateIn direction="up" delay={200}>
        <div className={styles.bottom}>
          <a
            href="https://wa.me/6285166662347?text=Halo%20Cacalovas%2C%20saya%20ingin%20konsultasi%20gaya%20riasan"
            className={styles.ctaBtn} target="_blank" rel="noopener noreferrer"
            id="signature-wa-btn"
          >
            Konsultasi Gaya Riasan
          </a>
        </div>
      </AnimateIn>
    </section>
  );
}

