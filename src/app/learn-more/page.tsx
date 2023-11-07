import React from 'react';
import { SectionWithGutters } from '../components/SectionWithGutters';

const LearnMore = () => {
  return (
    <div>
      <h1 className="font-bold text-4xl">Learn More</h1>
      <SectionWithGutters>
        <h2 className="text-2xl">Buy Bitcoin</h2>
        <ol className="list-decimal list-inside max-w-xl">
          <li className="list-item">
            <strong>Choose an Exchange</strong>: Find a reputable cryptocurrency exchange that suits
            your needs. Popular platforms like Coinbase, Binance, or Kraken allow you to buy Bitcoin
            with ease. Use our exchange finder to find an exchange that in your country.
          </li>
          <li className="list-item">
            <strong>Create an Account</strong>: Sign up and verify your identity on the chosen
            exchange. This step ensures security and compliance with regulations.
          </li>
          <li className="list-item">
            <strong>Deposit Funds</strong>: Link your bank account, credit card, or use other
            accepted payment methods to deposit funds into your exchange account.
          </li>
          <li className="list-item">
            <strong>Place an Order</strong>: Navigate to the trading section, select Bitcoin (BTC),
            and place your order. You can choose from market, limit, or other order types based on
            your preferences.
          </li>
        </ol>
      </SectionWithGutters>
      <SectionWithGutters>
        <h2 className="text-2xl">Send Bitcoin</h2>
        <ol className="list-decimal list-inside max-w-xl">
          <li className="list-item">
            <strong>Withdraw Bitcoin</strong>: Navigate to the withdrawal or send section of your
            exchange. Select Bitcoin (BTC) as the cryptocurrency to send.
          </li>
          <li className="list-item">
            <strong>Input Recipient&apos;s Wallet Address</strong>: Input your loved one&apos;s
            Bitcoin wallet address. It&apos;s essential to ensure the address is accurate to avoid
            any issues.
          </li>
          <li className="list-item">
            <strong>Specify Amount</strong>: Enter the amount of Bitcoin you wish to send to your
            friend or family member. Double-check for precision.
          </li>
          <li className="list-item">
            <strong>Review and Confirm</strong>: Review all the details, including the destination
            wallet address and the amount. Confirm the transaction.
          </li>
        </ol>
      </SectionWithGutters>
      <SectionWithGutters>
        <h2 className="text-2xl">Convert Bitcoin to Cash</h2>
        <ol className="list-decimal list-inside max-w-xl">
          <li className="list-item">
            <strong>Access a Local Exchange</strong>: Advise your friend to find a reputable local
            cryptocurrency exchange in their region. Ensure it supports their local fiat currency.
          </li>
          <li className="list-item">
            <strong>Create an Account</strong>: They&apos;ll need to sign up and complete any
            necessary identity verification on the local exchange.
          </li>
          <li className="list-item">
            <strong>Receive Bitcoin</strong>: Instruct them to transfer the Bitcoin from their
            wallet to their account on the local exchange.
          </li>
          <li className="list-item">
            <strong>Place a Sell Order</strong>: Your friend should navigate to the trading section
            and place a sell order for their Bitcoin. They can choose the amount they wish to sell.
            Ensure they select their local fiat currency.
          </li>
          <li className="list-item">
            <strong>Withdraw to Bank</strong>: Once the sale is complete, advise your friend to
            withdraw the local currency to their bank account. They can link their bank details with
            the exchange.
          </li>
        </ol>
      </SectionWithGutters>
    </div>
  );
};

export default LearnMore;
