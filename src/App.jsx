import { lazy, Suspense } from 'react';
import { Route, Routes } from 'react-router-dom';
import { Layout } from './components/layout/Layout.jsx';
import HomePage from './pages/HomePage.jsx';

const HowItWorksPage = lazy(() => import('./pages/HowItWorksPage.jsx'));
const SecurityPage = lazy(() => import('./pages/SecurityPage.jsx'));
const FeesPage = lazy(() => import('./pages/FeesPage.jsx'));
const FaqPage = lazy(() => import('./pages/FaqPage.jsx'));
const AboutPage = lazy(() => import('./pages/AboutPage.jsx'));
const ContactPage = lazy(() => import('./pages/ContactPage.jsx'));
const GuidesPage = lazy(() => import('./pages/GuidesPage.jsx'));
const GuidePage = lazy(() => import('./pages/GuidePage.jsx'));
const GlossaryPage = lazy(() => import('./pages/GlossaryPage.jsx'));
const ChangelogPage = lazy(() => import('./pages/ChangelogPage.jsx'));
const PaymentMethodsPage = lazy(() => import('./pages/PaymentMethodsPage.jsx'));
const TermsPage = lazy(() => import('./pages/legal/TermsPage.jsx'));
const PrivacyPage = lazy(() => import('./pages/legal/PrivacyPage.jsx'));
const RiskPage = lazy(() => import('./pages/legal/RiskPage.jsx'));
const NotFoundPage = lazy(() => import('./pages/NotFoundPage.jsx'));

export default function App() {
  return (
    <Suspense fallback={<div className="min-h-screen bg-ink-950" />}>
      <Routes>
        <Route element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route path="how-it-works" element={<HowItWorksPage />} />
          <Route path="security" element={<SecurityPage />} />
          <Route path="fees" element={<FeesPage />} />
          <Route path="faq" element={<FaqPage />} />
          <Route path="about" element={<AboutPage />} />
          <Route path="contact" element={<ContactPage />} />
          <Route path="guides" element={<GuidesPage />} />
          <Route path="guides/:slug" element={<GuidePage />} />
          <Route path="glossary" element={<GlossaryPage />} />
          <Route path="changelog" element={<ChangelogPage />} />
          <Route path="payment-methods" element={<PaymentMethodsPage />} />
          <Route path="legal/terms" element={<TermsPage />} />
          <Route path="legal/privacy" element={<PrivacyPage />} />
          <Route path="legal/risk" element={<RiskPage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Route>
      </Routes>
    </Suspense>
  );
}
