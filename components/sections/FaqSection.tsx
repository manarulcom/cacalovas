'use client';
import { useState } from 'react';
import styles from './FaqSection.module.css';

const faqs = [
  { q: 'Berapa harga jasa make up Cacalovas?', a: 'Harga bervariasi tergantung jenis layanan dan lokasi. Hubungi kami via WhatsApp untuk penawaran terbaik sesuai kebutuhanmu.' },
  { q: 'Apakah Cacalovas melayani di luar kota?', a: 'Ya, kami melayani Purwokerto, Banjarnegara, dan Wonosobo. Untuk lokasi lain di area sekitar, silakan konsultasi terlebih dahulu.' },
  { q: 'Berapa lama proses riasan?', a: 'Rata-rata 1.5–2.5 jam tergantung kompleksitas riasan dan hair styling. Untuk pernikahan, disarankan mulai lebih pagi.' },
  { q: 'Bisakah request riasan sesuai referensi?', a: 'Tentu! Kami sangat welcome dengan reference foto. Konsultasi bisa dilakukan via WhatsApp sebelum hari H.' },
  { q: 'Berapa jauh hari sebaiknya booking?', a: 'Minimal 2–4 minggu sebelumnya, terutama untuk pernikahan dan prom night di musim ramai.' },
  { q: 'Apakah tersedia layanan hair styling?', a: 'Ya, tersedia sebagai paket tambahan. Tanyakan langsung ke kami untuk detail paket dan harganya.' },
];

export default function FaqSection() {
  const [open, setOpen] = useState<number | null>(null);
  return (
    <section className={styles.section} id="faq">
      <div className={styles.container}>
        <div className={styles.header}>
          <div className="section-label-line">
            <span className="section-label">FAQ</span>
          </div>
          <h2 className="section-title">Pertanyaan Umum</h2>
        </div>
        <div className={styles.list}>
          {faqs.map((f, i) => (
            <div key={i} className={`${styles.item} ${open === i ? styles.open : ''}`}>
              <button className={styles.question} onClick={() => setOpen(open === i ? null : i)} id={`faq-${i}`}>
                <span>{f.q}</span>
                <span className={styles.icon}>{open === i ? '−' : '+'}</span>
              </button>
              <div className={styles.answer}><p>{f.a}</p></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
