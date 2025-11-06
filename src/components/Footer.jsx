import { Github, Twitter, Mail } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="border-t bg-white">
      <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8 py-10">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="text-center md:text-left">
            <h3 className="text-gray-900 font-semibold">Aurora Albums</h3>
            <p className="text-gray-500 text-sm">Interactive, minimalist album drops for the future of music.</p>
          </div>
          <div className="flex items-center gap-4">
            <a aria-label="Twitter" className="p-2 rounded-lg border hover:bg-gray-50" href="#"><Twitter size={18} /></a>
            <a aria-label="GitHub" className="p-2 rounded-lg border hover:bg-gray-50" href="#"><Github size={18} /></a>
            <a aria-label="Email" className="p-2 rounded-lg border hover:bg-gray-50" href="#"><Mail size={18} /></a>
          </div>
        </div>
        <div className="mt-8 text-xs text-gray-500">© {new Date().getFullYear()} Aurora Labs. All rights reserved.</div>
      </div>
    </footer>
  );
}
