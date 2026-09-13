import { LegalPage } from './LegalPage.jsx';

export default function RiskPage() {
  return (
    <LegalPage title="Risk disclosure" description="Understand the risks of buying, selling and holding XLM." updated="September 2026">
      <h2>Price volatility</h2>
      <p>The value of XLM against the Naira can rise or fall sharply within minutes. You could lose part or all of the value you hold.</p>

      <h2>Irreversible transactions</h2>
      <p>Stellar transactions cannot be reversed. XLM sent to a wrong address, or released before payment arrived, cannot be recovered by Nexlm.</p>

      <h2>Counterparty and payment risk</h2>
      <p>
        Escrow protects the XLM side of a trade, but Naira payments happen outside Nexlm through banks and mobile money providers. Reversed transfers,
        fake receipts and third-party payments are risks you must guard against.
      </p>

      <h2>Regulatory risk</h2>
      <p>
        Rules on crypto-asset trading in Nigeria continue to evolve. Changes in regulation or banking policy could restrict how Nexlm or your payment
        providers operate.
      </p>

      <h2>Technology risk</h2>
      <p>Network outages, software bugs or cyberattacks could delay trades or affect access to your account.</p>

      <p>Only trade amounts you can afford to lose, and never trade on behalf of someone else.</p>
    </LegalPage>
  );
}
