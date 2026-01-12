// src/app/page.tsx
import Link from "next/link";

export default function HomePage() {
  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section className="flex min-h-screen flex-col items-center justify-center text-center px-6">
        <h1 className="text-4xl md:text-6xl font-bold">
          Build Better Software
        </h1>

        <p className="mt-4 max-w-xl text-muted-foreground">
          A modern platform to manage projects, users, and workflows
          efficiently.
        </p>

        <div className="mt-8 flex gap-4">
          <button>
            <Link href="/login">Get Started</Link>
          </button>

          <button>
            <Link href="/about">Learn More</Link>
          </button>
        </div>
      </section>
      <section className="flex min-h-screen flex-col items-center justify-center text-center px-6">
        <h1 className="text-4xl md:text-6xl font-bold">
          Build Better Software
        </h1>

        <p className="mt-4 max-w-xl text-muted-foreground">
          A modern platform to manage projects, users, and workflows
          efficiently.
        </p>

        <div className="mt-8 flex gap-4">
          <button>
            <Link href="/login">Get Started</Link>
          </button>

          <button>
            <Link href="/about">Learn More</Link>
          </button>
        </div>
      </section>
    </main>
  );
}
