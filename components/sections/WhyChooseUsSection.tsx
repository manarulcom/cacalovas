import styles from './WhyChooseUsSection.module.css';

const comparisons = [
  {
    cacalovas: 'Menggunakan kosmetik high-end & original',
    others: 'Menggunakan produk standar atau campuran yang tidak jelas'
  },
  {
    cacalovas: 'Alat makeup selalu steril, brush dicuci rutin',
    others: 'Alat jarang dibersihkan, berisiko memicu jerawat'
  },
  {
    cacalovas: 'Hasil riasan flawless, ringan, & tahan lama',
    others: 'Riasan terasa tebal (dempul) dan mudah crack'
  },
  {
    cacalovas: 'Gaya makeup timeless, natural, dan elegan',
    others: 'Gaya riasan berlebihan, menor, atau terlihat tua'
  },
  {
    cacalovas: 'Harga transparan, tanpa biaya tersembunyi',
    others: 'Sering ada tambahan biaya mendadak di hari H'
  },
  {
    cacalovas: 'Sangat tepat waktu & profesional',
    others: 'Jadwal sering molor dan kurang terorganisir'
  },
  {
    cacalovas: 'Konsultasi detail, ramah, dan solutif',
    others: 'Kurang komunikatif dan memaksakan kehendak sendiri'
  }
];

export default function WhyChooseUsSection() {
  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <div className={styles.header}>
          <span className="section-label">Perbandingan</span>
          <h2 className={styles.title}>Mengapa Memilih Cacalovas?</h2>
        </div>

        <div className={styles.tableWrap}>
          {/* Table Header */}
          <div className={`${styles.row} ${styles.headerRow}`}>
            <div className={styles.colLeft}>
              <div className={styles.brandBadge}>
                <span className={styles.star}>✦</span> CACALOVAS
              </div>
            </div>
            <div className={styles.colRight}>
              <span className={styles.othersLabel}>MUA LAINNYA</span>
            </div>
          </div>

          {/* Table Body */}
          {comparisons.map((item, i) => (
            <div key={i} className={styles.row}>
              <div className={styles.colLeft}>
                <svg className={styles.checkIcon} viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
                <span className={styles.goodText}>{item.cacalovas}</span>
              </div>
              <div className={styles.colRight}>
                <svg className={styles.crossIcon} viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" />
                </svg>
                <span className={styles.badText}>{item.others}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
