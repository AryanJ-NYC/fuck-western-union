import { FaBitcoin } from 'react-icons/fa';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import Link from 'next/link';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Fuck Western Union',
  description:
    "Don't throw your money away on Western Union or MoneyGram fees. Learn how to use Bitcoin to send money overseas.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <header className="flex flex-row px-8 py-4">
          <Link className="self-center text-bitcoin-orange text-7xl" href="/">
            <FaBitcoin />
          </Link>
        </header>
        {children}
      </body>
    </html>
  );
}
