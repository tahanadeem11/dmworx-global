"use client";

export default function Error({ reset }: { error: Error & { digest?: string }; reset: () => void }) {
  return (
    <section className="grid min-h-[70vh] place-items-center px-5 pt-28 text-center">
      <div>
        <h1 className="text-3xl font-semibold">Something went wrong</h1>
        <p className="mx-auto mt-3 max-w-md text-muted">An unexpected error occurred. Please try again.</p>
        <button onClick={reset} className="bg-brand mt-8 rounded-full px-7 py-3.5 text-sm font-semibold text-white">
          Try again
        </button>
      </div>
    </section>
  );
}
