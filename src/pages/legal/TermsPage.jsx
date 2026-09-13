import { LegalPage } from './LegalPage.jsx';

export default function TermsPage() {
  return (
    <LegalPage title="Terms of use" description="The rules for using Nexlm to trade XLM peer to peer." updated="September 2026">
      <h2>1. What Nexlm is</h2>
      <p>
        Nexlm is a peer-to-peer marketplace that lets users trade XLM with each other for Nigerian Naira. Nexlm provides the order board, trade chat
        and on-chain escrow for XLM. Nexlm is not a party to trades and does not receive, hold or transmit Naira.
      </p>

      <h2>2. Eligibility</h2>
      <ul>
        <li>You must be at least 18 years old.</li>
        <li>You must verify your email address and complete BVN or NIN verification before trading.</li>
        <li>You may hold only one Nexlm account, in your own name.</li>
      </ul>

      <h2>3. Trading rules</h2>
      <ul>
        <li>Buyers must pay the exact amount, from an account in their own name, within the payment window.</li>
        <li>Buyers must not mark a trade as paid before sending payment.</li>
        <li>Sellers must release XLM promptly once payment has been received.</li>
        <li>All trade communication must happen in the Nexlm trade chat.</li>
      </ul>

      <h2>4. Escrow</h2>
      <p>
        When a trade opens, the seller&apos;s XLM is moved into a dedicated Stellar escrow account co-signed by Nexlm. Escrowed XLM is released to the
        buyer on the seller&apos;s confirmation or returned to the seller if the trade is cancelled or expires. Stellar transactions are final.
      </p>

      <h2>5. Prohibited activity</h2>
      <ul>
        <li>Fraud, chargeback abuse, third-party payments or money laundering.</li>
        <li>Using another person&apos;s identity or payment account.</li>
        <li>Harassment of other users or attempts to move trades off-platform.</li>
      </ul>

      <h2>6. Suspension</h2>
      <p>We may suspend or close accounts that break these terms, and cooperate with lawful requests from Nigerian authorities.</p>

      <h2>7. Liability</h2>
      <p>
        Nexlm is provided as is. We are not liable for losses caused by market price movements, payments made outside the platform, or a user&apos;s
        failure to follow these terms.
      </p>
    </LegalPage>
  );
}
