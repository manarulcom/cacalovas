'use client';
import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import SignatureSection from '@/components/sections/SignatureSection';
import WhyChooseUsSection from '@/components/sections/WhyChooseUsSection';
import PortfolioSection from '@/components/sections/PortfolioSection';
import aboutStyles from '@/components/sections/AboutSection.module.css';
import CountUp from '@/components/CountUp';
import AnimateIn from '@/components/AnimateIn';

const CITY = 'Wonosobo';
const CITY_AREA = 'Wonosobo, Temanggung, Magelang';
const WA = `https://wa.me/6285166662347?text=${encodeURIComponent(`Halo Cacalovas, saya di Wonosobo ingin booking makeup`)}`;

const services = [
  { title: 'Make Up Only', desc: 'Graduation, Party & Photoshoot di Wonosobo', icon: '✨', gradient: 'linear-gradient(135deg,#F2C4B3,#D89880)', textColor: '#3D2420', iconBg: 'rgba(255,255,255,0.4)' },
  { title: 'Engagement / Lamaran', desc: 'Riasan eksklusif untuk momen pertunangan di Wonosobo', icon: '💍', gradient: 'linear-gradient(135deg,#4A302B,#251613)', textColor: '#FFFFFF', iconBg: 'rgba(255,255,255,0.1)' },
  { title: 'Wedding Package', desc: 'Paket riasan pengantin komprehensif di Wonosobo', icon: '👑', gradient: 'linear-gradient(135deg,#E6C181,#B88E45)', textColor: '#2A1A0B', iconBg: 'rgba(255,255,255,0.35)' },
];

const faqs = [
  { q: 'Berapa harga MUA di Wonosobo?', a: 'Harga MUA Cacalovas di Wonosobo mulai dari Rp 850.000 untuk siraman/engagement, hingga Rp 1.500.000 untuk paket akad & resepsi. Hubungi via WhatsApp untuk konsultasi gratis.' },
  { q: 'Apakah Cacalovas MUA Wonosobo bisa ke lokasi?', a: 'Ya! Kami melayani seluruh area Wonosobo dan sekitarnya termasuk Temanggung dan Magelang. Biaya transport berlaku untuk lokasi yang jauh dari area utama kami.' },
  { q: 'Apakah ada MUA wisuda Wonosobo di Cacalovas?', a: 'Tentu! Cacalovas melayani riasan wisuda di Wonosobo dengan hasil fotogenik dan tahan lama. Booking minimal 2 minggu sebelum hari wisuda.' },
  { q: 'Berapa lama proses riasan MUA Wonosobo?', a: 'Rata-rata 1.5–2.5 jam tergantung kompleksitas riasan. Untuk pernikahan, disarankan mulai lebih pagi agar tidak terburu-buru.' },
  { q: 'Bisakah request riasan sesuai referensi?', a: 'Tentu! Kami sangat welcome dengan reference foto. Konsultasi bisa dilakukan via WhatsApp sebelum hari H.' },
  { q: 'Berapa jauh hari sebaiknya booking?', a: 'Minimal 2–4 minggu sebelumnya, terutama untuk pernikahan dan prom night di musim ramai.' },
];

const certifications = ['@pu.tik', '@makeupbyeriska', '@rizkabawono', '@erialsr.makeupart', '@bynaqyara'];

