import { LegalPage } from './LegalPage.jsx';

export default function PrivacyPage() {
  return (
    <LegalPage title="Privacy policy" description="What data Nexlm collects, why, and how it is protected." updated="September 2026">
      <h2>Information we collect</h2>
      <ul>
        <li>Account details: email address, display name and optional phone number.</li>
        <li>Identity verification: your name, date of birth, ID type, and the last four digits of your BVN or NIN.</li>
        <li>Payout accounts you add so buyers can pay you.</li>
        <li>Trade records, chat messages and payment proof images you upload.</li>
        <li>Your Stellar wallet address and on-chain transaction history, which are public by nature.</li>
      </ul>

      <h2>What we don&apos;t store</h2>
      <p>
        We never store your full BVN or NIN. We keep a one-way keyed fingerprint to stop the same ID being used on multiple accounts. Passwords are
        stored only as bcrypt hashes, and wallet secret keys are encrypted with AES-256-GCM.
      </p>

      <h2>How we use it</h2>
      <ul>
        <li>To run trades, show your reputation and prevent fraud.</li>
        <li>To verify your identity with our KYC partner.</li>
        <li>To review disputes, using the trade chat and payment proof.</li>
        <li>To send account and trade emails.</li>
      </ul>

      <h2>Sharing</h2>
      <p>
        Your counterparty sees your display name, verification badge, trade stats and — if you are the seller — the payout account for that trade. We
        share identity data with our KYC provider for verification and with authorities only where the law requires.
      </p>

      <h2>Your rights</h2>
      <p>
        Under the Nigeria Data Protection Act you can request access to, correction of, or deletion of your personal data, subject to record-keeping
        obligations. Email privacy@nexlm.app.
      </p>
    </LegalPage>
  );
}
