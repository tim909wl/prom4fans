import type { MetadataRoute } from 'next';
export const dynamic = 'force-static';
export default function manifest(): MetadataRoute.Manifest { return { name: 'Prom4Fans', short_name: 'Prom4Fans', description: 'Die Plattform für echte Fan-Momente.', start_url: '/', display: 'standalone', background_color: '#ffffff', theme_color: '#15162d', icons: [{ src: '/favicon.svg', sizes: 'any', type: 'image/svg+xml' }] }; }
