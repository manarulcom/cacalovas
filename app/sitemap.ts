import { MetadataRoute } from 'next';
import { HARDCODED_POSTS } from '@/lib/blogData';

export default function sitemap(): MetadataRoute.Sitemap {
  const posts = HARDCODED_POSTS;

  const blogUrls = posts.map(post => ({
    url: `https://cacalovas.com/blog/${post.slug}`,
    lastModified: new Date(post.published_at),
    changeFrequency: 'monthly' as const,
    priority: 0.8,
  }));

  return [
    { url: 'https://cacalovas.com',           lastModified: new Date(), changeFrequency: 'weekly',  priority: 1.0 },
    { url: 'https://cacalovas.com/pricelist', lastModified: new Date(), changeFrequency: 'monthly', priority: 0.95 },
    { url: 'https://cacalovas.com/attire',    lastModified: new Date(), changeFrequency: 'weekly',  priority: 0.9 },
    { url: 'https://cacalovas.com/blog',      lastModified: new Date(), changeFrequency: 'weekly',  priority: 0.85 },
    { url: 'https://cacalovas.com/mua-purwokerto',   lastModified: new Date(), changeFrequency: 'monthly', priority: 0.9 },
    { url: 'https://cacalovas.com/mua-banjarnegara', lastModified: new Date(), changeFrequency: 'monthly', priority: 0.9 },
    { url: 'https://cacalovas.com/mua-wonosobo',     lastModified: new Date(), changeFrequency: 'monthly', priority: 0.9 },
    ...blogUrls,
  ];
}
