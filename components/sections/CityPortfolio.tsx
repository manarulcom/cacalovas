// Shared Portfolio/Social links section for city pages
export default function CityPortfolio({ city }: { city: string }) {
  return (
    <section style={{ background: '#3D2420', padding: '5rem 1.5rem' }}>
      <div style={{ maxWidth: 800, margin: '0 auto', textAlign: 'center' }}>
        <span style={{ fontFamily: 'DM Sans, sans-serif', fontSize: '0.7rem', fontWeight: 600, letterSpacing: '0.2em', textTransform: 'uppercase', color: '#EDD5CB', display: 'block', marginBottom: '0.75rem' }}>Karya Kami</span>
        <h2 style={{ fontFamily: 'Cormorant Garamond, serif', fontSize: 'clamp(1.75rem, 4vw, 2.5rem)', fontWeight: 500, color: '#FDF5F0', marginBottom: '0.75rem' }}>
          Portfolio Cacalovas
        </h2>
        <p style={{ fontFamily: 'DM Sans, sans-serif', color: 'rgba(237,213,203,0.75)', marginBottom: '2.5rem', fontSize: '0.95rem', lineHeight: 1.7 }}>
          Lihat ratusan karya riasan kami untuk klien di {city} dan seluruh Jawa Tengah. Follow kami untuk inspirasi makeup terbaru!
        </p>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '1.25rem' }}>
          {/* Instagram */}
          <a
            href="https://www.instagram.com/cacalovas"
            target="_blank"
            rel="noopener noreferrer"
            style={{ background: 'linear-gradient(135deg, rgba(131,58,180,0.4), rgba(253,29,29,0.4), rgba(252,176,69,0.4))', borderRadius: '16px', padding: '2rem', border: '1px solid rgba(237,213,203,0.2)', textDecoration: 'none', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '0.75rem', transition: 'transform 0.3s ease' }}
            id={`city-${city.toLowerCase()}-ig`}
          >
            <svg width="36" height="36" viewBox="0 0 24 24" fill="white">
              <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
            </svg>
            <div>
              <div style={{ fontFamily: 'DM Sans, sans-serif', fontWeight: 700, color: 'white', fontSize: '1rem' }}>Instagram</div>
              <div style={{ fontFamily: 'DM Sans, sans-serif', color: 'rgba(255,255,255,0.7)', fontSize: '0.85rem' }}>@cacalovas</div>
            </div>
          </a>

          {/* TikTok */}
          <a
            href="https://www.tiktok.com/@cacalovas"
            target="_blank"
            rel="noopener noreferrer"
            style={{ background: 'rgba(255,255,255,0.06)', borderRadius: '16px', padding: '2rem', border: '1px solid rgba(237,213,203,0.2)', textDecoration: 'none', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '0.75rem' }}
            id={`city-${city.toLowerCase()}-tiktok`}
          >
            <svg width="36" height="36" viewBox="0 0 24 24" fill="white">
              <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 15.68a6.34 6.34 0 0 0 6.27 6.36 6.35 6.35 0 0 0 6.25-6.32V10.3a8.39 8.39 0 0 0 5 1.65V8.53a5.26 5.26 0 0 1-2.93-1.84z" />
            </svg>
            <div>
              <div style={{ fontFamily: 'DM Sans, sans-serif', fontWeight: 700, color: 'white', fontSize: '1rem' }}>TikTok</div>
              <div style={{ fontFamily: 'DM Sans, sans-serif', color: 'rgba(255,255,255,0.7)', fontSize: '0.85rem' }}>@cacalovas</div>
            </div>
          </a>
        </div>
      </div>
    </section>
  );
}
