import { smoothScrollTo } from '../utils/scrollUtils';

export default function PricingTable() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
      <div className="border border-gray-200 p-6 rounded-lg shadow-sm">
        <h3 className="text-xl font-semibold mb-4">Starter</h3>
        <p className="text-neutral-600 mb-4">Best for PoCs and internal testing.</p>
        <p className="text-2xl font-bold mb-4">€299/month</p>
        <ul className="text-neutral-600 mb-6">
          <li>10 Users Included</li>
          <li>Open-source LLM Model Options</li>
          <li>Community Support</li>
        </ul>
        <button onClick={() => smoothScrollTo('contacts')} className="w-full py-2 px-4 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition">Contact Sales</button>
      </div>
      <div className="border border-gray-200 p-6 rounded-lg shadow-sm">
        <h3 className="text-xl font-semibold mb-4">Pro</h3>
        <p className="text-neutral-600 mb-4">Multi-tenant or dedicated.</p>
        <p className="text-2xl font-bold mb-4">€990/month</p>
        <ul className="text-neutral-600 mb-6">
          <li>50 Users Included</li>
          <li>Open + Hosted LLM Model Options</li>
          <li>24h SLA (email)</li>
        </ul>
        <button onClick={() => smoothScrollTo('contacts')} className="w-full py-2 px-4 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition">Contact Sales</button>
      </div>
      <div className="border border-gray-200 p-6 rounded-lg shadow-sm">
        <h3 className="text-xl font-semibold mb-4">Enterprise</h3>
        <p className="text-neutral-600 mb-4">Includes onboarding + training.</p>
        <p className="text-2xl font-bold mb-4">Custom</p>
        <ul className="text-neutral-600 mb-6">
          <li>50+ Users Included</li>
          <li>Custom LLM Model Integrations</li>
          <li>4h SLA (email/chat)</li>
        </ul>
        <button onClick={() => smoothScrollTo('contacts')} className="w-full py-2 px-4 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition">Contact Sales</button>
      </div>
    </div>
  );
}
