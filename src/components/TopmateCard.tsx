export default function TopmateCard() {
  return (
    <div className="relative rounded-2xl bg-gradient-to-br from-neutral-900 to-black border border-white/10 p-8 overflow-hidden group">
      {/* Background glow effect */}
      <div className="absolute top-0 right-0 -mr-20 -mt-20 w-64 h-64 bg-emerald-500/10 rounded-full blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>

      <div className="relative z-10 flex flex-col md:flex-row gap-8 items-center justify-between">
        <div className="flex-1">
          <div className="flex items-center gap-3 mb-3">
            <span className="px-3 py-1 text-xs font-semibold bg-emerald-500/20 text-emerald-400 rounded-full border border-emerald-500/30">
              Community Core
            </span>
            <span className="px-3 py-1 text-xs font-semibold bg-blue-500/20 text-blue-400 rounded-full border border-blue-500/30">
              People's Choice
            </span>
            <span className="px-3 py-1 text-xs font-semibold bg-purple-500/20 text-purple-400 rounded-full border border-purple-500/30">
              Top 5%
            </span>
          </div>

          <h3 className="text-3xl font-bold mb-2">Book a 1-on-1 Call</h3>
          <p className="text-gray-400 max-w-lg mb-6">
            Need guidance on system design, frontend architecture, or career growth?
            Let's connect on Topmate to discuss your goals and challenges.
          </p>

          <div className="flex flex-wrap gap-6 mb-6 md:mb-0">
            <div className="flex flex-col">
              <span className="text-2xl font-bold text-white">13+</span>
              <span className="text-sm text-gray-500 uppercase tracking-wider">Bookings</span>
            </div>
            <div className="w-px bg-white/10 hidden md:block"></div>
            <div className="flex flex-col">
              <span className="text-2xl font-bold text-yellow-400 flex items-center gap-1">
                5.0
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 fill-current" viewBox="0 0 20 20">
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
              </span>
              <span className="text-sm text-gray-500 uppercase tracking-wider">Rating</span>
            </div>
          </div>
        </div>

        <div className="flex-shrink-0 w-full md:w-auto">
          <a
            href="https://topmate.io/learneradarsh/"
            target="_blank"
            rel="noreferrer"
            className="inline-flex w-full md:w-auto items-center justify-center gap-2 px-8 py-4 bg-white text-black font-bold rounded-xl hover:bg-gray-200 transition-all duration-300 transform hover:scale-105 shadow-[0_0_20px_rgba(255,255,255,0.1)] hover:shadow-[0_0_30px_rgba(255,255,255,0.2)]"
          >
            <span>Book on Topmate</span>
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
            </svg>
          </a>
        </div>
      </div>
    </div>
  );
}
