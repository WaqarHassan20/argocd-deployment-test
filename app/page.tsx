import Image from "next/image";

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-900 via-purple-900 to-gray-900 p-8 pb-20 font-sans text-white">
      {/* Animated background elements */}
      <div className="fixed inset-0 overflow-hidden opacity-20">
        {[...Array(12)].map((_, i) => (
          <div 
            key={i}
            className="absolute rounded-full bg-gradient-to-r from-pink-500 to-violet-500 blur-xl"
            style={{
              width: `${Math.random() * 200 + 100}px`,
              height: `${Math.random() * 200 + 100}px`,
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              opacity: 0.3 + Math.random() * 0.3,
            }}
          />
        ))}
      </div>

      <main className="relative z-10 mx-auto max-w-6xl">
        {/* Header with glass effect */}
        <header className="mb-16 rounded-2xl bg-white/5 p-8 backdrop-blur-lg border border-white/10 shadow-xl">
          <div className="flex flex-col items-center gap-6 sm:flex-row sm:justify-between">
            <div className="flex items-center gap-4">
              <span className="text-3xl">⚡</span>
              <div className="h-8 w-0.5 bg-white/30"></div>
              <span className="text-3xl">🚀</span>
            </div>
            <h1 className="text-3xl font-bold bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
              GitOps Workflow Demo
            </h1>
          </div>
        </header>

        {/* GitOps Flow Visualization */}
        <section className="mb-16 grid gap-8 md:grid-cols-3">
          <div className="rounded-2xl bg-white/5 p-6 backdrop-blur-lg border border-white/10 shadow-lg transition-all hover:scale-105 hover:border-blue-400/30">
            <div className="mb-4 flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-blue-500/20 text-xl">
                👨‍💻
              </div>
              <h3 className="text-xl font-semibold">1. Git Commit</h3>
            </div>
            <p className="text-white/80">
              Developers push changes to Git repository. This becomes the single source of truth.
            </p>
          </div>

          <div className="rounded-2xl bg-white/5 p-6 backdrop-blur-lg border border-white/10 shadow-lg transition-all hover:scale-105 hover:border-purple-400/30">
            <div className="mb-4 flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-purple-500/20 text-xl">
                🔄
              </div>
              <h3 className="text-xl font-semibold">2. Argo CD Sync</h3>
            </div>
            <p className="text-white/80">
              Argo CD detects changes and automatically synchronizes the cluster state.
            </p>
          </div>

          <div className="rounded-2xl bg-white/5 p-6 backdrop-blur-lg border border-white/10 shadow-lg transition-all hover:scale-105 hover:border-green-400/30">
            <div className="mb-4 flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-green-500/20 text-xl">
                ☸️
              </div>
              <h3 className="text-xl font-semibold">3. Cluster Updated</h3>
            </div>
            <p className="text-white/80">
              Kubernetes cluster converges to the new desired state with full visibility.
            </p>
          </div>
        </section>

        {/* Interactive Demo Section */}
        <section className="mb-16 rounded-2xl bg-gradient-to-br from-blue-900/40 to-purple-900/40 p-8 backdrop-blur-lg border border-blue-400/20 shadow-2xl">
          <h2 className="mb-6 text-2xl font-bold">Try the GitOps Flow</h2>
          
          <div className="grid gap-6 md:grid-cols-2">
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <div className="h-3 w-3 rounded-full bg-green-400 animate-pulse"></div>
                <h3 className="font-mono font-semibold">Current Deployment</h3>
              </div>
              <div className="rounded-xl bg-black/30 p-4 font-mono text-sm">
                <p>🛠️ nginx:1.23.4</p>
                <p className="text-green-400">✔ Healthy</p>
                <p className="text-gray-400">Synced 2 minutes ago</p>
              </div>
            </div>

            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <div className="h-3 w-3 rounded-full bg-yellow-400 animate-pulse"></div>
                <h3 className="font-mono font-semibold">New Version Available</h3>
              </div>
              <div className="rounded-xl bg-black/30 p-4 font-mono text-sm">
                <p>✨ nginx:1.25.3</p>
                <p className="text-blue-400">⏳ Out of sync</p>
                <button className="mt-3 flex items-center gap-2 rounded-lg bg-blue-600 px-4 py-2 text-sm font-medium hover:bg-blue-700 transition-colors">
                  <span>🚀</span> Deploy Update
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <div className="flex flex-wrap justify-center gap-4">
          <a
            href="https://argo-cd.readthedocs.io/"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 rounded-full bg-gradient-to-r from-blue-600 to-cyan-500 px-6 py-3 font-medium shadow-lg hover:shadow-blue-500/30 transition-all"
          >
            <span>📘</span> Explore Argo CD
          </a>
          <a
            href="https://www.gitops.tech/"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 rounded-full bg-gradient-to-r from-purple-600 to-pink-500 px-6 py-3 font-medium shadow-lg hover:shadow-purple-500/30 transition-all"
          >
            <span>🔮</span> Learn GitOps
          </a>
        </div>
      </main>

      <footer className="relative z-10 mt-16 text-center text-white/60">
        <p>GitOps with Argo CD and Next.js | {new Date().getFullYear()}</p>
      </footer>
    </div>
  );
}