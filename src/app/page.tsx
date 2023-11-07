import { clsx } from 'clsx';
import Link from 'next/link';
import type { DetailedHTMLProps, HTMLAttributes } from 'react';
import { FaBitcoin } from 'react-icons/fa';
import { SectionWithGutters } from './components/SectionWithGutters';

export default function Home() {
  return (
    <div className="flex flex-col items-center">
      <SectionWithGutters className="flex flex-col gap-y-8 max-w-2xl">
        <div className="flex flex-col gap-y-2">
          <h1 className="text-center text-4xl font-bold">
            Use Bitcoin to send money to your friends and family.
          </h1>
          <h2 className="text-center text-2xl font-medium">
            Say no to Western Union and MoneyGram.
          </h2>
        </div>
      </SectionWithGutters>

      <SectionWithGutters>
        <p>Why use Bitcoin instead of Western Union or MoneyGram?</p>

        <div className="grid grid-cols-1 md:grid-cols-3 max-w-4xl gap-8">
          <StepCard className="gap-y-4">
            <p>
              Bitcoin is <strong>cheaper</strong>
            </p>
            <p>
              Sending money through Western Union or MoneyGram can cost you a staggering $35 on a
              mere $200 transfer – a whopping 17.5%! With Bitcoin, enjoy cost-effective transfers
              that won&apos;t break the bank. Keep more of your hard-earned money where it belongs
              &mdash; in your pocket.
            </p>
          </StepCard>
          <StepCard className="gap-y-4">
            <p>
              Bitcoin is <strong>faster</strong>
            </p>
            <p>
              Western Union and MoneyGram: Domestic transfers take up to a day, international ones
              up to five business days.
            </p>
            <p>Bitcoin: Near-instant in 10 minutes, even instant with Lightning Network</p>
          </StepCard>
          <StepCard className="gap-y-4">
            <p>
              Bitcoin is <strong>more accessible</strong>
            </p>
            <p>
              Bitcoin breaks down barriers, providing access to financial services that were once
              out of reach. No banks, no borders, just seamless global transactions at your
              fingertips.{' '}
            </p>
          </StepCard>
        </div>
      </SectionWithGutters>

      <SectionWithGutters className="grid grid-cols-1 md:grid-cols-3 max-w-4xl gap-8">
        <StepCard>
          <StepNumber>1</StepNumber>
          <p>Buy Bitcoin</p>
          <ol className="list-decimal list-inside">
            <li className="list-item">Find a Bitcoin exchange in your country.</li>
            <li className="list-item">Exchange your local currency for Bitcoin.</li>
          </ol>
        </StepCard>
        <StepCard>
          <StepNumber>2</StepNumber>
          <p>Send Bitcoin</p>
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
            <StepNumber>3</StepNumber>
          </div>
          <p>
            Convert Bitcoin to cash <span className="text-xs">(optional)</span>
          </p>
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
        <Link href="/learn-more">Learn More</Link>
      </SectionWithGutters>
    </div>
  );
}

const StepCard: React.FC<DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement>> = (
  props
) => (
  <div
    {...props}
    className={clsx(
      props.className,
      'flex flex-col p-4 relative md:max-w-xs px-8 pb-8 rounded-lg shadow-xl'
    )}
  />
);

const StepNumber: React.FC<
  DetailedHTMLProps<HTMLAttributes<HTMLParagraphElement>, HTMLParagraphElement>
> = (props) => <p {...props} className={clsx(props.className, 'bg text-center')} />;
