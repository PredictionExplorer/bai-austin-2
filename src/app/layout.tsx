import type { Metadata } from 'next';
import { Geist } from 'next/font/google';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import './globals.css';

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
});

export const metadata: Metadata = {
  title: {
    default: 'BAi | Consultants in Acoustics, Sound Reinforcement & AV Systems',
    template: '%s | BAi Acoustics',
  },
  description:
    'BAi, LLC — Texas-based consultants in acoustics, noise control, sound reinforcement, and audiovisual systems since 1935. Offices in Austin, Dallas, and Houston.',
  keywords: [
    'acoustics consulting',
    'sound reinforcement',
    'audiovisual systems',
    'noise control',
    'room acoustics',
    'Austin Texas',
    'BAi',
  ],
  openGraph: {
    title: 'BAi | Acoustics Consultants Since 1935',
    description:
      'Consultants in Acoustics, Sound Reinforcement, and Audiovisual Systems. 85+ years, 6,000+ projects, 3 Texas offices.',
    type: 'website',
    locale: 'en_US',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} font-sans antialiased`}>
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
