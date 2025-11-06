import { Check } from 'lucide-react';

const tiers = [
  {
    name: 'Starter',
    price: 'Free',
    highlight: false,
    features: ['Up to 1 album', 'Basic streaming', 'Community support']
  },
  {
    name: 'Pro',
    price: '$19/mo',
    highlight: true,
    features: ['Unlimited albums', 'HD streaming', 'Custom domains', 'Fan rewards']
  },
  {
    name: 'Label',
    price: '$79/mo',
    highlight: false,
    features: ['Team access', 'Advanced analytics', 'Priority support']
  }
];

export default function Pricing() {
  return (
    <section id="pricing" className="py-16 md:py-24 bg-gradient-to-b from-white to-slate-50 border-t">
      <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-gray-900">Simple, transparent pricing</h2>
          <p className="mt-3 text-gray-600">Choose a plan that scales with your sound.</p>
        </div>

        <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-6">
          {tiers.map((tier) => (
            <div key={tier.name} className={`relative rounded-2xl border bg-white p-6 ${tier.highlight ? 'ring-2 ring-purple-500' : ''}`}>
              {tier.highlight && (
                <span className="absolute -top-3 right-4 px-3 py-1 text-xs rounded-full bg-purple-600 text-white shadow">Popular</span>
              )}
              <h3 className="text-lg font-semibold text-gray-900">{tier.name}</h3>
              <div className="mt-2 text-3xl font-bold">{tier.price}</div>
              <ul className="mt-4 space-y-2">
                {tier.features.map((f) => (
                  <li key={f} className="flex items-start gap-2 text-sm text-gray-700">
                    <Check className="mt-0.5 text-green-600" size={16} />
                    <span>{f}</span>
                  </li>
                ))}
              </ul>
              <button className={`mt-6 w-full px-4 py-2 rounded-xl transition ${tier.highlight ? 'bg-gray-900 text-white hover:bg-gray-800' : 'border hover:bg-gray-50'}`}>Choose {tier.name}</button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