export default function MUAWonosoboPage() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    name: `Cacalovas – MUA ${CITY}`,
    url: 'https://cacalovas.com/mua-wonosobo',
    telephone: '+6285166662347',
    priceRange: 'Rp 850.000 – Rp 1.500.000',
    address: { '@type': 'PostalAddress', addressLocality: CITY, addressRegion: 'Jawa Tengah', addressCountry: 'ID' },
    geo: { '@type': 'GeoCoordinates', latitude: -7.3606, longitude: 109.9076 },
    areaServed: [{ '@type': 'City', name: 'Wonosobo' }, { '@type': 'City', name: 'Banyumas' }],
    sameAs: ['https://www.instagram.com/cacalovas'],
    aggregateRating: { '@type': 'AggregateRating', ratingValue: '4.9', reviewCount: '87' },
  };

  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map(f => ({ '@type': 'Question', name: f.q, acceptedAnswer: { '@type': 'Answer', text: f.a } })),
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <Navbar />
      <main>

        {/* HERO */}
        <section style={{ background: '#FDF5F0', padding: '9rem 1.5rem 5rem', textAlign: 'center', position: 'relative', overflow: 'hidden' }}>
          <div style={{ position: 'absolute', inset: 0, background: 'radial-gradient(ellipse 80% 60% at 50% 0%, rgba(181,115,95,0.08) 0%, transparent 70%)', pointerEvents: 'none' }} />
          <div style={{ position: 'relative', maxWidth: 680, margin: '0 auto' }}>
            <div style={{ width: 110, height: 110, borderRadius: '50%', overflow: 'hidden', margin: '0 auto 1.5rem', position: 'relative', border: '3px solid #EDD5CB' }}>
              <Image src="/cacalovas-hero.png" alt={`Cacalovas MUA ${CITY}`} fill style={{ objectFit: 'cover', objectPosition: 'center top' }} priority />
            </div>
            <div style={{ fontFamily: 'DM Sans, sans-serif', fontSize: '0.75rem', fontWeight: 600, letterSpacing: '0.25em', textTransform: 'uppercase', color: '#B5735F', marginBottom: '0.75rem' }}>
              Professional Make Up Artist
            </div>
            <h1 style={{ fontFamily: 'Cormorant Garamond, serif', fontSize: 'clamp(2.25rem,6vw,3.5rem)', fontWeight: 600, color: '#3D2420', lineHeight: 1.15, marginBottom: '1rem' }}>
              MUA <em style={{ color: '#B5735F', fontStyle: 'italic' }}>{CITY}</em> Terpercaya
            </h1>
            <p style={{ fontFamily: 'DM Sans, sans-serif', color: '#7A5A53', fontSize: '1rem', lineHeight: 1.8, marginBottom: '0.5rem' }}>
              Cacalovas hadir di {CITY} — spesialis riasan <strong>timeless & natural</strong> untuk pernikahan, wisuda, engagement & event.
            </p>
            <p style={{ fontFamily: 'DM Sans, sans-serif', color: '#9A7A73', fontSize: '0.875rem', marginBottom: '2rem' }}>
              Melayani {CITY_AREA}
            </p>
            <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
              <a href={WA} target="_blank" rel="noopener noreferrer" id="mua-wonosobo-hero-wa"
                style={{ background: '#3D2420', color: '#FDF5F0', padding: '0.875rem 2rem', borderRadius: 9999, fontFamily: 'DM Sans, sans-serif', fontWeight: 700, fontSize: '0.95rem', textDecoration: 'none', display: 'inline-block' }}>
                Book MUA {CITY}
              </a>
              <Link href="/pricelist"
                style={{ background: 'transparent', color: '#3D2420', padding: '0.875rem 2rem', borderRadius: 9999, fontFamily: 'DM Sans, sans-serif', fontWeight: 600, fontSize: '0.95rem', border: '1.5px solid #3D2420', textDecoration: 'none', display: 'inline-block' }}>
                Lihat Pricelist
              </Link>
            </div>
          </div>
        </section>

        {/* ABOUT */}
        <section className={aboutStyles.about}>
          <div className={aboutStyles.container}>
            {/* Image Col */}
            <AnimateIn direction="left" className={aboutStyles.imageCol}>
              <span className="section-label" style={{ display: 'block', marginBottom: '1.25rem' }}>Tentang Saya</span>
              <div className={aboutStyles.imgCard}>
                <div className={aboutStyles.imgPlaceholder}>
                  <Image
                    src="/cacalovas-hero.png"
                    alt={`Cacalovas Make Up Artist ${CITY}`}
                    fill
                    sizes="(max-width: 800px) 90vw, 45vw"
                    style={{ objectFit: 'cover', objectPosition: 'center top' }}
                  />
                </div>
                <div className={aboutStyles.imgBadge}>
                  <span className={aboutStyles.badgeLine}>Gen-Z Signature</span>
                  <span className={aboutStyles.badgeSub}>Timeless &amp; Natural</span>
                </div>
              </div>
            </AnimateIn>

            {/* Intro Col */}
            <AnimateIn direction="right" delay={150} className={aboutStyles.introCol}>
              <div className={aboutStyles.textCol}>
                <h2 className={aboutStyles.title}>
                  Hi, saya <em>Cacalovas!</em>
                </h2>
                <p className={aboutStyles.para}>
                  Make Up Artist spesialis riasan <strong>timeless &amp; natural</strong> yang telah berkecimpung di dunia makeup sejak 2018. Selain sebagai MUA, juga berperan sebagai <strong>konsultan wedding &amp; fashion brides.</strong>
                </p>
                <p className={aboutStyles.para}>
                  Sebagai <strong>MUA {CITY}</strong> terpercaya, telah dipercaya ratusan klien di <strong>{CITY_AREA}</strong> untuk tampil terbaik di momen paling berharga mereka — dari akad nikah hingga wisuda.
                </p>
              </div>
            </AnimateIn>

            {/* Bottom Col (Certs & Stats) */}
            <AnimateIn direction="up" delay={250} className={aboutStyles.bottomCol}>
              <div className={aboutStyles.certBlock}>
                <span className={aboutStyles.certTitle}>Sertifikasi kursus dari:</span>
                <div className={aboutStyles.certList}>
                  {certifications.map(c => (
                    <span key={c} className={aboutStyles.certTag}>{c}</span>
                  ))}
                </div>
              </div>

              <div className={aboutStyles.stats}>
                {[
                  { target: 500, suffix: '+', label: 'Klien' },
                  { target: 7, suffix: '+', label: 'Tahun' },
                  { target: 49, suffix: '', label: 'Rating', display: <>4.9<span style={{ color: '#F5A623' }}>★</span></> },
                ].map((s) => (
                  <div key={s.label} className={aboutStyles.stat}>
                    <span className={aboutStyles.statNum}>
                      {s.display ? s.display : <CountUp target={s.target} suffix={s.suffix} />}
                    </span>
                    <span className={aboutStyles.statLabel}>{s.label}</span>
                  </div>
                ))}
              </div>
            </AnimateIn>
          </div>
        </section>

        {/* SIGNATURE */}
        <SignatureSection />

        {/* PORTFOLIO */}
        <PortfolioSection />

        {/* WHY CHOOSE US */}
        <WhyChooseUsSection />

        {/* SERVICES */}
        <section style={{ background: '#FDF5F0', padding: '5rem 1.5rem' }}>
          <div style={{ maxWidth: 960, margin: '0 auto' }}>
            <div style={{ textAlign: 'center', marginBottom: '2.5rem' }}>
              <span style={{ fontFamily: 'DM Sans, sans-serif', fontSize: '0.7rem', fontWeight: 600, letterSpacing: '0.2em', textTransform: 'uppercase', color: '#B5735F' }}>Layanan Kami</span>
              <h2 style={{ fontFamily: 'Cormorant Garamond, serif', fontSize: 'clamp(1.75rem,4vw,2.5rem)', fontWeight: 500, color: '#3D2420', marginTop: '0.5rem' }}>
                Layanan MUA di {CITY}
              </h2>
              <p style={{ fontFamily: 'DM Sans, sans-serif', color: '#9A7A73', marginTop: '0.75rem' }}>Pilih layanan yang sesuai dengan kebutuhanmu di {CITY}.</p>
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem', maxWidth: 650, margin: '0 auto 3rem' }}>
              {services.map(cat => (
                <Link key={cat.title} href="/pricelist"
                  style={{ background: cat.gradient, color: cat.textColor, borderRadius: 24, padding: '1.25rem 1.5rem', display: 'flex', alignItems: 'center', textDecoration: 'none', transition: 'transform 0.3s ease, box-shadow 0.3s ease' }}>
                  <div style={{ width: 56, height: 56, borderRadius: 16, background: cat.iconBg, display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '1.6rem', marginRight: '1.25rem', flexShrink: 0 }}>{cat.icon}</div>
                  <div style={{ flexGrow: 1, textAlign: 'left' }}>
                    <h3 style={{ fontFamily: 'DM Sans, sans-serif', fontSize: '1.15rem', fontWeight: 700, marginBottom: '0.25rem', letterSpacing: '-0.01em' }}>{cat.title}</h3>
                    <p style={{ fontFamily: 'DM Sans, sans-serif', fontSize: '0.85rem', opacity: 0.85, lineHeight: 1.4, margin: 0 }}>{cat.desc}</p>
                  </div>
                </Link>
              ))}
            </div>
            <div style={{ textAlign: 'center' }}>
              <Link href="/pricelist" style={{ border: '1.5px solid #3D2420', color: '#3D2420', padding: '0.75rem 2rem', borderRadius: 9999, fontFamily: 'DM Sans, sans-serif', fontWeight: 600, textDecoration: 'none', display: 'inline-block' }}>
                Lihat Detail Pricelist Lengkap
              </Link>
            </div>
          </div>
        </section>

        {/* MAP */}
        <section style={{ background: '#fff', padding: '5rem 1.5rem' }}>
          <div style={{ maxWidth: 960, margin: '0 auto' }}>
            <div style={{ textAlign: 'center', marginBottom: '2rem' }}>
              <span style={{ fontFamily: 'DM Sans, sans-serif', fontSize: '0.7rem', fontWeight: 600, letterSpacing: '0.2em', textTransform: 'uppercase', color: '#B5735F' }}>Lokasi</span>
              <h2 style={{ fontFamily: 'Cormorant Garamond, serif', fontSize: 'clamp(1.75rem,4vw,2.5rem)', fontWeight: 500, color: '#3D2420', marginTop: '0.5rem' }}>
                Area Layanan MUA {CITY}
              </h2>
              <p style={{ fontFamily: 'DM Sans, sans-serif', color: '#9A7A73', marginTop: '0.5rem' }}>Melayani {CITY_AREA} dan sekitarnya</p>
            </div>
            <div style={{ borderRadius: 20, overflow: 'hidden', border: '1px solid #EDD5CB' }}>
              <iframe
                src="https://maps.google.com/maps?q=Wonosobo,+Central+Java&t=&z=11&ie=UTF8&iwloc=&output=embed"
                width="100%" height="360" style={{ border: 0, display: 'block' }}
                allowFullScreen loading="lazy" referrerPolicy="no-referrer-when-downgrade"
                title={`Peta area layanan MUA ${CITY} Cacalovas`}
              />
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section style={{ background: '#FDF5F0', padding: '5rem 1.5rem' }}>
          <div style={{ maxWidth: 760, margin: '0 auto' }}>
            <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
              <span style={{ fontFamily: 'DM Sans, sans-serif', fontSize: '0.7rem', fontWeight: 600, letterSpacing: '0.2em', textTransform: 'uppercase', color: '#B5735F' }}>FAQ</span>
              <h2 style={{ fontFamily: 'Cormorant Garamond, serif', fontSize: 'clamp(1.75rem,4vw,2.5rem)', fontWeight: 500, color: '#3D2420', marginTop: '0.5rem' }}>
                Pertanyaan Seputar MUA {CITY}
              </h2>
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
              {faqs.map((f, i) => (
                <div key={i} style={{ background: '#fff', borderRadius: 14, border: '1px solid #EDD5CB', overflow: 'hidden' }}>
                  <button onClick={() => setOpenFaq(openFaq === i ? null : i)} id={`faq-wonosobo-${i}`}
                    style={{ width: '100%', padding: '1.25rem 1.5rem', display: 'flex', justifyContent: 'space-between', alignItems: 'center', background: 'none', border: 'none', cursor: 'pointer', textAlign: 'left', fontFamily: 'DM Sans, sans-serif', fontWeight: 600, fontSize: '0.9rem', color: '#3D2420' }}>
                    <span>{f.q}</span>
                    <span style={{ fontSize: '1.25rem', color: '#B5735F', flexShrink: 0, marginLeft: '1rem' }}>{openFaq === i ? '−' : '+'}</span>
                  </button>
                  {openFaq === i && (
                    <div style={{ padding: '0 1.5rem 1.25rem', fontFamily: 'DM Sans, sans-serif', fontSize: '0.875rem', color: '#5C3D35', lineHeight: 1.8 }}>{f.a}</div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section style={{ background: '#3D2420', padding: '5rem 1.5rem', textAlign: 'center' }}>
          <div style={{ maxWidth: 600, margin: '0 auto' }}>
            <div style={{ display: 'inline-block', background: 'rgba(237,213,203,0.12)', border: '1px solid rgba(237,213,203,0.25)', borderRadius: 9999, padding: '0.35rem 1.25rem', fontFamily: 'DM Sans, sans-serif', fontSize: '0.75rem', color: '#EDD5CB', letterSpacing: '0.1em', textTransform: 'uppercase', marginBottom: '1.5rem' }}>
              Mulai Konsultasi
            </div>
            <h2 style={{ fontFamily: 'Cormorant Garamond, serif', fontSize: 'clamp(1.75rem,4vw,2.75rem)', fontWeight: 500, color: '#FDF5F0', marginBottom: '1rem' }}>
              Siap tampil memukau di {CITY}?
            </h2>
            <p style={{ fontFamily: 'DM Sans, sans-serif', color: 'rgba(253,245,240,0.7)', marginBottom: '2rem', lineHeight: 1.8 }}>
              Diskusikan konsep riasan impianmu bersama MUA {CITY} terpercaya dari Cacalovas.
            </p>
            <a href={WA} target="_blank" rel="noopener noreferrer" id="mua-wonosobo-cta"
              style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem', background: '#25D366', color: 'white', padding: '1rem 2.5rem', borderRadius: 9999, fontFamily: 'DM Sans, sans-serif', fontWeight: 700, fontSize: '1rem', textDecoration: 'none' }}>
              <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/></svg>
              Chat WhatsApp Sekarang
            </a>
          </div>
        </section>

        {/* INTERNAL LINKS */}
        <section style={{ background: '#fff', padding: '2.5rem 1.5rem', borderTop: '1px solid #EDD5CB' }}>
          <div style={{ maxWidth: 700, margin: '0 auto', textAlign: 'center' }}>
            <p style={{ fontFamily: 'DM Sans, sans-serif', fontSize: '0.85rem', color: '#9A7A73', marginBottom: '1rem' }}>Cari MUA di kota lain?</p>
            <div style={{ display: 'flex', gap: '0.75rem', justifyContent: 'center', flexWrap: 'wrap' }}>
              <Link href="/mua-banjarnegara" style={{ fontFamily: 'DM Sans, sans-serif', fontSize: '0.85rem', color: '#B5735F', padding: '0.4rem 1.1rem', border: '1px solid #EDD5CB', borderRadius: 9999, textDecoration: 'none' }}>MUA Banjarnegara</Link>
              <Link href="/mua-wonosobo" style={{ fontFamily: 'DM Sans, sans-serif', fontSize: '0.85rem', color: '#B5735F', padding: '0.4rem 1.1rem', border: '1px solid #EDD5CB', borderRadius: 9999, textDecoration: 'none' }}>MUA Wonosobo</Link>
              <Link href="/pricelist" style={{ fontFamily: 'DM Sans, sans-serif', fontSize: '0.85rem', color: '#B5735F', padding: '0.4rem 1.1rem', border: '1px solid #EDD5CB', borderRadius: 9999, textDecoration: 'none' }}>Pricelist</Link>
            </div>
          </div>
        </section>

      </main>
      <Footer />
    </>
  );
}
