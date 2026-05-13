import styles from './SocialSection.module.css';

export default function SocialSection() {
  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <div className={styles.header}>
          <div className="section-label-line">
            <span className="section-label">Temukan Kami</span>
          </div>
          <h2 className="section-title">Follow Cacalovas</h2>
          <p className="section-desc" style={{ margin: '0 auto' }}>
            Ikuti untuk inspirasi makeup terbaru, behind-the-scenes, dan video transformasi.
          </p>
        </div>
        <div className={styles.cards}>
          <a href="https://www.instagram.com/cacalovas" target="_blank" rel="noopener noreferrer" className={`${styles.card} ${styles.ig}`} id="social-ig-btn">
            <span className={styles.socialIcon}>📸</span>
            <div className={styles.socialName}>Instagram</div>
            <div className={styles.socialHandle}>@cacalovas</div>
            <div className={styles.socialDesc}>Foto portofolio & behind-the-scenes</div>
          </a>
          <a href="https://www.tiktok.com/@cacalovas" target="_blank" rel="noopener noreferrer" className={`${styles.card} ${styles.tt}`} id="social-tiktok-btn">
            <span className={styles.socialIcon}>🎵</span>
            <div className={styles.socialName}>TikTok</div>
            <div className={styles.socialHandle}>@cacalovas</div>
            <div className={styles.socialDesc}>Video tutorial & transformasi makeup</div>
          </a>
        </div>
      </div>
    </section>
  );
}
