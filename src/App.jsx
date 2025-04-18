
import "@fontsource/inter";
import PricingTable from "./components/PricingTable";
import Features from "./components/Features";
import Contact from "./components/Contact";
import Hero from "./components/Hero";
import AIBenefits from "./components/AIBenefits";
import Menu from "./components/Menu";

import { smoothScrollTo } from './utils/scrollUtils';
export default function MainPage() {
  console.log("MainPage component is rendering");
  console.log("Checking if component is rendering correctly");
  return (
    <div className="min-h-screen bg-white text-neutral-900 font-sans">

      {/* Header */}
      <Menu />


      {/* Hero Section */}
      <Hero videoUrl="https://www.youtube.com/embed/CDiVq3mPZc8?si=ARQb7RaqMQHSveb0" className="w-full h-auto" />

      <div className="h-1 bg-gray-200"></div>
      <section className="py-12 px-6 bg-white" id="aiBenefits">

        {/* AI Benefits */}
        <AIBenefits />
        <div className="h-1 bg-gray-200"></div>
        {/* AI Benefits end */}

        <Features
          orientation="left"
          imageSrc="/public/owui-dark.png"
          title="Smarter Teams, Better Decisions"
          description="Boost your team's productivity with shared AI memory, real-time suggestions, and easy access to knowledge. Our AI adds context to every chat, turning conversations into actionable insights."
        />
        <div className="h-1 bg-gray-200"></div>
        <Features
          orientation="right"
          imageSrc="/public/owui-knowledges.png"
          title="Bring Team Knowledge to Your AI Stack"
          description="Whether it's PDFs, structured data, or internal wikis, unify your team's knowledge under a private AI interface. Enjoy secure, offline access to information with no data leakage."
        />
        <div className="h-1 bg-gray-200"></div>
        <Features
          orientation="left"
          imageSrc="/public/owui-knowledges.png"
          title="Enhance Your AI Experience with Offline Custom Models"
          description="Run powerful AI models in a private, secure environment with a modern, browser-based interface. Perfect for sensitive tasks, this solution works without external connectivity and supports Markdown, LaTeX, and multi-turn conversations."
        />
        <div className="h-1 bg-gray-200"></div>
        {/* New Section end */}

        {/* Why Section*/}
        <section id="why" className="py-24 px-6 max-w-6xl mx-auto text-center">
          <h2 className="text-4xl font-semibold mb-12 tracking-tight">Why Choose Our Service?</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 text-left">
            <div>
              <h3 className="text-xl font-medium mb-3">Robust Infrastructure</h3>
              <p className="text-neutral-600">Built on AWS with ECS, RDS (PostgreSQL), and integrated CloudWatch monitoring. Our infrastructure is designed for performance, scalability, and high availability, so you can focus on what matters.</p>
            </div>
            <div>
              <h3 className="text-xl font-medium mb-3">Security &amp; Privacy Focused</h3>
              <p className="text-neutral-600">Your data's safety is our priority. We ensure compliance with data protection regulations, using encryption, access control, and continuous monitoring to keep your information secure.</p>
            </div>
            <div>
              <h3 className="text-xl font-medium mb-3">Quick Setup, No Hassle</h3>
              <p className="text-neutral-600">We manage the tech, so you can enjoy the benefits of our platform right away. With no setup time and proactive support, your team can focus on using AI, not managing it.</p>
            </div>
          </div>
        </section>
        <div className="h-1 bg-gray-200"></div>



        {/* Pricing */}
        <section id="pricing" className="py-24 px-6 bg-white text-center">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-4xl font-semibold mb-12">Pricing Tiers</h2>
            <PricingTable />
          </div>
        </section>
        {/* Pricing end */}


      </section>
      <div className="h-1 bg-gray-200"></div>

      {/* Contacts */}
      <Contact />

      {/* Footer */}
      <footer className="bg-neutral-900 text-white py-16 px-6">
        <div className="max-w-7xl mx-auto grid md:grid-cols-4 gap-12 text-sm">
          <div>
            <h3 className="font-semibold mb-4 text-white text-base">R&amp;D Solutions</h3>
            <p className="text-neutral-400 mb-4">Empowering enterprises to innovate with AI through our advanced platform.</p>
            <p className="text-neutral-500 text-xs">ISO 27001 Ready • GDPR Compliant • AWS Powered</p>
          </div>
          <div>
            <h3 className="font-semibold mb-4 text-white text-base">Explore</h3>
            <ul className="space-y-2 text-neutral-400">
              <li><a href="#" className="hover:text-white">Home</a></li>
              <li><a href="#" onClick={() => smoothScrollTo('why')} className="hover:text-white">Why Us</a></li>
              <li><a href="#aiBenefits" className="hover:text-white">AI Benefits</a></li>
              <li><a href="#pricing" className="hover:text-white">Pricing</a></li>
            </ul>
          </div>
          <div>
            <h3 className="font-semibold mb-4 text-white text-base">Support</h3>
            <ul className="space-y-2 text-neutral-400">              
              <li><a href="mailto:support@rnd-solutions.net" className="hover:text-white">Email Us</a></li>
              <li><a href="https://blog.contextops.ai" className="hover:text-white">Blog</a></li>
              <li>
                <a href="https://discord.gg/RNa7nds8" className="hover:text-white flex items-center">
                  <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path d="M20.317 4.369a19.791 19.791 0 00-4.885-1.515.074.074 0 00-.079.037c-.211.375-.444.864-.608 1.249a18.365 18.365 0 00-5.487 0 12.64 12.64 0 00-.617-1.249.077.077 0 00-.079-.037 19.736 19.736 0 00-4.885 1.515.069.069 0 00-.032.027C2.99 9.045 2.213 13.579 2.513 18.057a.082.082 0 00.031.056 19.9 19.9 0 005.993 3.03.077.077 0 00.084-.027c.462-.63.873-1.295 1.226-1.994a.076.076 0 00-.041-.105 13.19 13.19 0 01-1.872-.885.077.077 0 01-.008-.13c.126-.094.252-.192.373-.291a.075.075 0 01.077-.01c3.927 1.793 8.18 1.793 12.061 0a.075.075 0 01.078.009c.121.099.247.197.373.291a.077.077 0 01-.007.13 12.64 12.64 0 01-1.873.884.076.076 0 00-.04.106c.36.698.772 1.362 1.226 1.993a.076.076 0 00.084.028 19.876 19.876 0 005.994-3.03.082.082 0 00.031-.056c.334-4.479-.444-9.012-3.742-13.661a.06.06 0 00-.032-.027zM8.02 15.331c-1.182 0-2.156-1.085-2.156-2.419 0-1.333.955-2.418 2.156-2.418 1.21 0 2.175 1.095 2.156 2.418 0 1.334-.955 2.419-2.156 2.419zm7.974 0c-1.182 0-2.156-1.085-2.156-2.419 0-1.333.955-2.418 2.156-2.418 1.21 0 2.175 1.095 2.156 2.418 0 1.334-.946 2.419-2.156 2.419z"></path>
                  </svg>                  
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="font-semibold mb-4 text-white text-base">Legal</h3>
            <p className="text-neutral-400 mb-2">Our platform is an open-source project under the BSD 3-Clause License. Managed by R&amp;D Solutions, we ensure everything runs smoothly and complies with licensing terms.</p>
            <p className="text-neutral-500 text-xs">© {new Date().getFullYear()} R&amp;D Solutions. All rights reserved.</p>
          </div>
        </div>
      </footer>
      {/* Footer end */}

      {/* Scroll to Top Button */}
      <button
        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        className="fixed bottom-4 left-4 bg-blue-600 text-white p-3 rounded-full shadow-lg hover:bg-blue-700 focus:outline-none"
        aria-label="Scroll to top"
      >
        ↑
      </button>
    </div>
  );
}
