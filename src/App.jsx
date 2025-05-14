import "@fontsource/inter";
import PricingTable from "./components/PricingTable";
import Features from "./components/Features";
import Contact from "./components/Contact";
import Hero from "./components/Hero";
import AIBenefits from "./components/AIBenefits";
import Menu from "./components/Menu";
import CookiesConsent from "./components/CookiesConsent";

import { smoothScrollTo } from "./utils/scrollUtils";
export default function MainPage() {
  console.log("MainPage component is rendering");
  console.log("Checking if component is rendering correctly");
  return (
    <div className="min-h-screen bg-white text-neutral-900 font-sans">
      {/* Header */}
      <Menu />

      {/* Hero Section */}
      <Hero
        videoUrl="https://www.youtube.com/embed/CDiVq3mPZc8?si=ARQb7RaqMQHSveb0"
        className="w-full h-auto"
      />

      <div className="h-1 bg-gray-200"></div>
      <section className="py-12 px-6 bg-white" id="aiBenefits">
        {/* AI Benefits */}
        <AIBenefits />
        <div className="h-1 bg-gray-200"></div>
        {/* AI Benefits end */}

        <Features
          orientation="right"
          imageSrc="/public/owui-knowledges.png"
          title="🏛️ Centralize Your Legal Knowledge with AI"
          description="Whether it's contracts, memos, compliance policies, or internal playbooks — bring your legal team's expertise into one secure AI workspace. ContextOps.ai ensures private, on-demand access to institutional knowledge with no data leakage or external exposure."
        />
        <div className="h-1 bg-gray-200"></div>
        <Features
          orientation="left"
          imageSrc="/public/owui-dark.png"
          title="🧠 Smarter Legal Teams, Faster Decisions"
          description="Accelerate legal workflows with AI-powered context, real-time clause suggestions, and instant access to institutional knowledge. ContextOps.ai adds legal insight to every interaction — turning routine reviews into strategic decisions."
        />
        <div className="h-1 bg-gray-200"></div>
        <Features
          orientation="right"
          imageSrc="/public/owui-knowledges.png"
          title="🛡️ Deploy Legal AI Your Way — Cloud, Hybrid, or Private"
          description="ContextOps.ai adapts to your legal team’s infrastructure and compliance needs. Whether you require cloud-based simplicity, hybrid security, or a fully private deployment, our platform gives you full control — without sacrificing performance or privacy."
        />
        <div className="h-1 bg-gray-200"></div>
        {/* New Section end */}

        {/* Why Section*/}
        <section id="why" className="py-24 px-6 max-w-6xl mx-auto text-center">
          <h2 className="text-4xl font-semibold mb-12 tracking-tight">
            Why Choose ContextOps.ai?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 text-left">
            <div>
              <h3 className="text-xl font-medium mb-3">
                🏗️ Built for Legal-Grade Performance
              </h3>
              <p className="text-neutral-600">
                Hosted on secure, scalable infrastructure with enterprise-grade reliability. ContextOps.ai ensures your legal workflows stay fast, available, and responsive — even during high-volume contract reviews.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-medium mb-3">
                🔐 Security & Compliance by Design
              </h3>
              <p className="text-neutral-600">
                Your legal data stays protected with end-to-end encryption, strict access controls, and full GDPR alignment. ContextOps.ai is built for teams where confidentiality isn’t optional — it’s mission-critical.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-medium mb-3">
                ⚙️ Fast Deployment, Zero Overhead
              </h3>
              <p className="text-neutral-600">
                No complex setup, no IT headaches. Our platform plugs into your existing document tools — so your team can start reviewing contracts, drafting memos, and analyzing risk within minutes.
              </p>
            </div>
          </div>
        </section>
        <div className="h-1 bg-gray-200"></div>

        {/* Pricing */}
        {/* <section id="pricing" className="py-24 px-6 bg-white text-center">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-4xl font-semibold mb-12">Pricing Tiers</h2>
            <PricingTable />
          </div>
        </section> */}
        {/* Pricing end */}
      </section>
      {/* <div className="h-1 bg-gray-200"></div> */}

      {/* Contacts */}
      <Contact />

      {/* Footer */}
      <footer className="bg-neutral-900 text-white py-16 px-6">
        <div className="max-w-7xl mx-auto grid md:grid-cols-4 gap-12 text-sm">
          <div>
            <h3 className="font-semibold mb-4 text-white text-base">
              R&amp;D Solutions
            </h3>
            <p className="text-neutral-400 mb-4">
              Empowering enterprises to innovate with AI through our advanced
              platform.
            </p>
            <p className="text-neutral-500 text-xs">
              ISO 27001 Ready • GDPR Compliant • AWS Powered
            </p>
          </div>
          <div>
            <h3 className="font-semibold mb-4 text-white text-base">Explore</h3>
            <ul className="space-y-2 text-neutral-400">
              <li>
                <a href="#" className="hover:text-white">
                  Home
                </a>
              </li>
              <li>
                <a
                  href="#"
                  onClick={() => smoothScrollTo("why")}
                  className="hover:text-white"
                >
                  Why Us
                </a>
              </li>
              <li>
                <a href="#aiBenefits" className="hover:text-white">
                  AI Benefits
                </a>
              </li>
              <li>
                <a href="#pricing" className="hover:text-white">
                  Pricing
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="font-semibold mb-4 text-white text-base">Support</h3>
            <ul className="space-y-2 text-neutral-400">
              <li>
                <a
                  href="mailto:support@rnd-solutions.net"
                  className="hover:text-white"
                >
                  Email Us
                </a>
              </li>
              <li>
                <a
                  href="https://blog.contextops.ai"
                  className="hover:text-white"
                >
                  Blog
                </a>
              </li>
              <li>
                <a
                  href="https://discord.gg/RNa7nds8"
                  className="hover:text-white flex items-center"
                >
                  <svg
                    className="w-5 h-5 mr-2"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M20.317 4.369a19.791 19.791 0 00-4.885-1.515.074.074 0 00-.079.037c-.211.375-.444.864-.608 1.249a18.365 18.365 0 00-5.487 0 12.64 12.64 0 00-.617-1.249.077.077 0 00-.079-.037 19.736 19.736 0 00-4.885 1.515.069.069 0 00-.032.027C2.99 9.045 2.213 13.579 2.513 18.057a.082.082 0 00.031.056 19.9 19.9 0 005.993 3.03.077.077 0 00.084-.027c.462-.63.873-1.295 1.226-1.994a.076.076 0 00-.041-.105 13.19 13.19 0 01-1.872-.885.077.077 0 01-.008-.13c.126-.094.252-.192.373-.291a.075.075 0 01.077-.01c3.927 1.793 8.18 1.793 12.061 0a.075.075 0 01.078.009c.121.099.247.197.373.291a.077.077 0 01-.007.13 12.64 12.64 0 01-1.873.884.076.076 0 00-.04.106c.36.698.772 1.362 1.226 1.993a.076.076 0 00.084.028 19.876 19.876 0 005.994-3.03.082.082 0 00.031-.056c.334-4.479-.444-9.012-3.742-13.661a.06.06 0 00-.032-.027zM8.02 15.331c-1.182 0-2.156-1.085-2.156-2.419 0-1.333.955-2.418 2.156-2.418 1.21 0 2.175 1.095 2.156 2.418 0 1.334-.955 2.419-2.156 2.419zm7.974 0c-1.182 0-2.156-1.085-2.156-2.419 0-1.333.955-2.418 2.156-2.418 1.21 0 2.175 1.095 2.156 2.418 0 1.334-.946 2.419-2.156 2.419z"></path>
                  </svg>
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="font-semibold mb-4 text-white text-base">Legal</h3>
            <ul className="space-y-2 text-neutral-400">
              <li>
                <a
                  href="https://blog.contextops.ai/privacy/"
                  className="hover:text-white"
                >
                  Privacy Policy
                </a>
              </li>
              <li>
                <a
                  href="https://blog.contextops.ai/terms/"
                  className="hover:text-white"
                >
                  Terms of Service
                </a>
              </li>
            </ul>
          </div>
        </div>
      </footer>
      {/* Footer end */}

      {/* Scroll to Top Button */}
      <button
        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        className="fixed bottom-4 left-4 bg-blue-600 text-white p-3 rounded-full shadow-lg hover:bg-blue-700 focus:outline-none"
        aria-label="Scroll to top"
      >
        ↑
      </button>
      <CookiesConsent />
    </div>
  );
}
