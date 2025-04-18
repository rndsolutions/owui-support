import { smoothScrollTo } from '../utils/scrollUtils';

export default function PricingTable() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
      <div className="border border-gray-200 p-6 rounded-lg shadow-sm">
        <h3 className="text-xl font-semibold mb-4">Starter</h3>
        <p className="text-neutral-600 mb-4">Great for small teams and personal projects.</p>
        <p className="text-2xl font-bold mb-4">Perfect for 10+ users</p>
        <ul className="text-neutral-600 mb-6">
          <li>Empower your team</li>
          <li>Leverage open-source models</li>
          <li>Join our community</li>
        </ul>
        <button onClick={() => smoothScrollTo('contacts')} className="w-full py-2 px-4 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition">Contact Sales</button>
      </div>
      <div className="border border-gray-200 p-6 rounded-lg shadow-sm">
        <h3 className="text-xl font-semibold mb-4">Pro</h3>
        <p className="text-neutral-600 mb-4">Perfect for growing teams.</p>
        <p className="text-2xl font-bold mb-4">Ideal for 50+ users</p>
        <ul className="text-neutral-600 mb-6">
          <li>Scale your operations</li>
          <li>Access hosted models</li>
          <li>24h support</li>
        </ul>
        <button onClick={() => smoothScrollTo('contacts')} className="w-full py-2 px-4 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition">Contact Sales</button>
      </div>
      <div className="border border-gray-200 p-6 rounded-lg shadow-sm">
        <h3 className="text-xl font-semibold mb-4">Enterprise</h3>
        <p className="text-neutral-600 mb-4">Includes personalized support and training.</p>
        <p className="text-2xl font-bold mb-4">Tailored for enterprises</p>
        <ul className="text-neutral-600 mb-6">
          <li>Unlimited users</li>
          <li>Custom integrations</li>
          <li>Priority support</li>
        </ul>
        <button onClick={() => smoothScrollTo('contacts')} className="w-full py-2 px-4 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition">Contact Sales</button>
      </div>
    </div>
  );
}
