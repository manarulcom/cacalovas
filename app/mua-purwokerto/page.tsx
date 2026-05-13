import type { Metadata } from 'next';
import MUAPurwokertoPage from './MUAPurwokertoPage';

export const metadata: Metadata = {
  title: 'MUA Terbaik di Purwokerto - Cacalovas Make Up Artist',
  description: 'Cacalovas adalah MUA terbaik di Purwokerto yang melayani riasan untuk pernikahan, wisuda, engagement. Produk high-end, hasil istimewa, harga transparan.',
  keywords: ['MUA Purwokerto'],
  alternates: { canonical: 'https://cacalovas.com/mua-purwokerto' },
  openGraph: {
    title: 'MUA Terbaik di Purwokerto - Cacalovas Make Up Artist',
    description: 'Cacalovas adalah MUA terbaik di Purwokerto yang melayani riasan untuk pernikahan, wisuda, engagement. Produk high-end, hasil istimewa, harga transparan.',
    url: 'https://cacalovas.com/mua-purwokerto',
    type: 'website',
    images: [{ url: 'https://cacalovas.com/cacalovas-hero.png', width: 1200, height: 630, alt: 'MUA Terbaik di Purwokerto - Cacalovas Make Up Artist' }],
  },
};

export default function Page() {
  return <MUAPurwokertoPage />;
}
