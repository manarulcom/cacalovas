import Link from 'next/link';
import styles from './CityLinksSection.module.css';

const cities = [
  { href: '/mua-purwokerto', name: 'MUA Purwokerto', desc: 'Make Up Artist profesional di Purwokerto & sekitarnya.', emoji: '🏙️' },
  { href: '/mua-banjarnegara', name: 'MUA Banjarnegara', desc: 'Jasa riasan terpercaya untuk momen spesial di Banjarnegara.', emoji: '🌿' },
  { href: '/mua-wonosobo', name: 'MUA Wonosobo', desc: 'Make Up Artist elegan melayani klien di Wonosobo.', emoji: '🏔️' },
];

export default function CityLinksSection() {
  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <div className={styles.header}>
          <div className="section-label-line">
            <span className="section-label">Area Layanan</span>
          </div>
          <h2 className="section-title">3 Kota, 1 Standar Kualitas</h2>
        </div>
        <div className={styles.grid}>
          {cities.map((c) => (
            <Link href={c.href} key={c.href} className={styles.card}>
              <span className={styles.emoji}>{c.emoji}</span>
              <h3 className={styles.cityName}>{c.name}</h3>
              <p className={styles.cityDesc}>{c.desc}</p>
              <span className={styles.link}>Selengkapnya →</span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
