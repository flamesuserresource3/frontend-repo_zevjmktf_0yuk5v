import Spline from '@splinetool/react-spline';
import { motion } from 'framer-motion';

export default function Hero() {
  return (
    <section className="relative pt-24 md:pt-28 lg:pt-32 min-h-[88vh] overflow-hidden">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/VyGeZv58yuk8j7Yy/scene.splinecode" style={{ width: '100%', height: '100%' }} />
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-white/60 via-white/40 to-white" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 md:px-6 lg:px-8 grid lg:grid-cols-2 gap-8 items-center">
        <div className="py-10 md:py-16">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }} 
            animate={{ opacity: 1, y: 0 }} 
            transition={{ duration: 0.6 }}
            className="text-4xl md:text-6xl font-extrabold tracking-tight text-gray-900"
          >
            Build, release and stream unforgettable music albums
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }} 
            animate={{ opacity: 1, y: 0 }} 
            transition={{ duration: 0.7, delay: 0.1 }}
            className="mt-4 md:mt-6 text-base md:text-lg text-gray-700 max-w-xl"
          >
            A clean, futuristic platform to design interactive album drops with 3D visuals, gated content, and integrated streaming.
          </motion.p>

          <motion.div 
            initial={{ opacity: 0, y: 20 }} 
            animate={{ opacity: 1, y: 0 }} 
            transition={{ duration: 0.7, delay: 0.15 }}
            className="mt-6 md:mt-8 flex flex-col sm:flex-row gap-3"
          >
            <button className="px-6 py-3 rounded-xl bg-gray-900 text-white hover:bg-gray-800 transition shadow-lg shadow-gray-900/10">Start free</button>
            <button className="px-6 py-3 rounded-xl border border-gray-300 bg-white hover:bg-gray-50 transition">View demo</button>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, y: 20 }} 
            animate={{ opacity: 1, y: 0 }} 
            transition={{ duration: 0.8, delay: 0.2 }}
            className="mt-8 grid grid-cols-3 gap-4 text-center"
          >
            <div className="p-4 rounded-lg bg-white/70 backdrop-blur border">
              <div className="text-2xl font-bold">10k+</div>
              <div className="text-xs text-gray-500">Artists</div>
            </div>
            <div className="p-4 rounded-lg bg-white/70 backdrop-blur border">
              <div className="text-2xl font-bold">120k</div>
              <div className="text-xs text-gray-500">Albums Streamed</div>
            </div>
            <div className="p-4 rounded-lg bg-white/70 backdrop-blur border">
              <div className="text-2xl font-bold">4.9/5</div>
              <div className="text-xs text-gray-500">Avg. Rating</div>
            </div>
          </motion.div>
        </div>

        <div className="relative h-[420px] md:h-[520px] lg:h-[620px]">
          <div className="absolute inset-0 rounded-2xl border bg-white/50 backdrop-blur">
            <div className="absolute -inset-1 rounded-3xl bg-gradient-to-br from-purple-500/20 via-blue-500/20 to-cyan-400/20 blur-2xl" />
          </div>
          <div className="relative h-full rounded-2xl p-4">
            <div className="h-full rounded-xl bg-gradient-to-b from-gray-900 via-gray-800 to-gray-900 text-white p-6 flex flex-col">
              <div className="flex items-center justify-between">
                <div>
                  <div className="text-sm text-gray-300">Now playing</div>
                  <div className="text-xl font-semibold">Neon Echoes — Vol. 1</div>
                </div>
                <div className="h-8 w-8 rounded-full bg-white/10" />
              </div>
              <div className="mt-6 grid grid-cols-4 gap-3 flex-1">
                {Array.from({ length: 8 }).map((_, i) => (
                  <div key={i} className="rounded-lg bg-white/5 border border-white/10" />
                ))}
              </div>
              <div className="mt-6 flex items-center gap-4">
                <div className="h-2 bg-white/20 rounded-full flex-1">
                  <div className="h-2 bg-white rounded-full w-1/3" />
                </div>
                <div className="text-sm text-gray-300">01:23</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
