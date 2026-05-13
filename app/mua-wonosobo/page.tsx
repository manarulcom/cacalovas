import type { Metadata } from 'next';
import MUAWonosoboPage from './MUAWonosoboPage';

export const metadata: Metadata = {
  title: 'MUA Terbaik di Wonosobo - Cacalovas Make Up Artist',
  description: 'Cacalovas adalah MUA terbaik di Wonosobo yang melayani riasan untuk pernikahan, wisuda, engagement. Produk high-end, hasil istimewa, harga transparan',
  keywords: ['MUA Wonosobo'],
  alternates: { canonical: 'https://cacalovas.com/mua-wonosobo' },
  openGraph: {
    title: 'MUA Terbaik di Wonosobo - Cacalovas Make Up Artist',
    description: 'Cacalovas adalah MUA terbaik di Wonosobo yang melayani riasan untuk pernikahan, wisuda, engagement. Produk high-end, hasil istimewa, harga transparan',
    url: 'https://cacalovas.com/mua-wonosobo',
    type: 'website',
    images: [{ url: 'https://cacalovas.com/cacalovas-hero.png', width: 1200, height: 630, alt: 'MUA Terbaik di Wonosobo - Cacalovas Make Up Artist' }],
  },
};

export default function Page() {
  return <MUAWonosoboPage />;
}
