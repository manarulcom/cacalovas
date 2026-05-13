'use client';
import { useState, useEffect } from 'react';
import { usePathname, useRouter } from 'next/navigation';
import Link from 'next/link';
import styles from './Navbar.module.css';

export default function Navbar() {
  const pathname = usePathname();
  const isHomepage = pathname === '/';
  const [visible, setVisible] = useState(!isHomepage);
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const router = useRouter();

  useEffect(() => {
    if (!isHomepage) {
      setVisible(true);
      setScrolled(window.scrollY > 30);
      const handleScroll = () => setScrolled(window.scrollY > 30);
      window.addEventListener('scroll', handleScroll);
      return () => window.removeEventListener('scroll', handleScroll);
    }
    const handleScroll = () => {
      const heroHeight = window.innerHeight;
      setVisible(window.scrollY > heroHeight * 0.85);
      setScrolled(window.scrollY > heroHeight * 0.85 + 30);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [isHomepage]);

  const links = [
    { href: '#portofolio', label: 'Portfolio' },
    { href: '/attire', label: 'Attire' },
    { href: '/pricelist', label: 'Pricelist' },
    { href: '/blog', label: 'Blog' },
    { href: '#kontak', label: 'Booking', isCta: true },
  ];

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    if (href.startsWith('#')) {
      e.preventDefault();
      const targetId = href.substring(1);
      
      if (isHomepage) {
        const element = document.getElementById(targetId);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      } else {
        sessionStorage.setItem('scrollTarget', targetId);
        router.push('/');
      }
      setMenuOpen(false);
    } else {
      setMenuOpen(false);
    }
  };

  return (
    <header className={`${styles.navbar} ${scrolled ? styles.scrolled : ''} ${visible ? styles.visible : ''}`}>
      <div className={styles.container}>
        <Link 
          href="/" 
          className={styles.logo}
          onClick={(e) => {
            if (isHomepage) {
              e.preventDefault();
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }
            setMenuOpen(false);
          }}
        >
          <em>Cacalovas</em>
        </Link>

        <nav className={`${styles.nav} ${menuOpen ? styles.open : ''}`}>
          {links.map((l) =>
            l.href.startsWith('/') ? (
              <Link key={l.href} href={l.href} className={`${styles.navLink} ${l.isCta ? styles.btnBooking : ''}`} onClick={(e) => handleNavClick(e, l.href)}>
                {l.label}
              </Link>
            ) : (
              <a key={l.href} href="/" className={`${styles.navLink} ${l.isCta ? styles.btnBooking : ''}`} onClick={(e) => handleNavClick(e, l.href)}>
                {l.label}
              </a>
            )
          )}
        </nav>

        <button
          className={`${styles.hamburger} ${menuOpen ? styles.active : ''}`}
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          <span /><span /><span />
        </button>
      </div>
    </header>
  );
}
