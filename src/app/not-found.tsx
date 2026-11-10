import { Button } from "@/components/ui/Button";

export default function NotFound() {
  return (
    <section className="relative isolate grid min-h-[80vh] place-items-center overflow-hidden px-5 pt-28 text-center">
      <div className="dot-grid absolute inset-0 -z-10" aria-hidden />
      <div className="orb left-1/4 top-1/4 -z-10 h-80 w-80 bg-purple" aria-hidden />
      <div>
        <p className="text-brand-anim font-display text-8xl font-bold sm:text-9xl">404</p>
        <h1 className="mt-4 text-3xl font-semibold">This page can&apos;t be found</h1>
        <p className="mx-auto mt-3 max-w-md text-muted">The page you&apos;re looking for may have moved or no longer exists.</p>
        <div className="mt-8 flex justify-center gap-4">
          <Button href="/">Back to Home</Button>
          <Button href="/contact" variant="ghost">Contact Us</Button>
        </div>
      </div>
    </section>
  );
}
