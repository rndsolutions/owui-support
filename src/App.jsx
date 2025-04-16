
import "@fontsource/inter";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import PricingTable from "./components/PricingTable";
import BlogList from "./components/BlogList";
import BlogPost from "./components/BlogPost";
import Features from "./components/Features";
import Contact from "./components/Contact";
import Hero from "./components/Hero";
import AIBenefits from "./components/AIBenefits";
import Menu from "./components/Menu";

import { smoothScrollTo } from './utils/scrollUtils';
export default function OpenWebUIPage() {
  console.log("OpenWebUIPage component is rendering");
  console.log("Checking if component is rendering correctly");
  return (
    <Router>
      <div className="min-h-screen bg-white text-neutral-900 font-sans">
        {/* Header */}
        <Menu />

        {/* Main Content */}
        <Routes>
          <Route path="/" element={
            <>
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
                  title="Smarter Teams, Sharper Decisions"
                  description="Enhance team productivity with shared AI memory, real-time suggestions, and easy access to organizational knowledge. AI adds context to every discussion, turning conversations into actionable insights."
                />
                <div className="h-1 bg-gray-200"></div>
                <Features
                  orientation="right"
                  imageSrc="/public/owui-knowledges.png"
                  title="Bring Enterprise Knowledge to Your AI Stack"
                  description="Whether it's PDFs, structured data, or internal wikis, unify your proprietary knowledge under a private AI interface. Enable secure, offline retrieval augmented generation (RAG) for compliant, high-trust environments. Instant knowledge. No leakage."
                />
                <div className="h-1 bg-gray-200"></div>
                <Features
                  orientation="left"
                  imageSrc="/public/owui-knowledges.png"
                  title="Empower Your AI Experience with Offline Custom LLMs Support"
                  description="Run powerful AI language models in a fully private and isolated environment with a modern, browser-based interface. Designed for sensitive and air-gapped workloads, this solution operates without any external connectivity. Full support for Markdown, LaTeX, and multi-turn conversations is built in."
                />
                <div className="h-1 bg-gray-200"></div>
                {/* New Section end */}

                {/* Why Section*/}
                <section id="why" className="py-24 px-6 max-w-6xl mx-auto text-center">
                  <h2 className="text-4xl font-semibold mb-12 tracking-tight">Why Choose Our Managed Service?</h2>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-12 text-left">
                    <div>
                      <h3 className="text-xl font-medium mb-3">Enterprise-Grade Infrastructure</h3>
                      <p className="text-neutral-600">Deployed on AWS with ECS, RDS (PostgreSQL), and integrated CloudWatch monitoring. Our infrastructure is optimized for performance, scalability, and high availability. You get the robustness of cloud-native architecture without managing it yourself.</p>
                    </div>
                    <div>
                      <h3 className="text-xl font-medium mb-3">GDPR &amp; Security Aligned</h3>
                      <p className="text-neutral-600">Built with security first. ISO 27001-ready and fully compliant with data protection regulations. We implement encryption, access control, and continuous monitoring to ensure your data stays safe and compliant.</p>
                    </div>
                    <div>
                      <h3 className="text-xl font-medium mb-3">Fast Setup, No Overhead</h3>
                      <p className="text-neutral-600">We handle the stack, scaling, and updates—your team gets the power of OpenWebUI instantly. With zero setup time and proactive support, your teams can focus on using AI, not managing it.</p>
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
                      <li><a href="#contact" className="hover:text-white">Contact</a></li>
                      <li><a href="mailto:contact@rnd-solutions.net" className="hover:text-white">Email Us</a></li>
                      <li><a href="/blog" className="hover:text-white">Blog</a></li>
                    </ul>
                  </div>
                  <div>
                    <h3 className="font-semibold mb-4 text-white text-base">Legal</h3>
                    <p className="text-neutral-400 mb-2">OpenWebUI is an open-source project licensed under the BSD 3-Clause License. This service is independently managed and maintained by R&amp;D Solutions, ensuring compliance with all licensing terms.</p>
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
            </>
          } />
          <Route path="/blog" element={<BlogList />} />
          <Route path="/blog/:id" element={<BlogPost />} />
        </Routes>

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
                <li><a href="#contact" className="hover:text-white">Contact</a></li>
                <li><a href="mailto:contact@rnd-solutions.net" className="hover:text-white">Email Us</a></li>
                <li><a href="https://docs.contextops.ai" className="hover:text-white">Docs</a></li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-4 text-white text-base">Legal</h3>
              <p className="text-neutral-400 mb-2">OpenWebUI is an open-source project licensed under the BSD 3-Clause License. This service is independently managed and maintained by R&amp;D Solutions, ensuring compliance with all licensing terms.</p>
              <p className="text-neutral-500 text-xs">© {new Date().getFullYear()} R&amp;D Solutions. All rights reserved.</p>
            </div>
          </div>
        </footer>
        {/* Footer end */}
      </div>
    </Router>
  );
}
