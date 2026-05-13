'use client';
import { useState } from 'react';
import styles from './pricelist.module.css';

/* ─────────────── DATA ─────────────── */
const makeupOnlyItems = [
  {
    title: 'Siraman',
    price: 'Rp 850.000',
    includes: [
      'Make up', 'Hijab do', 'Softlens', 'Disposable kit (gratis)',
    ],
  },
  {
    title: 'Engagement',
    price: 'Rp 850.000',
    includes: [
      'Make up', 'Hijab do', 'Softlens', 'Disposable kit (gratis)',
    ],
  },
  {
    title: 'Akad / Pemberkatan',
    price: 'Rp 1.350.000',
    includes: [
      'Make up', 'Hijab do', 'Softlens', 'Disposable kit (gratis)',
    ],
  },
  {
    title: 'Akad & Resepsi',
    price: 'Rp 1.500.000',
    includes: [
      'Make up', 'Retouch', 'Hijab do max 2x', 'Softlens',
    ],
  },
];

const makeupOnlyTnc = [
  'Product mix Highend',
  'Softlens normal/minus sama (beda minus dikenakan charge)',
  'Pricelist Akad/Pemberkatan & Resepsi berlaku di hari yang sama (jika beda hari dikenakan charge)',
  'Request fresh melati dikenakan charge',
  'Exclude Hair Stylist (khusus Non Muslim) start from Rp 500.000',
  'Pengerjaan make up sekitar 1,5–2 jam',
  'Standby di lokasi untuk retouch maksimal 4 jam',
  'Luar area Batur dikenakan charge transport',
];

const weddingPackages = [
  {
    name: 'Intimate Package',
    subtitle: 'Make Up Akad',
    price: 'Rp 3.000.000',
    popular: false,
    color: '#FDF5F0',
    includes: [
      'Make up Akad only (No Retouch)',
      'Disposable kit',
      'Softlens (normal/minus sama)',
      'Sepasang attire Akad (Jas & Gaun adat/modern/international)',
      'Aksesoris wanita lengkap (sepatu, veil, mahkota zircon premium)',
      'Hijab/hair do bride',
      'Melati muslim biasa',
      'White/Nude/Maroon henna (include kuku palsu)',
    ],
  },
  {
    name: 'Silver Package',
    subtitle: 'Make Up Akad & Resepsi',
    price: 'Rp 4.500.000',
    popular: true,
    color: '#FDF5F0',
    includes: [
      'Makeup akad',
      'Retouch resepsi',
      'Manekin & Robe bride',
      'Sepasang attire Akad (Adat/Modern/International)',
      'Sepasang Attire Resepsi (Adat/Modern/International)',
      'Aksesoris wanita lengkap (sepatu, veil, mahkota zircon premium)',
      'Hijab/hair do bride',
      'Softlens (normal/minus sama)',
      'White/Nude/Maroon henna (include kuku palsu)',
      'Fresh Melati muslim sepasang',
    ],
  },
  {
    name: 'Noir Package',
    subtitle: 'Akad + Fotografer',
    price: 'Rp 5.800.000',
    popular: false,
    color: '#FDF5F0',
    includes: [
      'Make up Akad only (No Retouch)',
      'Softlens (normal/minus)',
      'Sepasang attire Akad (Jas & Gaun adat/modern)',
      'Aksesoris wanita lengkap',
      'Hijab/hair do bride',
      'Melati muslim biasa + Henna & kuku palsu',
      'Decoration akad P 3–4m T 3m + Artificial flowers',
      'Sofa bride & Taman + Karpet permadani',
      'Fotografer 5 jam kerja',
      '150++ edited photo + Unlimited shot + Flashdisk',
      'Cetak 80 foto 4R + Album',
    ],
    addons: [
      'Video cinematic (2–3 menit) +Rp 1.300.000',
      'Video Teaser (60–90 detik) +Rp 1.000.000',
    ],
  },
  {
    name: 'Aysha Package',
    subtitle: 'Akad & Resepsi + Dekorasi + FG & VG',
    price: 'Rp 9.850.000',
    popular: false,
    color: '#FDF5F0',
    includes: [
      'Makeup akad + Retouch resepsi',
      'Manekin & Robe bride',
      'Sepasang attire Akad & Resepsi (Adat/Modern)',
      'Aksesoris wanita lengkap (sepatu, veil, mahkota zircon)',
      'Hijab/hair do bride',
      'Softlens (normal/minus sama)',
      'Henna & kuku palsu + Melati muslim biasa',
      'Decoration di tenda P 4–6 T 3m + Artificial flowers + Garden decoration',
      'Sofa bride & kursi orang tua + Lantai melamin + Karpet permadani',
      'Fotografer & Videografer (3–4 team) Full day 8+ jam',
      '300++ edited photo + Unlimited shot + All file on flashdisk',
      'Teaser video (60–90 detik) + Exclusive printed album kolase',
    ],
  },
  {
    name: 'Delisa Package',
    subtitle: 'Paket Lengkap Premium',
    price: 'Rp 12.500.000',
    popular: false,
    color: '#FDF5F0',
    includes: [
      'Makeup akad + Retouch resepsi',
      'Manekin & Robe bride',
      'Sepasang attire Akad & Resepsi (Adat/Modern/International)',
      'Aksesoris wanita lengkap (sepatu, veil, mahkota zircon)',
      'Hijab/hair do bride',
      '2 Softlens (bisa req beda warna)',
      'White/Nude/Maroon henna + kuku palsu',
      'Melati muslim biasa',
      'Make up 2 ibu + Dua pasang baju ortu (kebaya + Jas) + Hijab do 2 ibu',
      'Decoration tenda/gedung P 6–8 T 3m + Artificial flowers + Garden decoration',
      'Sofa bride + Kursi ortu & domas + Welcome gate Mirror selfie',
      'Lantai melamin + Karpet permadani + Handbouquet',
      'Fotografer & Videografer (3–4 team) Full day 8 jam',
      'Cinematic video (2–3 menit) + 450++ edited photo',
      'Unlimited shot + All file on flashdisk',
      'Exclusive printed album kolase',
      'Cetak 120 foto 4R + album + Cetak 12R + frame',
    ],
  },
];

