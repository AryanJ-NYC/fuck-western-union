import clsx from 'clsx';
import Image from 'next/image';
import React from 'react';
import bitcoinToCashSvg from '../../../public/imgs/bitcoin-to-cash.svg';
import buyBitcoinSvg from '../../../public/imgs/buy-bitcoin.svg';
import sendBitcoinSvg from '../../../public/imgs/send-bitcoin.svg';

const LearnMore = () => {
  return (
    <div className="flex flex-col items-center gap-y-12 py-4">
      <h1 className="font-bold text-center text-4xl tracking-wider">Learn More</h1>
      <div className="flex flex-col gap-y-24">
        <LearnMoreSection>
          <LearnMoreNumber className="text-mg-red">1</LearnMoreNumber>
          <h2 className="font-bold text-3xl text-center text-farhan-black tracking-wide">
            Buy Bitcoin
          </h2>
          <LearnMoreList>
            <div className="flex gap-x-4">
              <p className="h-8 w-8 flex justify-center items-center rounded-full bg-farhan-black text-white text-xl">
                1
              </p>
              <div className="flex flex-col gap-y-1 max-w-xs">
                <p className="font-semibold text-xl">Choose an Exchange</p>
                <p className="font-light">
                  Find a reputable cryptocurrency exchange that suits your needs. Popular platforms
                  like Coinbase, Binance, or Kraken allow you to buy Bitcoin with ease. Use our
                  exchange finder to find an exchange that in your country.
                </p>
              </div>
            </div>
            <div className="flex gap-x-4">
              <p className="h-8 w-8 flex justify-center items-center rounded-full bg-farhan-black text-white text-xl">
                2
              </p>
              <div className="flex flex-col gap-y-1 max-w-xs">
                <p className="font-semibold text-xl">Create an Account</p>
                <p className="font-light">
                  Sign up and verify your identity on the chosen exchange. This step ensures
                  security and compliance with regulations.
                </p>
              </div>
            </div>
            <div className="flex gap-x-4">
              <p className="h-8 w-8 flex justify-center items-center rounded-full bg-farhan-black text-white text-xl">
                3
              </p>
              <div className="flex flex-col gap-y-1 max-w-xs">
                <p className="font-semibold text-xl">Deposit Funds</p>
                <p className="font-light">
                  Link your bank account, credit card, or use other accepted payment methods to
                  deposit funds into your exchange account.
                </p>
              </div>
            </div>
            <div className="flex gap-x-4">
              <p className="h-8 w-8 flex justify-center items-center rounded-full bg-farhan-black text-white text-xl">
                4
              </p>
              <div className="flex flex-col gap-y-1 max-w-xs">
                <p className="font-semibold text-xl">Place an Order</p>
                <p className="font-light">
                  Navigate to the trading section, select Bitcoin (BTC), and place your order. You
                  can choose from market, limit, or other order types based on your preferences.
                </p>
              </div>
            </div>
            <Image
              alt="Man with Bitcoin in his shopping cart"
              className="md:row-span-2"
              src={buyBitcoinSvg}
            />
          </LearnMoreList>
        </LearnMoreSection>
        <LearnMoreSection>
          <LearnMoreNumber className="text-farhan-black">2</LearnMoreNumber>
          <h2 className="font-bold text-3xl text-center text-farhan-black tracking-wide">
            Send Bitcoin
          </h2>
          <LearnMoreList>
            <div className="flex gap-x-4">
              <p className="h-8 w-8 flex justify-center items-center rounded-full bg-farhan-black text-white text-xl">
                1
              </p>
              <div className="flex flex-col gap-y-1 max-w-xs">
                <p className="font-semibold text-xl">Withdraw Bitcoin</p>
                <p className="font-light">
                  Navigate to the withdrawal or send section of your exchange. Select Bitcoin (BTC)
                  as the cryptocurrency to send.
                </p>
              </div>
            </div>
            <div className="flex gap-x-4">
              <p className="h-8 w-8 flex justify-center items-center rounded-full bg-farhan-black text-white text-xl">
                2
              </p>
              <div className="flex flex-col gap-y-1 max-w-xs">
                <p className="font-semibold text-xl">Input Recipient&apos;s Wallet Address</p>
                <p className="font-light">
                  Input your loved one&apos;s Bitcoin wallet address. It&apos;s essential to ensure
                  the address is accurate to avoid any issues.
                </p>
              </div>
            </div>
            <div className="flex gap-x-4">
              <p className="h-8 w-8 flex justify-center items-center rounded-full bg-farhan-black text-white text-xl">
                3
              </p>
              <div className="flex flex-col gap-y-1 max-w-xs">
                <p className="font-semibold text-xl">Specify Amount</p>
                <p className="font-light">
                  Enter the amount of Bitcoin you wish to send to your friend or family member.
                  Double-check for precision.
                </p>
              </div>
            </div>
            <div className="flex gap-x-4">
              <p className="h-8 w-8 flex justify-center items-center rounded-full bg-farhan-black text-white text-xl">
                4
              </p>
              <div className="flex flex-col gap-y-1 max-w-xs">
                <p className="font-semibold text-xl">Review and Confirm</p>
                <p className="font-light">
                  Review all the details, including the destination wallet address and the amount.
                  Confirm the transaction.
                </p>
              </div>
            </div>
            <Image
              alt="Bitcoin being sent from a phone"
              className="row-span-2"
              src={sendBitcoinSvg}
            />
          </LearnMoreList>
        </LearnMoreSection>
        <LearnMoreSection>
          <LearnMoreNumber className="text-bitcoin-orange">3</LearnMoreNumber>
          <h2 className="font-bold text-3xl text-center text-farhan-black tracking-wide">
            Convert Bitcoin to Cash
          </h2>
          <LearnMoreList className="md:!grid-rows-4">
            <div className="flex gap-x-4">
              <p className="h-8 w-8 flex justify-center items-center rounded-full bg-farhan-black text-white text-xl">
                1
              </p>
              <div className="flex flex-col gap-y-1 max-w-xs">
                <p className="font-semibold text-xl">Access a Local Exchange</p>
                <p className="font-light">
                  Advise your friend to find a reputable local cryptocurrency exchange in their
                  region. Ensure it supports their local fiat currency.
                </p>
              </div>
            </div>
            <div className="flex gap-x-4">
              <p className="h-8 w-8 flex justify-center items-center rounded-full bg-farhan-black text-white text-xl">
                2
              </p>
              <div className="flex flex-col gap-y-1 max-w-xs">
                <p className="font-semibold text-xl">Create an Account</p>
                <p className="font-light">
                  They&apos;ll need to sign up and complete any necessary identity verification on
                  the local exchange.
                </p>
              </div>
            </div>
            <div className="flex gap-x-4">
              <p className="h-8 w-8 flex justify-center items-center rounded-full bg-farhan-black text-white text-xl">
                3
              </p>
              <div className="flex flex-col gap-y-1 max-w-xs">
                <p className="font-semibold text-xl">Receive Bitcoin</p>
                <p className="font-light">
                  Instruct them to transfer the Bitcoin from their wallet to their account on the
                  local exchange.
                </p>
              </div>
            </div>
            <div className="flex gap-x-4">
              <p className="h-8 w-8 flex justify-center items-center rounded-full bg-farhan-black text-white text-xl">
                4
              </p>
              <div className="flex flex-col gap-y-1 max-w-xs">
                <p className="font-semibold text-xl">Place a Sell Order</p>
                <p className="font-light">
                  Your friend should navigate to the trading section and place a sell order for
                  their Bitcoin. They can choose the amount they wish to sell. Ensure they select
                  their local fiat currency.
                </p>
              </div>
            </div>
            <div className="flex gap-x-4">
              <p className="h-8 w-8 flex justify-center items-center rounded-full bg-farhan-black text-white text-xl">
                5
              </p>
              <div className="flex flex-col gap-y-1 max-w-xs">
                <p className="font-semibold text-xl">Withdraw to Bank</p>
                <p className="font-light">
                  Once the sale is complete, advise your friend to withdraw the local currency to
                  their bank account. They can link their bank details with the exchange.
                </p>
              </div>
            </div>
            <Image
              alt="Man with Bitcoin in his shopping cart"
              className="row-span-2"
              src={bitcoinToCashSvg}
            />
          </LearnMoreList>
        </LearnMoreSection>
      </div>
    </div>
  );
};

const LearnMoreNumber = (
  props: React.DetailedHTMLProps<React.HTMLAttributes<HTMLParagraphElement>, HTMLParagraphElement>
) => (
  <p
    {...props}
    className={clsx(
      'absolute bg-white flex justify-center items-center rounded-full -left-12 shadow-2xl -top-12 w-24 h-24 text-7xl font-semibold',
      props.className
    )}
  />
);

const LearnMoreSection: React.FC<
  React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement>
> = (props) => (
  <div
    {...props}
    className={clsx(
      props.className,
      'bg-wu-yellow flex flex-col gap-y-8 max-w-5xl p-8 relative rounded-tr-3xl rounded-bl-3xl text-body-black'
    )}
  />
);

const LearnMoreList = (
  props: React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement>
) => (
  <div
    {...props}
    className={clsx(
      'gap-8 grid md:grid-flow-col grid-cols-1 md:grid-cols-2 md:grid-rows-3 max-w-3xl',
      props.className
    )}
  />
);

export default LearnMore;
