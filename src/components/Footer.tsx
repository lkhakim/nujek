import Link from 'next/link';

export default function Footer() {
  const currentYear = new Date().getFullYear();
  const navLinks = [
    { name: 'Tentang Kami', href: '#tentang' },
    { name: 'Layanan', href: '#layanan' },
    { name: 'Mitra', href: '#mitra' },
    { name: 'Pusat Bantuan', href: '#bantuan' },
    { name: 'Kebijakan Privasi', href: '#privasi' },
  ];

  return (
    <footer className="w-full bg-white dark:bg-zinc-950/80 border-t border-zinc-200 dark:border-zinc-800 py-10">
      <div className="max-w-7xl mx-auto px-6 md:px-12 flex flex-col md:flex-row items-center md:items-start justify-between gap-8">
        {/* Logo and Copyright */}
        <div className="flex flex-col items-center md:items-start gap-3">
          <Link href="/" className="group flex items-center gap-1">
            <span className="text-2xl font-black tracking-tighter text-zinc-900 dark:text-zinc-50 transition-transform group-hover:scale-105">
              nujek<span className="text-yellow-accent">.</span>
            </span>
          </Link>
          <p className="text-sm text-zinc-500 dark:text-zinc-400 text-center md:text-left">
            © {currentYear} PT Nusantara Ojek Indonesia. <br className="md:hidden" />
            Semua Hak Dilindungi.
          </p>
        </div>

        {/* Navigation Links */}
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-x-8 gap-y-4 text-center md:text-left">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className="text-sm font-medium text-zinc-600 dark:text-zinc-400 hover:text-emerald-primary transition-colors"
            >
              {link.name}
            </Link>
          ))}
        </div>

        {/* Social Media (Placeholders) */}
        <div className="flex gap-4 items-center">
          {/* Replace with actual social media icons */}
          <a href="#" className="text-zinc-600 dark:text-zinc-400 hover:text-emerald-primary transition-colors">
            {/* Example Icon Placeholder */}
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-facebook"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/></svg>
          </a>
          <a href="#" className="text-zinc-600 dark:text-zinc-400 hover:text-emerald-primary transition-colors">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-instagram"><rect width="20" height="20" x="2" y="2" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/></svg>
          </a>
          <a href="#" className="text-zinc-600 dark:text-zinc-400 hover:text-emerald-primary transition-colors">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-twitter"><path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.4 3 4l-1-1c1.8 0 3.5.7 4.9 2.2 2-2.2 4.6-3.6 7.6-3.6s5.6 1.4 7.6 3.6c-1.4-1.5-3.2-2.2-5-2.2z"/><path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.4 3 4l-1-1c1.8 0 3.5.7 4.9 2.2 2-2.2 4.6-3.6 7.6-3.6s5.6 1.4 7.6 3.6c-1.4-1.5-3.2-2.2-5-2.2z"/></svg>
          </a>
        </div>
      </div>
    </footer>
  );
}
