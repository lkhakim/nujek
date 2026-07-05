export default function Home() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center p-8 sm:p-20">
      <main className="flex flex-col gap-12 items-center sm:items-start max-w-4xl w-full">
        {/* Hero Section */}
        <div className="flex flex-col gap-6 items-center sm:items-start text-center sm:text-left">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-primary/10 text-emerald-primary text-sm font-medium border border-emerald-primary/20">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-primary opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-primary"></span>
            </span>
            Kearifan Lokal, Teknologi Global
          </div>
          <div className="flex flex-col gap-2">
            <h1 className="text-6xl sm:text-7xl font-black">
              nujek<span className="text-yellow-accent">.</span>com
            </h1>
            <p className="text-xl sm:text-2xl text-zinc-500 dark:text-zinc-400 max-w-xl">
              Satu App, Semua Layanan di Tangan Anda. Cepat, Ringan, dan Terpercaya.
            </p>
          </div>
          <div className="flex gap-4 items-center flex-col sm:flex-row w-full sm:w-auto">
            <button className="w-full sm:w-auto px-8 py-4 bg-emerald-primary hover:bg-emerald-primary/90 text-white rounded-2xl font-bold shadow-lg shadow-emerald-primary/20 transition-all hover:scale-105 active:scale-95">
              Download Sekarang
            </button>
            <button className="w-full sm:w-auto px-8 py-4 bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 hover:bg-zinc-50 dark:hover:bg-zinc-800 rounded-2xl font-bold transition-all">
              Jadi Mitra Kami
            </button>
          </div>
        </div>

        {/* Features Grid */}
        <div className="grid gap-6 sm:grid-cols-3 w-full">
          {[
            { title: "Super Ringan", desc: "Hanya 5.6MB, tidak membebani memori HP Anda.", color: "emerald" },
            { title: "Lengkap", desc: "Nu-Ride, Nu-Food, Nu-Taxi, hingga Nu-Fast.", color: "yellow" },
            { title: "Lokal", desc: "Dukungan penuh untuk komunitas dan ekonomi daerah.", color: "emerald" }
          ].map((feature, i) => (
            <div key={i} className="group p-8 rounded-3xl border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900/50 hover:border-emerald-primary/50 transition-all duration-300">
              <div className={`w-12 h-12 rounded-2xl mb-4 flex items-center justify-center ${feature.color === 'emerald' ? 'bg-emerald-primary/10 text-emerald-primary' : 'bg-yellow-accent/10 text-yellow-accent'}`}>
                <div className="w-6 h-6 border-2 border-current rounded-lg" />
              </div>
              <h3 className="text-xl font-bold mb-2 group-hover:text-emerald-primary transition-colors">{feature.title}</h3>
              <p className="text-zinc-500 dark:text-zinc-400 leading-relaxed">
                {feature.desc}
              </p>
            </div>
          ))}
        </div>
      </main>

      <footer className="mt-32 pb-8 text-sm text-zinc-400 dark:text-zinc-600 flex flex-col items-center gap-4">
        <div className="flex gap-8">
          <a href="#" className="hover:text-emerald-primary">Tentang Kami</a>
          <a href="#" className="hover:text-emerald-primary">Layanan</a>
          <a href="#" className="hover:text-emerald-primary">Bantuan</a>
        </div>
        <p>© 2026 PT Nusantara Ojek Indonesia. Semua Hak Dilindungi.</p>
      </footer>
    </div>
  );
}
