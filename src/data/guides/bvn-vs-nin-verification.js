export default {
  slug: 'bvn-vs-nin-verification',
  title: 'BVN or NIN? Verifying your identity on Nexlm',
  summary: 'Which ID to use, what we check, what we store, and how to fix a failed verification.',
  category: 'Account',
  readMinutes: 3,
  updated: '2026-09-13',
  sections: [
    {
      heading: 'Why verification is required',
      body: [
        'Every Nexlm trader is identity-verified before trading Naira. It keeps scammers and duplicate accounts off the platform and lets you trade with people who have a real identity attached.',
      ],
    },
    {
      heading: 'BVN or NIN — which should I use?',
      body: ['Either works. Use whichever your details are most accurate on.'],
      list: [
        'BVN (Bank Verification Number) — 11 digits, dial *565*0# on your registered line to retrieve it',
        'NIN (National Identification Number) — 11 digits, found on your NIN slip or dial *346#',
      ],
    },
    {
      heading: 'What we check',
      body: [
        'We confirm the ID number exists and that the first name, last name and date of birth you enter match the official record. You must be 18 or older.',
      ],
    },
    {
      heading: 'What we store',
      body: [
        'Your full BVN or NIN is never stored. We keep the last four digits, the name on the check, and a one-way fingerprint that stops the same ID being used on another account.',
      ],
    },
    {
      heading: 'If verification fails',
      list: [
        'Enter your names exactly as they appear on the record, including order and spelling',
        'Check your date of birth — BVN records sometimes differ from other documents',
        'Try the other ID type if one record is out of date',
        'Contact support if your ID is flagged as already in use',
      ],
    },
  ],
};