const additionalServices = [
  { name: 'Make up Mom Bride', price: 'Rp 175.000', note: 'by team' },
  { name: 'Make up Anak TK/SD', price: 'Rp 85.000', note: 'by team' },
  { name: 'Make up Sister Bride (Remaja)', price: 'Rp 135.000', note: 'by team' },
  { name: 'Make up Sister Bride Dewasa', price: 'Rp 185.000', note: 'by team' },
  { name: 'Handbouquet Full Fresh Flower', price: 'Charge tambahan', note: 'sesuai request' },
  { name: 'Tambahan set meja & kursi akad', price: 'Rp 250.000', note: 'lesehan Rp 100.000' },
  { name: 'Upgrade decoration mix flower fresh', price: 'Rp 500.000 – 1jt', note: 'tergantung request' },
];

const weddingTnc = [
  'DP Fix tanggal Rp. 100.000',
  'Untuk client yang sudah DP dan cancel sepihak maka DP hangus kecuali meninggal dunia. Apabila pihak vendor cancel maka DP akan kami kembalikan.',
  'Harga di atas belum termasuk transportasi MUA team, FG & Dekor apabila jauh dari lokasi utama kami.',
  'Jika ada item yang tidak diambil (misal henna, baju ortu dll) maka ada pengurangan harga dari paket.',
  'Jika ada request pembuatan gaun disarankan H-3 bulan konsultasi.',
  'Jika waktu shalat telah tiba dan bride akan shalat dan sudah batal wudhu, maka team akan bantu menghapus total dan make up ulang sesuai S&K dan dikenakan charge tambahan Rp. 200.000.',
];

const tabs = ['Make Up Only', 'Wedding Package', 'Tambahan & T&C'];

