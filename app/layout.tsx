import type { Metadata } from 'next';
import { Analytics } from '@vercel/analytics/next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Layan Cartrans – Sichere Fahrzeugüberführung in Europa',
  description:
    'Layan Cartrans aus Regensburg: Professionelle Fahrzeugüberführungen für Autohäuser, Flotten und Privatkunden. Sicher, pünktlich und digital protokolliert.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="de">
      <body>
        {children}
        <Analytics />
      </body>
    </html>
  );
}
