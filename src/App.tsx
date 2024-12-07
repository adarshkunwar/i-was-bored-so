function App() {
  return (
    <div className="min-h-screen bg-neutral-50 flex items-center justify-center p-4">
      <div className="relative w-full max-w-md">
        <div className="bg-white border border-neutral-200 rounded-2xl shadow-lg overflow-hidden">
          <div className="p-8 space-y-6 text-center">
            <div className="text-lg font-medium text-neutral-500 tracking-wide uppercase">
              I was
            </div>
            <div className="text-6xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-pink-600">
              Bored
            </div>
            <div className="text-sm font-semibold text-neutral-400 uppercase tracking-widest">
              so
            </div>
            <button className="w-full group relative px-6 py-3.5 rounded-xl bg-neutral-900 text-white font-semibold text-sm uppercase tracking-wider transition-all duration-300 hover:bg-neutral-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-neutral-500">
              <span className="relative z-10"> I Created Something</span>
              <span className="absolute inset-0 rounded-xl bg-neutral-800 opacity-0 group-hover:opacity-20 transition-opacity duration-300"></span>
            </button>
          </div>
        </div>
        <div className="absolute -bottom-4 -left-4 -right-4 h-2 bg-gradient-to-r from-indigo-400 to-pink-400 rounded-b-2xl opacity-30 blur-lg"></div>
      </div>
    </div>
  );
}

export default App;
