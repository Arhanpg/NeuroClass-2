import Link from "next/link";

export default function LandingPage() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center bg-gradient-to-br from-brand-900 to-brand-500 text-white">
      <h1 className="text-5xl font-bold mb-4">NeuroClass</h1>
      <p className="text-xl mb-8 opacity-90">AI-Powered Learning Platform</p>
      <div className="flex gap-4">
        <Link href="/login" className="px-6 py-3 bg-white text-brand-900 rounded-lg font-semibold hover:bg-opacity-90 transition">Sign In</Link>
        <Link href="/register" className="px-6 py-3 border border-white rounded-lg font-semibold hover:bg-white/10 transition">Register</Link>
      </div>
    </main>
  );
}
