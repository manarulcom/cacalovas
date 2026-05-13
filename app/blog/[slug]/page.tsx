import type { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { HARDCODED_POSTS } from '@/lib/blogData';

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const resolvedParams = await params;
  const post = HARDCODED_POSTS.find(p => p.slug === resolvedParams.slug);
  if (!post) return { title: 'Not Found' };

  return {
    title: `${post.title} | Blog Cacalovas`,
    description: post.excerpt,
    alternates: {
      canonical: `https://cacalovas.com/blog/${post.slug}`,
    },
    openGraph: {
      title: post.title,
      description: post.excerpt,
      type: 'article',
      url: `https://cacalovas.com/blog/${post.slug}`,
    },
  };
}

export default async function BlogPostPage({ params }: { params: Promise<{ slug: string }> }) {
  const resolvedParams = await params;
  const post = HARDCODED_POSTS.find(p => p.slug === resolvedParams.slug);

  if (!post) {
    notFound();
  }

  return (
    <>
      <Navbar />
      <main style={{ minHeight: '100vh', paddingTop: '8rem', paddingBottom: '5rem', background: '#FDF5F0' }}>
        <article style={{ maxWidth: 800, margin: '0 auto', padding: '0 1.5rem', background: '#fff', borderRadius: 20, paddingBottom: '3rem', border: '1px solid #EDD5CB' }}>
          
          {/* Header */}
          <div style={{ textAlign: 'center', marginBottom: '3rem', paddingTop: '3rem' }}>
            <span style={{ display: 'inline-block', fontFamily: 'DM Sans, sans-serif', fontSize: '0.75rem', fontWeight: 700, letterSpacing: '0.12em', textTransform: 'uppercase', color: '#B5735F', background: '#FDF5F0', padding: '0.3rem 1rem', borderRadius: 9999, marginBottom: '1.25rem' }}>
              {post.category}
            </span>
            <h1 style={{ fontFamily: 'Cormorant Garamond, serif', fontSize: 'clamp(2rem, 5vw, 3rem)', fontWeight: 500, color: '#3D2420', lineHeight: 1.25, marginBottom: '1rem' }}>
              {post.title}
            </h1>
            <p style={{ fontFamily: 'DM Sans, sans-serif', fontSize: '0.85rem', color: '#9A7A73' }}>
              Dipublikasikan pada {new Date(post.published_at).toLocaleDateString('id-ID', { year: 'numeric', month: 'long', day: 'numeric' })}
            </p>
          </div>

          {/* Content */}
          <div 
            className="blog-content"
            style={{ fontFamily: 'DM Sans, sans-serif', fontSize: '1rem', color: '#5C3D35', lineHeight: 1.9 }}
            dangerouslySetInnerHTML={{ __html: post.content }}
          />

          {/* Internal Linking / CTA Box */}
          <div style={{ marginTop: '4rem', padding: '2.5rem', background: '#FDF5F0', borderRadius: 16, border: '1px solid #EDD5CB', textAlign: 'center' }}>
            <h3 style={{ fontFamily: 'Cormorant Garamond, serif', fontSize: '1.75rem', fontWeight: 600, color: '#3D2420', marginBottom: '0.75rem' }}>
              Wujudkan Riasan Impianmu Bersama Cacalovas
            </h3>
            <p style={{ fontFamily: 'DM Sans, sans-serif', fontSize: '0.95rem', color: '#7A5A53', lineHeight: 1.7, marginBottom: '2rem', maxWidth: 600, margin: '0 auto 2rem' }}>
              Tim Cacalovas siap menyempurnakan momen berhargamu dengan riasan <em>timeless &amp; natural</em>. Melayani <em>Home Service</em> ke area <strong>Purwokerto, Banjarnegara, dan Wonosobo</strong>.
            </p>
            <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
              <a href="https://wa.me/6285166662347?text=Halo%20Cacalovas,%20saya%20ingin%20konsultasi%20booking%20makeup" target="_blank" rel="noopener noreferrer"
                style={{ background: '#3D2420', color: '#FDF5F0', padding: '0.85rem 2rem', borderRadius: 9999, fontFamily: 'DM Sans, sans-serif', fontWeight: 600, fontSize: '0.9rem', textDecoration: 'none', display: 'inline-block' }}>
                Konsultasi WhatsApp
              </a>
              <Link href="/pricelist"
                style={{ background: 'transparent', color: '#3D2420', padding: '0.85rem 2rem', borderRadius: 9999, fontFamily: 'DM Sans, sans-serif', fontWeight: 600, fontSize: '0.9rem', border: '1.5px solid #3D2420', textDecoration: 'none', display: 'inline-block' }}>
                Lihat Pricelist
              </Link>
            </div>
            <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', marginTop: '1.75rem', flexWrap: 'wrap' }}>
              <Link href="/mua-purwokerto" style={{ fontFamily: 'DM Sans, sans-serif', fontSize: '0.8rem', color: '#B5735F', textDecoration: 'none', borderBottom: '1px dashed #B5735F' }}>MUA Purwokerto</Link>
              <Link href="/mua-banjarnegara" style={{ fontFamily: 'DM Sans, sans-serif', fontSize: '0.8rem', color: '#B5735F', textDecoration: 'none', borderBottom: '1px dashed #B5735F' }}>MUA Banjarnegara</Link>
              <Link href="/mua-wonosobo" style={{ fontFamily: 'DM Sans, sans-serif', fontSize: '0.8rem', color: '#B5735F', textDecoration: 'none', borderBottom: '1px dashed #B5735F' }}>MUA Wonosobo</Link>
            </div>
          </div>
        </article>
      </main>
      <Footer />
    </>
  );
}
