import type { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { HARDCODED_POSTS } from '@/lib/blogData';

export const metadata: Metadata = {
  title: 'Blog Cacalovas - Tips, Tutorial, Inspirasi Riasan',
  description: 'Baca artikel tips makeup pernikahan, tutorial riasan, tren kecantikan terbaru, dan inspirasi attire akad nikah dari Cacalovas MUA.',
  keywords: ['Blog Cacalovas', 'Tips Make Up'],
  alternates: { canonical: 'https://cacalovas.com/blog' },
  openGraph: {
    title: 'Blog Cacalovas - Tips, Tutorial, Inspirasi Riasan',
    description: 'Baca artikel tips makeup pernikahan, tutorial riasan, tren kecantikan terbaru, dan inspirasi attire akad nikah dari Cacalovas MUA.',
    url: 'https://cacalovas.com/blog',
    images: [{ url: '/images/hero-bg.png', width: 1200, height: 630, alt: 'Blog Cacalovas - Tips, Tutorial, Inspirasi Riasan' }],
  },
};

export default function BlogPage() {
  const posts = HARDCODED_POSTS;

  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Blog',
    name: 'Blog Cacalovas',
    description: 'Tips makeup, tutorial riasan, dan inspirasi dari MUA Cacalovas',
    url: 'https://cacalovas.com/blog',
    publisher: { '@type': 'Organization', name: 'Cacalovas', url: 'https://cacalovas.com' },
  };

  return (
    <>
      <Navbar />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <main>
        {/* Hero */}
        <section style={{ background: '#FFFFFF', padding: '9rem 1.5rem 5rem', textAlign: 'center', borderBottom: '1px solid #EDD5CB' }}>
          <div style={{ maxWidth: '640px', margin: '0 auto' }}>
            <span style={{ display: 'inline-block', fontFamily: 'DM Sans', fontSize: '0.7rem', fontWeight: 600, letterSpacing: '0.25em', textTransform: 'uppercase', color: '#B5735F', background: '#FDF5F0', border: '1px solid #EDD5CB', padding: '0.35rem 1.25rem', borderRadius: '9999px', marginBottom: '1.5rem' }}>
              Cacalovas Blog
            </span>
            <h1 style={{ fontFamily: 'Cormorant Garamond, serif', fontSize: 'clamp(2.5rem, 5.5vw, 3.5rem)', fontWeight: 500, color: '#3D2420', lineHeight: 1.15, marginBottom: '1rem' }}>
              Tips & <em style={{ fontStyle: 'italic', color: '#B5735F' }}>Inspirasi</em> Riasan
            </h1>
            <p style={{ fontFamily: 'DM Sans, sans-serif', fontSize: '0.95rem', color: '#9A7A73', lineHeight: 1.85 }}>
              Panduan makeup pernikahan, tutorial riasan, tren kecantikan,<br />dan tips tampil memukau dari MUA Cacalovas.
            </p>
          </div>
        </section>

        {/* Posts Grid */}
        <section style={{ background: '#FDF5F0', padding: '4rem 1.5rem 5rem' }}>
          <div style={{ maxWidth: '1100px', margin: '0 auto' }}>
            {posts.length === 0 ? (
              <div style={{ textAlign: 'center', padding: '5rem 2rem', color: '#9A7A73' }}>
                <div style={{ fontSize: '3rem', marginBottom: '1rem' }}>✍️</div>
                <h2 style={{ fontFamily: 'Cormorant Garamond, serif', fontSize: '1.75rem', color: '#3D2420', marginBottom: '0.5rem' }}>Artikel Segera Hadir</h2>
                <p style={{ fontFamily: 'DM Sans, sans-serif', fontSize: '0.9rem' }}>Kami sedang menyiapkan konten terbaik untuk kamu.</p>
              </div>
            ) : (
              <>
                {/* Featured — first post */}
                <Link href={`/blog/${posts[0].slug}`} style={{ textDecoration: 'none', display: 'block', marginBottom: '2rem' }}>
                  <article style={{ background: 'white', borderRadius: '20px', border: '1px solid #EDD5CB', overflow: 'hidden', display: 'grid', gridTemplateColumns: posts[0].thumbnail ? '1fr 1fr' : '1fr', transition: 'all 0.3s' }}>
                    {posts[0].thumbnail && (
                      <div style={{ position: 'relative', aspectRatio: '16/9' }}>
                        <Image src={posts[0].thumbnail} alt={posts[0].title} fill style={{ objectFit: 'cover' }} />
                      </div>
                    )}
                    <div style={{ padding: '2.5rem' }}>
                      <span style={{ display: 'inline-block', fontFamily: 'DM Sans, sans-serif', fontSize: '0.7rem', fontWeight: 700, letterSpacing: '0.12em', textTransform: 'uppercase', color: '#B5735F', background: '#FDF5F0', padding: '0.2rem 0.75rem', borderRadius: '4px', marginBottom: '1rem' }}>
                        {posts[0].category}
                      </span>
                      <h2 style={{ fontFamily: 'Cormorant Garamond, serif', fontSize: '2rem', fontWeight: 500, color: '#3D2420', lineHeight: 1.25, marginBottom: '0.75rem' }}>{posts[0].title}</h2>
                      <p style={{ fontFamily: 'DM Sans, sans-serif', fontSize: '0.9rem', color: '#9A7A73', lineHeight: 1.75, marginBottom: '1.5rem' }}>{posts[0].excerpt}</p>
                      <span style={{ fontFamily: 'DM Sans, sans-serif', fontSize: '0.875rem', fontWeight: 600, color: '#B5735F' }}>Baca Selengkapnya →</span>
                    </div>
                  </article>
                </Link>

                {/* Rest */}
                {posts.length > 1 && (
                  <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))', gap: '1.25rem' }}>
                    {posts.slice(1).map(post => (
                      <Link key={post.id} href={`/blog/${post.slug}`} style={{ textDecoration: 'none' }}>
                        <article style={{ background: 'white', borderRadius: '16px', border: '1px solid #EDD5CB', overflow: 'hidden', height: '100%', display: 'flex', flexDirection: 'column', transition: 'all 0.3s' }}>
                          {post.thumbnail ? (
                            <div style={{ position: 'relative', aspectRatio: '16/9' }}>
                              <Image src={post.thumbnail} alt={post.title} fill style={{ objectFit: 'cover' }} />
                            </div>
                          ) : (
                            <div style={{ aspectRatio: '16/9', background: '#F0D8CE', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '2rem' }}>✍️</div>
                          )}
                          <div style={{ padding: '1.5rem', flex: 1, display: 'flex', flexDirection: 'column' }}>
                            <span style={{ display: 'inline-block', fontFamily: 'DM Sans, sans-serif', fontSize: '0.65rem', fontWeight: 700, letterSpacing: '0.12em', textTransform: 'uppercase', color: '#B5735F', marginBottom: '0.5rem' }}>{post.category}</span>
                            <h3 style={{ fontFamily: 'Cormorant Garamond, serif', fontSize: '1.4rem', fontWeight: 500, color: '#3D2420', lineHeight: 1.3, marginBottom: '0.5rem', flex: 1 }}>{post.title}</h3>
                            <p style={{ fontFamily: 'DM Sans, sans-serif', fontSize: '0.8rem', color: '#9A7A73', lineHeight: 1.65, marginBottom: '1rem', display: '-webkit-box', WebkitLineClamp: 3, WebkitBoxOrient: 'vertical', overflow: 'hidden' }}>{post.excerpt}</p>
                            <span style={{ fontFamily: 'DM Sans, sans-serif', fontSize: '0.8rem', fontWeight: 600, color: '#B5735F' }}>Baca →</span>
                          </div>
                        </article>
                      </Link>
                    ))}
                  </div>
                )}
              </>
            )}
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
