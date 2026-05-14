import Image from 'next/image';
import styles from './AboutSection.module.css';
import CountUp from '@/components/CountUp';
import AnimateIn from '@/components/AnimateIn';

const certifications = [
  '@pu.tik', '@makeupbyeriska', '@rizkabawono', '@erialsr.makeupart', '@bynaqyara'
];

export default function AboutSection() {
  return (
    <section className={styles.about} id="tentang">
      <div className={styles.container}>
        {/* Image Col */}
        <AnimateIn direction="left" className={styles.imageCol}>
          <span className="section-label" style={{ display: 'block', marginBottom: '1.25rem' }}>Tentang Saya</span>
          <div className={styles.imgCard}>
            <div className={styles.imgPlaceholder}>
              <Image
                src="/cacalovas-hero.png"
                alt="Cacalovas Make Up Artist"
                fill
                sizes="(max-width: 800px) 90vw, 45vw"
                style={{ objectFit: 'cover', objectPosition: 'center top' }}
              />
            </div>
            <div className={styles.imgBadge}>
              <span className={styles.badgeLine}>Gen-Z Signature</span>
              <span className={styles.badgeSub}>Timeless &amp; Natural</span>
            </div>
          </div>
        </AnimateIn>

        {/* Intro Col */}
        <AnimateIn direction="right" delay={150} className={styles.introCol}>
          <div className={styles.textCol}>
            <h2 className={styles.title}>
              Hi, saya <em>Cacalovas!</em>
            </h2>
            <p className={styles.para}>
              Make Up Artist spesialis riasan <strong>timeless &amp; natural</strong> sekaligus dikenal sebagai <strong>Low Visual &amp; Dreamy Skin Specialist</strong>, yang telah berkecimpung di dunia makeup sejak 2018 (usia 18 tahun). Selain sebagai MUA, juga berperan sebagai <strong>konsultan wedding &amp; fashion brides.</strong>
            </p>
            <p className={styles.para}>
              Telah dipercaya oleh ratusan klien di <strong>Purwokerto, Banjarnegara, Wonosobo,</strong> dan <strong>Indonesia</strong> secara umum untuk tampil terbaik di momen paling berharga mereka.
            </p>
          </div>
        </AnimateIn>

        {/* Bottom Col (Certs & Stats) */}
        <AnimateIn direction="up" delay={250} className={styles.bottomCol}>
          <div className={styles.certBlock}>
            <span className={styles.certTitle}>Sertifikasi kursus dari:</span>
            <div className={styles.certList}>
              {certifications.map(c => (
                <span 
                  key={c} 
                  className={styles.certTag}
                >
                  {c}
                </span>
              ))}
            </div>
          </div>

          <div className={styles.stats}>
            {[
              { target: 500, suffix: '+', label: 'Klien' },
              { target: 7, suffix: '+', label: 'Tahun' },
              { target: 49, suffix: '', label: 'Rating', display: <>4.9<span style={{ color: '#F5A623' }}>★</span></> },
            ].map((s) => (
              <div key={s.label} className={styles.stat}>
                <span className={styles.statNum}>
                  {s.display ? s.display : <CountUp target={s.target} suffix={s.suffix} />}
                </span>
                <span className={styles.statLabel}>{s.label}</span>
              </div>
            ))}
          </div>
        </AnimateIn>
      </div>
    </section>
  );
}
