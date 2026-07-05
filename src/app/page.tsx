export default function Home() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center p-8 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col gap-8 items-center sm:items-start max-w-2xl w-full">
        <div className="flex flex-col gap-2">
          <h1 className="text-5xl font-bold tracking-tight text-zinc-900 dark:text-zinc-50">
            nujek.com
          </h1>
          <p className="text-xl text-zinc-500 dark:text-zinc-400">
            A clean, fresh, and full experience for our customers.
          </p>
        </div>

        <div className="w-full h-px bg-zinc-200 dark:bg-zinc-800" />

        <div className="grid gap-6 sm:grid-cols-2">
          <div className="p-6 rounded-2xl border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-950/50 hover:shadow-lg transition-shadow duration-300">
            <h3 className="font-semibold text-lg mb-2">Modern Stack</h3>
            <p className="text-sm text-zinc-600 dark:text-zinc-400">
              Built with Next.js 15, Tailwind CSS, and TypeScript for peak performance.
            </p>
          </div>
          <div className="p-6 rounded-2xl border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-950/50 hover:shadow-lg transition-shadow duration-300">
            <h3 className="font-semibold text-lg mb-2">AI Enhanced</h3>
            <p className="text-sm text-zinc-600 dark:text-zinc-400">
              Integrating Vertex AI for personalized customer journeys and predictive insights.
            </p>
          </div>
        </div>

        <div className="flex gap-4 items-center flex-col sm:flex-row">
          <a
            className="rounded-full border border-solid border-transparent transition-colors flex items-center justify-center bg-foreground text-background gap-2 hover:bg-[#383838] dark:hover:bg-[#ccc] text-sm sm:text-base h-10 sm:h-12 px-8 font-medium"
            href="https://github.com/lkhakim/nujek"
            target="_blank"
            rel="noopener noreferrer"
          >
            Explore Repo
          </a>
          <a
            className="rounded-full border border-solid border-black/[.08] dark:border-white/[.145] transition-colors flex items-center justify-center hover:bg-[#f2f2f2] dark:hover:bg-[#1a1a1a] hover:border-transparent text-sm sm:text-base h-10 sm:h-12 px-8 font-medium"
            href="https://nextjs.org/docs"
            target="_blank"
            rel="noopener noreferrer"
          >
            Read Docs
          </a>
        </div>
      </main>

      <footer className="mt-20 text-sm text-zinc-500 dark:text-zinc-400">
        © 2026 nujek. All rights reserved.
      </footer>
    </div>
  );
}
