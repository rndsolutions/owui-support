import { smoothScrollTo } from '../utils/scrollUtils';

export default function PricingTable() {
  return (
    <div className="flex justify-center">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
      <div className="border border-gray-200 p-6 rounded-lg shadow-sm">
        <h3 className="text-xl font-semibold mb-4">Individual</h3>
        <p className="text-neutral-600 mb-4">Ideal for individual users.</p>
        <p className="text-2xl font-bold mb-4">$25/mo</p>
        <ul className="text-neutral-600 mb-6">
          <li>Access to all features</li>
          <li>Community support</li>
          <li>Regular updates</li>
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
    </div>
  );
}
