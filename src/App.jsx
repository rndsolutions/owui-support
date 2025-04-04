
import "@fontsource/inter";
import PricingTable from "./components/PricingTable";
import Features from "./components/Features";
import Contact from "./components/Contact";
import Hero from "./components/Hero";

export default function OpenWebUIPage() {
  console.log("OpenWebUIPage component is rendering");
  console.log("Checking if component is rendering correctly");
  return (
    <div className="min-h-screen bg-white text-neutral-900 font-sans">

      {/* Header */}
      <header className="sticky top-0 z-50 bg-white shadow-sm border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 py-3 flex justify-between items-center">
          <div className="text-lg font-semibold text-neutral-900">Managed <span className="text-blue-600"> AI</span> Services with love <span role="img" aria-label="heart">❤️</span> by R&D Solutions</div>
          <nav className="hidden md:flex gap-6 text-sm font-medium text-neutral-700">
            <a href="#" className="hover:text-blue-600">Home</a>
            <a href="#" onClick={() => window.scrollTo({ top: document.getElementById('why')?.offsetTop - 50, behavior: 'smooth' })} className="hover:text-blue-600">Why Us</a>
            <a href="#" onClick={() => window.scrollTo({ top: document.getElementById('ai-benefits')?.offsetTop - 50, behavior: 'smooth' })} className="hover:text-blue-600">AI Benefits</a>
            <a href="#pricing" className="hover:text-blue-600">Pricing</a>
            <a href="#contact" className="hover:text-blue-600">Contact</a>
          </nav>
        </div>
      </header>
      

      {/* Hero Section */}
      <Hero videoUrl="https://www.youtube.com/embed/CDiVq3mPZc8?si=ARQb7RaqMQHSveb0" />
      {/* <section className="relative px-6 py-32 text-center bg-gradient-to-br from-neutral-900 via-gray-900 to-black text-white overflow-hidden">
        <div className="absolute inset-0 opacity-10 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] mix-blend-soft-light"></div>
        <div className="relative z-10">
          <h1 className="text-5xl md:text-6xl font-semibold tracking-tight mb-6">Transform you day-to-day operation with AI Enabled capabiliteis</h1>
          <p className="text-lg md:text-2xl mb-10 text-neutral-300 max-w-3xl mx-auto">Enterprise-grade security. Accelerated innovation. AI solutions designed to empower your teams and transform decision-making.</p>
          <a href="#contact" className="inline-block px-6 py-3 border border-white rounded-full text-white hover:bg-white hover:text-neutral-900 transition font-medium shadow-md">Get Started</a>
        </div>
      </section> */}



      <div className="h-1 bg-gray-200"></div>
      <section className="py-24 px-6 bg-white" id="contact">

        {/* AI Benefits */}
        <section id="ai-benefits" className="py-24 px-6 bg-gradient-to-br from-white to-neutral-100">
          <div className="max-w-6xl mx-auto text-center">
            <h2 className="text-4xl font-semibold mb-12 tracking-tight">The Power of AI for the Enterprise</h2>
            <p className="text-lg text-neutral-600 mb-8">Our AI solutions empower enterprises to innovate faster, streamline operations, and enhance decision-making processes.</p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-10 text-left">
              <div className="bg-white border border-neutral-200 p-6 rounded-xl shadow-sm hover:shadow-md transition">
                <h3 className="text-xl font-semibold mb-2 flex items-center gap-2">Accelerated Decision-Making</h3>
                <p className="text-neutral-600">Leverage LLMs to surface insights faster, reduce analysis time, and empower every team to move quickly with confidence.</p>
              </div>
              <div className="bg-white border border-neutral-200 p-6 rounded-xl shadow-sm hover:shadow-md transition">
                <h3 className="text-xl font-semibold mb-2 flex items-center gap-2">Process Automation</h3>
                <p className="text-neutral-600">Automate document processing, internal support, reporting, and more—freeing teams from repetitive tasks and boosting output.</p>
              </div>
              <div className="bg-white border border-neutral-200 p-6 rounded-xl shadow-sm hover:shadow-md transition">
                <h3 className="text-xl font-semibold mb-2 flex items-center gap-2">Knowledge at Your Fingertips</h3>
                <p className="text-neutral-600">Make enterprise knowledge instantly accessible to every employee through secure and context-aware natural language interfaces.</p>
              </div>
            </div>
          </div>
        </section>
        <div className="h-1 bg-gray-200"></div>
        {/* AI Benefits end */}

        <Features
          orientation="left"
          imageSrc="/public/owui-dark.png"
          title="Dark Mode Feature"
          description="Experience our platform in dark mode, providing a sleek and modern interface that reduces eye strain and enhances focus."
        />
        <div className="h-1 bg-gray-200"></div>
        <Features
          orientation="right"
          imageSrc="/public/owui-knowledges.png"
          title="Knowledge Integration"
          description="Seamlessly integrate your enterprise knowledge bases, making information readily accessible and actionable for your teams."
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
              <li><a href="#why" className="hover:text-white">Why Us</a></li>
              <li><a href="#ai-benefits" className="hover:text-white">AI Benefits</a></li>
              <li><a href="#pricing" className="hover:text-white">Pricing</a></li>
            </ul>
          </div>
          <div>
            <h3 className="font-semibold mb-4 text-white text-base">Support</h3>
            <ul className="space-y-2 text-neutral-400">
              <li><a href="#contact" className="hover:text-white">Contact</a></li>
              <li><a href="mailto:contact@rnd-solutions.net" className="hover:text-white">Email Us</a></li>
              <li><a href="#" className="hover:text-white">Documentation</a></li>
            </ul>
          </div>
          <div>
            <h3 className="font-semibold mb-4 text-white text-base">Legal</h3>
            <p className="text-neutral-400 mb-2">OpenWebUI is licensed under BSD 3-Clause. This service is independently managed and maintained by R&amp;D Solutions.</p>
            <p className="text-neutral-500 text-xs">© {new Date().getFullYear()} R&amp;D Solutions. All rights reserved.</p>
          </div>
        </div>
      </footer>
      {/* Footer end */}

    </div>
  );
}
