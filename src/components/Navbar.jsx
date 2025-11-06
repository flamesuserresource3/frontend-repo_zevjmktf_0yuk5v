import { useState } from 'react';
import { Menu, X, Music } from 'lucide-react';

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 backdrop-blur bg-white/60 border-b border-white/40">
      <nav className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8 h-16 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="h-9 w-9 rounded-xl bg-gradient-to-br from-purple-500 to-blue-500 grid place-items-center text-white shadow-md shadow-purple-500/20">
            <Music size={18} />
          </div>
          <span className="font-semibold text-gray-900 tracking-tight">Aurora Albums</span>
        </div>

        <div className="hidden md:flex items-center gap-8 text-sm">
          <a href="#features" className="text-gray-600 hover:text-gray-900 transition">Features</a>
          <a href="#pricing" className="text-gray-600 hover:text-gray-900 transition">Pricing</a>
          <a href="#demo" className="text-gray-600 hover:text-gray-900 transition">Live Demo</a>
        </div>

        <div className="hidden md:flex items-center gap-3">
          <button className="px-4 py-2 text-gray-700 hover:text-gray-900">Sign in</button>
          <button className="px-4 py-2 rounded-lg bg-gray-900 text-white hover:bg-gray-800 transition">Get Started</button>
        </div>

        <button aria-label="Toggle menu" className="md:hidden p-2" onClick={() => setOpen(!open)}>
          {open ? <X /> : <Menu />}
        </button>
      </nav>

      {open && (
        <div className="md:hidden bg-white border-t border-gray-100 px-4 pb-4">
          <div className="flex flex-col gap-2 py-3">
            <a href="#features" className="py-2 text-gray-700">Features</a>
            <a href="#pricing" className="py-2 text-gray-700">Pricing</a>
            <a href="#demo" className="py-2 text-gray-700">Live Demo</a>
          </div>
          <div className="flex gap-2">
            <button className="flex-1 px-4 py-2 rounded-lg border">Sign in</button>
            <button className="flex-1 px-4 py-2 rounded-lg bg-gray-900 text-white">Get Started</button>
          </div>
        </div>
      )}
    </header>
  );
}
