'use client';
import { useState } from 'react';
import Image from 'next/image';
import styles from './BeforeAfterSection.module.css';

const items = [
  {
    before: '/before-after-1.png',
    after: '/before-after-1.png',
    label: 'Riasan Pengantin',
    tag: 'Wedding',
  },
  {
    before: '/before-after-2.png',
    after: '/before-after-2.png',
    label: 'Riasan Wisuda',
    tag: 'Wisuda',
  },
];

function SliderCard({ item }: { item: typeof items[0] }) {
  const [pos, setPos] = useState(50);

  return (
    <div className={styles.card}>
      <div
        className={styles.sliderWrap}
        onMouseMove={(e) => {
          const rect = e.currentTarget.getBoundingClientRect();
          setPos(Math.min(95, Math.max(5, ((e.clientX - rect.left) / rect.width) * 100)));
        }}
        onTouchMove={(e) => {
          const rect = e.currentTarget.getBoundingClientRect();
          setPos(Math.min(95, Math.max(5, ((e.touches[0].clientX - rect.left) / rect.width) * 100)));
        }}
      >
        {/* Base Layer: After */}
        <div className={styles.imgBase}>
          <Image src={item.after} alt={`After - ${item.label}`} fill sizes="(max-width: 768px) 100vw, 50vw" style={{ objectFit: 'cover' }} />
          <span className={styles.labelAfter}>After</span>
        </div>

        {/* Overlay Layer: Before (Clipped) */}
        <div className={styles.imgOverlay} style={{ clipPath: `polygon(0 0, ${pos}% 0, ${pos}% 100%, 0 100%)` }}>
          <Image src={item.before} alt={`Before - ${item.label}`} fill sizes="(max-width: 768px) 100vw, 50vw" style={{ objectFit: 'cover' }} />
          <span className={styles.labelBefore}>Before</span>
        </div>

        {/* Divider & Handle */}
        <div className={styles.divider} style={{ left: `${pos}%` }}>
          <div className={styles.dividerHandle}>
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
              <path d="M8 4l-4 8 4 8M16 4l4 8-4 8" />
            </svg>
          </div>
        </div>

        <div className={styles.dragHint}>← Geser →</div>
      </div>

      <div className={styles.cardInfo}>
        <span className={styles.tag}>{item.tag}</span>
        <span className={styles.cardLabel}>{item.label}</span>
      </div>
    </div>
  );
}

export default function BeforeAfterSection() {
  return (
    <section className={styles.section} id="transformasi">
      <div className={styles.container}>
        <div className={styles.header}>
          <div className="section-label-line">
            <span className="section-label">Transformasi</span>
          </div>
          <h2 className="section-title">Before &amp; After</h2>
          <p className="section-desc" style={{ margin: '0 auto' }}>
            Geser gambar untuk melihat transformasi nyata dari tangan Cacalovas.
          </p>
        </div>

        <div className={styles.grid}>
          {items.map((item, i) => (
            <SliderCard key={i} item={item} />
          ))}
        </div>

        <div className={styles.note}>
          * Foto portofolio asli akan ditampilkan setelah mendapat izin klien.
        </div>
      </div>
    </section>
  );
}
