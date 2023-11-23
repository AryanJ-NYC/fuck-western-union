import { clsx } from 'clsx';
import Link from 'next/link';
import type { DetailedHTMLProps, HTMLAttributes } from 'react';
import accessibleSvg from '../../public/imgs/accessible.svg';
import costSvg from '../../public/imgs/cost.svg';
import fasterSvg from '../../public/imgs/faster.svg';
import { SectionWithGutters } from './components/SectionWithGutters';
import Image from 'next/image';

export default function Home() {
  return (
    <div className="flex flex-col items-center">
      <SectionWithGutters className="flex flex-col gap-y-4 !pt-8 max-w-2xl">
        <h1 className="text-center text-4xl tracking-wide font-bold">
          Use Bitcoin to send money to your friends and family
        </h1>
        <h2 className="text-center text-bitcoin-orange text-2xl">
          Say no to Western Union and MoneyGram
        </h2>
      </SectionWithGutters>

      <SectionWithGutters className="flex flex-col gap-y-28 bg-wu-yellow rounded-3xl self-stretch">
        <p className="text-center text-3xl font-bold text-farhan-black tracking-wide">
          Why use Bitcoin instead of Western Union or MoneyGram?
        </p>

        <div className="flex flex-col text-body-black max-w-2xl gap-x-12 gap-y-20">
          <div className="flex flex-col-reverse md:flex-row gap-x-16 gap-y-8">
            <div className="flex flex-col gap-y-4">
              <p className="text-2xl font-medium">Bitcoin is cheaper</p>
              <p className="font-light tracking-wide">
                Sending money through Western Union or MoneyGram can cost you a staggering $35 on a
                mere $200 transfer &mdash; a whopping 17.5%! With Bitcoin, enjoy cost-effective
                transfers that won&apos;t break the bank.
              </p>
            </div>
            <Image alt="Decreasing cost" className="self-center" src={costSvg} />
          </div>
          <div className="flex flex-col-reverse md:flex-row-reverse gap-x-16 gap-y-8">
            <div className="flex flex-col gap-y-4">
              <p className="text-2xl font-medium">Bitcoin is faster</p>
              <div className="flex flex-col font-light gap-y-2 tracking-wide">
                <p>
                  Western Union and MoneyGram: Domestic transfers take up to a day, international
                  ones up to five business days.
                </p>
                <p>Bitcoin: Near-instant in 10 minutes, even instant with Lightning Network</p>
              </div>
            </div>
            <Image alt="Decreasing cost" className="self-center" src={fasterSvg} />
          </div>
          <div className="flex flex-col-reverse md:flex-row gap-x-16 gap-y-8">
            <div className="flex flex-col gap-y-4">
              <p className="text-2xl font-medium">Bitcoin is accessible</p>
              <p className="font-light tracking-wide">
                Bitcoin breaks down barriers, providing access to financial services that were once
                out of reach. No banks, no borders, just seamless global transactions at your
                fingertips.
              </p>
            </div>
            <Image alt="Decreasing cost" className="self-center" src={accessibleSvg} />
          </div>
        </div>
      </SectionWithGutters>

      <SectionWithGutters className="flex flex-col items-center gap-y-12 self-stretch">
        <p className="text-center text-3xl font-bold tracking-wide">
          How do I send money to loved ones using Bitcoin?
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 max-w-5xl">
          <StepCard>
            <p className="text-center text-lg">Buy Bitcoin</p>
            <ol className="list-decimal list-inside">
              <li className="list-item">Find a Bitcoin exchange in your country.</li>
              <li className="list-item">Exchange your local currency for Bitcoin.</li>
            </ol>
          </StepCard>
          <StepCard>
            <p className="text-center text-lg">Send Bitcoin</p>
            <ol className="list-decimal list-inside">
              <li className="list-item">Ask the receiving party to create a Bitcoin wallet.</li>
              <li className="list-item">Ask the receiver party for their Bitcoin address.</li>
              <li className="list-item">
                Withdraw from the Bitcoin exchange to the receiving party&apos;s Bitcoin address
              </li>
            </ol>
          </StepCard>
          <StepCard>
            <div className="text-center">
              <p className="text-lg">Convert Bitcoin to cash</p>
              <p className="text-xs">(optional)</p>
            </div>
            <div className="flex flex-col gap-y-4">
              <ol className="list-decimal list-inside">
                <li className="list-item">Find a Bitcoin exchange in the receiving country.</li>
                <li className="list-item">Exchange Bitcoin for the receiver&apos;s currency.</li>
              </ol>
              <p>
                Alternatively, use{' '}
                <a
                  className="hover:text-blue-800 text-blue-500"
                  href="https://coinatmradar.com"
                  rel="noreferrer"
                  target="_blank"
                >
                  Coin ATM Radar
                </a>{' '}
                to withdraw Bitcoin to cash.
              </p>
            </div>
          </StepCard>
        </div>
        <Link
          className="bg-bitcoin-orange py-3 px-8 rounded-xl shadow-xl shadow-gray-700 text-center text-lg text-orange-50 font-semibold tracking-wider"
          href="/learn-more"
        >
          Learn More
        </Link>
      </SectionWithGutters>
    </div>
  );
}

const StepCard = (props: DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement>) => (
  <div
    {...props}
    className={clsx(
      props.className,
      'bg-white flex flex-col gap-y-4 p-4 relative md:max-w-xs px-8 pb-8 rounded-lg shadow-gray-800 shadow-xl self-stretch text-body-black'
    )}
  />
);
