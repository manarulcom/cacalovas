import Link from 'next/link';
import styles from './ServicesSection.module.css';

const categories = [
  {
    title: 'Make Up Only',
    desc: 'Graduation, Party & Photoshoot',
    icon: '✨',
    link: '/pricelist',
    gradient: 'linear-gradient(135deg, #F2C4B3 0%, #D89880 100%)',
    textColor: '#3D2420',
    iconBg: 'rgba(255, 255, 255, 0.4)',
    shadow: '0 12px 24px rgba(216, 152, 128, 0.25)'
  },
  {
    title: 'Engagement / Lamaran',
    desc: 'Riasan eksklusif untuk momen pertunanganmu',
    icon: '💍',
    link: '/pricelist',
    gradient: 'linear-gradient(135deg, #4A302B 0%, #251613 100%)',
    textColor: '#FFFFFF',
    iconBg: 'rgba(255, 255, 255, 0.1)',
    shadow: '0 12px 24px rgba(37, 22, 19, 0.25)'
  },
  {
    title: 'Wedding Package',
    desc: 'Paket riasan pengantin komprehensif',
    icon: '👑',
    link: '/pricelist',
    gradient: 'linear-gradient(135deg, #E6C181 0%, #B88E45 100%)',
    textColor: '#2A1A0B',
    iconBg: 'rgba(255, 255, 255, 0.35)',
    shadow: '0 12px 24px rgba(184, 142, 69, 0.25)'
  }
];

export default function ServicesSection() {
  return (
    <section className={styles.section} id="layanan">
      <div className={styles.container}>
        <div className={styles.header}>
          <span className="section-label">Layanan Kami</span>
          <h2 className={styles.title}>Layanan Cacalovas</h2>
          <p className={styles.subtitle}>
            Pilih layanan yang sesuai dengan kebutuhanmu.
          </p>
        </div>

        <div className={styles.grid}>
          {categories.map((cat, idx) => (
            <Link 
              key={idx} 
              href={cat.link} 
              className={styles.pillCard}
              style={{ 
                background: cat.gradient,
                color: cat.textColor,
                boxShadow: cat.shadow
              }}
            >
              <div className={styles.pillIconBox} style={{ background: cat.iconBg }}>
                {cat.icon}
              </div>
              
              <div className={styles.pillText}>
                <h3 className={styles.cardTitle}>{cat.title}</h3>
                <p className={styles.cardDesc} style={{ color: cat.textColor, opacity: 0.85 }}>
                  {cat.desc}
                </p>
              </div>
            </Link>
          ))}
        </div>
        
        <div className={styles.bottomCta}>
          <Link href="/pricelist" className={styles.btnOutline}>
            Lihat Detail Pricelist Lengkap
          </Link>
        </div>

      </div>
    </section>
  );
}