/* ─────────────── COMPONENT ─────────────── */
export default function PricelistClient() {
  const [activeTab, setActiveTab] = useState(0);

  return (
    <>
      {/* ── Hero ── */}
      <section className={styles.hero}>
        <div className={styles.heroInner}>
          <span className={styles.heroLabel}>Cacalovas × Cacalovas Attire</span>
          <h1 className={styles.heroTitle}>
            Wedding Pricelist <em>2026</em>
          </h1>
          <p className={styles.heroDesc}>
            Paket spesial kolaborasi dengan Decoration & Fotografer.<br />
            Melayani Purwokerto · Banjarnegara · Wonosobo.
          </p>
        </div>
      </section>

      {/* ── Notice "Dearest" ── */}
      <section className={styles.noticeSection}>
        <div className={styles.container}>
          <div className={styles.noticeCard}>
            <div className={styles.noticeIcon}>🌸</div>
            <div>
              <h2 className={styles.noticeTitle}>Dearest,</h2>
              <p className={styles.noticeText}>
                Mohon maaf atas ketidaknyamanannya. Untuk saat ini Cacalovas{' '}
                <strong className={styles.noticeRed}>tidak menerima</strong> make up prewedding/couple season.
                Serta customer muslimah dengan request adatan paes, hair do (open hijab).
                Khusus hairdo bisa kami kerjakan berlaku untuk{' '}
                <strong className={styles.noticeGold}>non muslim</strong> saja.
              </p>
              <p className={styles.noticeSub}>Mohon dimengerti ya dear, Thankyou! ^^</p>
              <p className={styles.noticeCredit}>@cacalovas × @cacalovas.attire</p>
            </div>
          </div>
        </div>
      </section>

      {/* ── Tabs ── */}
      <section className={styles.tabSection}>
        <div className={styles.container}>
          <div className={styles.tabs}>
            {tabs.map((t, i) => (
              <button
                key={t}
                className={`${styles.tab} ${activeTab === i ? styles.tabActive : ''}`}
                onClick={() => setActiveTab(i)}
                id={`pricelist-tab-${i}`}
              >
                {t}
              </button>
            ))}
          </div>

          {/* ── Tab 0: Make Up Only ── */}
          {activeTab === 0 && (
            <div className={styles.tabContent}>
              <div className={styles.tabHeader}>
                <h2 className={styles.tabTitle}>Pricelist Make Up Only</h2>
                <p className={styles.tabSubtitle}>Harga sudah include Hijab do & Softlens</p>
              </div>

              <div className={styles.muoGrid}>
                {makeupOnlyItems.map((item) => (
                  <div key={item.title} className={styles.muoCard}>
                    <div className={styles.muoTop}>
                      <h3 className={styles.muoTitle}>{item.title}</h3>
                      <span className={styles.muoPrice}>{item.price}</span>
                    </div>
                    <ul className={styles.includeList}>
                      {item.includes.map((inc) => (
                        <li key={inc}>{inc}</li>
                      ))}
                    </ul>
                    <a
                      href={`https://wa.me/6285166662347?text=Halo%20Cacalovas%2C%20saya%20ingin%20tanya%20paket%20${encodeURIComponent(item.title)}`}
                      className={styles.waBtn}
                      target="_blank" rel="noopener noreferrer"
                    >
                      Tanya via WhatsApp →
                    </a>
                  </div>
                ))}
              </div>

              {/* TnC */}
              <div className={styles.tncBox}>
                <h3 className={styles.tncTitle}>Terms &amp; Conditions</h3>
                <ul className={styles.tncList}>
                  {makeupOnlyTnc.map((t) => (
                    <li key={t}>{t}</li>
                  ))}
                </ul>
              </div>
            </div>
          )}

          {/* ── Tab 1: Wedding Package ── */}
          {activeTab === 1 && (
            <div className={styles.tabContent}>
              <div className={styles.tabHeader}>
                <h2 className={styles.tabTitle}>Wedding Package Pricelist</h2>
                <p className={styles.tabSubtitle}>Kolaborasi spesial dengan Decoration &amp; Fotografer @noy.decoration</p>
              </div>

              <div className={styles.weddingGrid}>
                {weddingPackages.map((pkg) => (
                  <div key={pkg.name} className={`${styles.pkgCard} ${pkg.popular ? styles.pkgPopular : ''}`}>
                    {pkg.popular && <div className={styles.pkgBadge}>Most Popular</div>}
                    <div className={styles.pkgHeader}>
                      <div>
                        <h3 className={styles.pkgName}>{pkg.name}</h3>
                        <p className={styles.pkgSubtitle}>{pkg.subtitle}</p>
                      </div>
                      <span className={styles.pkgPrice}>{pkg.price}</span>
                    </div>
                    <ul className={styles.pkgList}>
                      {pkg.includes.map((inc) => (
                        <li key={inc}>{inc}</li>
                      ))}
                    </ul>
                    {pkg.addons && (
                      <div className={styles.addonBox}>
                        <span className={styles.addonLabel}>Add-on videografer:</span>
                        {pkg.addons.map((a) => <p key={a} className={styles.addonItem}>+ {a}</p>)}
                      </div>
                    )}
                    <a
                      href={`https://wa.me/6285166662347?text=Halo%20Cacalovas%2C%20saya%20tertarik%20dengan%20${encodeURIComponent(pkg.name)}`}
                      className={`${styles.waBtn} ${pkg.popular ? styles.waBtnPrimary : ''}`}
                      target="_blank" rel="noopener noreferrer"
                    >
                      Pilih Paket Ini →
                    </a>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* ── Tab 2: Tambahan & T&C ── */}
          {activeTab === 2 && (
            <div className={styles.tabContent}>
              {/* Additional Services */}
              <div className={styles.tabHeader}>
                <h2 className={styles.tabTitle}>Additional Service</h2>
                <p className={styles.tabSubtitle}>Layanan tambahan di luar paket utama</p>
              </div>

              <div className={styles.addServiceGrid}>
                {additionalServices.map((s) => (
                  <div key={s.name} className={styles.addServiceCard}>
                    <div className={styles.addServiceName}>{s.name}</div>
                    <div className={styles.addServiceRight}>
                      <span className={styles.addServicePrice}>{s.price}</span>
                      <span className={styles.addServiceNote}>{s.note}</span>
                    </div>
                  </div>
                ))}
                <div className={styles.addServiceNote2}>
                  * Portofolio decoration bisa cek di Instagram <a href="https://instagram.com/noydekor" target="_blank" rel="noopener noreferrer" style={{ color: '#B5735F' }}>@noydekor</a>
                </div>
              </div>

              {/* Wedding T&C */}
              <div className={styles.tncBox} style={{ marginTop: '2.5rem' }}>
                <h3 className={styles.tncTitle}>⚠️ Penting — Terms &amp; Conditions Wedding Package</h3>
                <ul className={styles.tncList}>
                  {weddingTnc.map((t) => (
                    <li key={t}>{t}</li>
                  ))}
                </ul>
              </div>
            </div>
          )}
        </div>
      </section>

      {/* ── Bottom CTA ── */}
      <section className={styles.ctaSection}>
        <div className={styles.ctaInner}>
          <h2 className={styles.ctaTitle}>Ada pertanyaan tentang harga?</h2>
          <p className={styles.ctaDesc}>Hubungi kami langsung via WhatsApp untuk konsultasi gratis dan booking jadwal.</p>
          <a
            href="https://wa.me/6285166662347?text=Halo%20Cacalovas%2C%20saya%20ingin%20konsultasi%20pricelist%202026"
            className={styles.ctaBtn}
            target="_blank" rel="noopener noreferrer"
            id="pricelist-cta-btn"
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
            </svg>
            Chat WhatsApp Sekarang
          </a>
        </div>
      </section>
    </>
  );
}
