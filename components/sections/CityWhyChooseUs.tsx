import Link from 'next/link';

// Shared "Why Choose Us" comparison table for city pages
// Accepts an optional `city` prop to localize 1-2 items
export default function CityWhyChooseUs({ city }: { city: string }) {
  const comparisons = [
    {
      cacalovas: `Menggunakan kosmetik high-end & original — andalan klien di ${city}`,
      others: 'Menggunakan produk standar atau campuran yang tidak jelas',
    },
    {
      cacalovas: 'Alat makeup selalu steril, brush dicuci rutin',
      others: 'Alat jarang dibersihkan, berisiko memicu jerawat',
    },
    {
      cacalovas: 'Hasil riasan flawless, ringan, & tahan lama sepanjang acara',
      others: 'Riasan terasa tebal (dempul) dan mudah crack',
    },
    {
      cacalovas: 'Gaya makeup timeless, natural, dan elegan',
      others: 'Gaya riasan berlebihan, menor, atau terlihat tua',
    },
    {
      cacalovas: 'Harga transparan, tanpa biaya tersembunyi',
      others: 'Sering ada tambahan biaya mendadak di hari H',
    },
    {
      cacalovas: `Tepat waktu & profesional — sudah dipercaya ratusan pengantin di ${city}`,
      others: 'Jadwal sering molor dan kurang terorganisir',
    },
    {
      cacalovas: 'Konsultasi detail, ramah, dan solutif via WhatsApp',
      others: 'Kurang komunikatif dan memaksakan kehendak sendiri',
    },
  ];

  return (
    <section style={{ background: '#FDF5F0', padding: '5rem 1.5rem' }}>
      <div style={{ maxWidth: 900, margin: '0 auto' }}>
        <div style={{ textAlign: 'center', marginBottom: '2.5rem' }}>
          <span style={{ fontFamily: 'DM Sans, sans-serif', fontSize: '0.7rem', fontWeight: 600, letterSpacing: '0.2em', textTransform: 'uppercase', color: '#B5735F' }}>Perbandingan</span>
          <h2 style={{ fontFamily: 'Cormorant Garamond, serif', fontSize: 'clamp(1.75rem, 4vw, 2.5rem)', fontWeight: 500, color: '#3D2420', marginTop: '0.5rem' }}>
            Mengapa Memilih Cacalovas di {city}?
          </h2>
        </div>

        {/* Header Row */}
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', borderRadius: '14px 14px 0 0', overflow: 'hidden', marginBottom: '2px' }}>
          <div style={{ background: '#3D2420', padding: '1rem 1.5rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
            <span style={{ color: '#EDD5CB', fontFamily: 'DM Sans, sans-serif', fontWeight: 700, fontSize: '0.85rem', letterSpacing: '0.1em' }}>✦ CACALOVAS</span>
          </div>
          <div style={{ background: '#9A7A73', padding: '1rem 1.5rem', display: 'flex', alignItems: 'center' }}>
            <span style={{ color: 'rgba(255,255,255,0.85)', fontFamily: 'DM Sans, sans-serif', fontWeight: 600, fontSize: '0.85rem', letterSpacing: '0.1em' }}>MUA LAINNYA</span>
          </div>
        </div>

        {/* Comparison Rows */}
        <div style={{ border: '1px solid #EDD5CB', borderRadius: '0 0 14px 14px', overflow: 'hidden' }}>
          {comparisons.map((item, i) => (
            <div key={i} style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', borderTop: i > 0 ? '1px solid #EDD5CB' : 'none' }}>
              <div style={{ padding: '1rem 1.5rem', background: 'white', display: 'flex', alignItems: 'flex-start', gap: '0.75rem' }}>
                <svg style={{ width: 16, height: 16, color: '#B5735F', flexShrink: 0, marginTop: 2 }} viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
                <span style={{ fontFamily: 'DM Sans, sans-serif', fontSize: '0.875rem', color: '#3D2420', lineHeight: 1.6 }}>{item.cacalovas}</span>
              </div>
              <div style={{ padding: '1rem 1.5rem', background: '#FDF5F0', display: 'flex', alignItems: 'flex-start', gap: '0.75rem' }}>
                <svg style={{ width: 16, height: 16, color: '#C4A08A', flexShrink: 0, marginTop: 2 }} viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" />
                </svg>
                <span style={{ fontFamily: 'DM Sans, sans-serif', fontSize: '0.875rem', color: '#9A7A73', lineHeight: 1.6 }}>{item.others}</span>
              </div>
            </div>
          ))}
        </div>

        <div style={{ textAlign: 'center', marginTop: '2.5rem' }}>
          <Link href="/pricelist" style={{ fontFamily: 'DM Sans, sans-serif', fontSize: '0.9rem', fontWeight: 600, color: '#B5735F', border: '1.5px solid #EDD5CB', padding: '0.75rem 2rem', borderRadius: '9999px', textDecoration: 'none' }}>
            Lihat Paket & Harga
          </Link>
        </div>
      </div>
    </section>
  );
}
