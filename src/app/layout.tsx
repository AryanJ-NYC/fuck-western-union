import Image from 'next/image';
import type { Metadata } from 'next';
import { FaInstagram, FaTwitter } from 'react-icons/fa';
import { Inter } from 'next/font/google';
import logo from '../../public/imgs/logo.png';
import './globals.css';
import Link from 'next/link';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Fuck Western Union | Send Remittances with Bitcoin',
  description:
    "Don't throw your money away on Western Union or MoneyGram fees. Learn how to use Bitcoin to send money overseas.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <header className="flex justify-center sm:justify-start px-8 pt-4 w-full">
          <Link className="flex justify-center" href="/">
            <Image
              alt="logo"
              className="object-contain h-80 sm:h-44 w-fit"
              placeholder="blur"
              src={logo}
            />
          </Link>
        </header>
        {children}
        <footer className="flex justify-end px-8 py-4">
          <div className="flex gap-x-4 text-xl">
            <a href="https://instagram.com/FuckWesternUnion" rel="noreferrer" target="_blank">
              <FaInstagram />
            </a>
            <a href="https://x.com/FckWesternUnion" rel="noreferrer" target="_blank">
              <FaTwitter />
            </a>
          </div>
        </footer>
      </body>
    </html>
  );
}
