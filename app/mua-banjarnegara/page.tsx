import type { Metadata } from 'next';
import MUABanjarnegaraPage from './MUABanjarnegaraPage';

export const metadata: Metadata = {
  title: 'MUA Terbaik di Banjarnegara - Cacalovas Make Up Artist',
  description: 'Cacalovas adalah MUA terbaik di Banjarnegara yang melayani riasan untuk pernikahan, wisuda, engagement. Produk high-end, hasil istimewa, harga transparan.',
  keywords: ['MUA Banjarnegara'],
  alternates: { canonical: 'https://cacalovas.com/mua-banjarnegara' },
  openGraph: {
    title: 'MUA Terbaik di Banjarnegara - Cacalovas Make Up Artist',
    description: 'Cacalovas adalah MUA terbaik di Banjarnegara yang melayani riasan untuk pernikahan, wisuda, engagement. Produk high-end, hasil istimewa, harga transparan.',
    url: 'https://cacalovas.com/mua-banjarnegara',
    type: 'website',
    images: [{ url: 'https://cacalovas.com/cacalovas-hero.png', width: 1200, height: 630, alt: 'MUA Terbaik di Banjarnegara - Cacalovas Make Up Artist' }],
  },
};

export default function Page() {
  return <MUABanjarnegaraPage />;
}
