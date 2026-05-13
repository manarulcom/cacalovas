import Image from 'next/image';
import ScrollLink from '@/components/ScrollLink';
import styles from './HeroSection.module.css';

export default function HeroSection() {
  return (
    <section className={styles.hero} id="hero">
      {/* Decorative background elements */}
      <div className={styles.decoBg}>
        <div className={styles.decoRingOuter} />
        <div className={styles.decoRingInner} />
        <div className={styles.decoOrb1} />
        <div className={styles.decoOrb2} />
        <div className={styles.decoOrb3} />
        <div className={styles.decoDot1} />
        <div className={styles.decoDot2} />
        <div className={styles.decoDot3} />
        <div className={styles.decoDot4} />
      </div>

      <div className={styles.inner}>
        {/* Photo with ring */}
        <div className={styles.iconWrap}>
          <svg className={styles.iconRing} viewBox="0 0 180 180" fill="none">
            <circle cx="90" cy="90" r="88" stroke="rgba(181, 115, 95, 0.35)" strokeWidth="1.5" strokeDasharray="6 6" strokeLinecap="round" />
          </svg>
          <div className={styles.iconCircle}>
            <Image
              src="/cacalovas-hero.png"
              alt="Cacalovas – Make Up Artist"
              fill
              sizes="124px"
              style={{ objectFit: 'cover', objectPosition: 'center top' }}
              priority
            />
          </div>
        </div>

        {/* Brand Name */}
        <div className={styles.brandName}>Cacalovas</div>

        {/* Badge */}
        <div className={styles.badge}>
          <span className={styles.badgeDot} />
          Professional Make Up Artist
          <span className={styles.badgeDot} />
        </div>

        {/* Headline */}
        <h1 className={styles.title}>
          Riasan terbaik untuk<br />
          <em>satu hari</em> yang tak terulang.
        </h1>

        <p className={styles.desc}>
          <em>Bersertifikat, berpengalaman, dan sepenuh hati.</em>
        </p>

        <div className={styles.ctas}>
          <ScrollLink
            href="#tentang"
            className={styles.btnPrimary}
            id="hero-tentang-btn"
          >
            About Me
          </ScrollLink>
          <ScrollLink href="#signature" className={styles.btnOutline}>
            Signatures
          </ScrollLink>
        </div>

      </div>
    </section>
  );
}
