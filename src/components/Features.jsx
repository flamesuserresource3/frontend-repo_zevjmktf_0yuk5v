import { Rocket, Headphones, Star, Shield } from 'lucide-react';

const features = [
  {
    icon: Rocket,
    title: 'Launch-ready drops',
    desc: 'Prebuilt templates to design and ship immersive album experiences in minutes.'
  },
  {
    icon: Headphones,
    title: 'Streaming built-in',
    desc: 'High-quality streaming with adaptive bitrate and playlist management.'
  },
  {
    icon: Star,
    title: 'Fan rewards',
    desc: 'Gated content, collectibles and milestones to reward superfans.'
  },
  {
    icon: Shield,
    title: 'Rights & security',
    desc: 'Track usage, protect your IP, and manage artist or label access.'
  }
];

export default function Features() {
  return (
    <section id="features" className="relative py-16 md:py-24">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[80%] h-48 bg-gradient-to-b from-purple-500/10 to-transparent blur-3xl" />
      </div>
      <div className="relative max-w-7xl mx-auto px-4 md:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-gray-900">Everything you need for a modern album release</h2>
          <p className="mt-3 text-gray-600">From teaser to tour, craft an immersive journey with clean, minimal visuals and powerful tools.</p>
        </div>

        <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map(({ icon: Icon, title, desc }) => (
            <div key={title} className="group rounded-2xl border bg-white/60 backdrop-blur p-6 hover:shadow-xl transition-all">
              <div className="h-10 w-10 rounded-xl bg-gradient-to-br from-purple-500 to-blue-500 text-white grid place-items-center shadow-md shadow-purple-500/20">
                <Icon size={18} />
              </div>
              <h3 className="mt-4 font-semibold text-gray-900">{title}</h3>
              <p className="mt-2 text-sm text-gray-600">{desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
