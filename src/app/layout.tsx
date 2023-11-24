import clsx from 'clsx';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import Image from 'next/image';
import Link from 'next/link';
import { FaInstagram, FaTwitter } from 'react-icons/fa';
import logo from '../../public/imgs/logo.svg';
import './globals.css';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Fuck Western Union | Send Remittances with Bitcoin',
  description:
    "Don't throw your money away on Western Union or MoneyGram fees. Learn how to use Bitcoin to send money overseas.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={clsx(inter.className, 'bg-farhan-black text-white')}>
        <header className="flex justify-center pt-8 w-full">
          <Link href="/">
            <Image alt="logo" className="object-contain h-64 sm:h-44 w-fit" src={logo} />
          </Link>
        </header>
        {children}
        <footer className="flex justify-end px-8 py-4">
          <div className="flex gap-x-6 text-3xl">
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
