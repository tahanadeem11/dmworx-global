export default function Loading() {
  return (
    <div className="grid min-h-[70vh] place-items-center" role="status" aria-label="Loading">
      <div className="relative h-16 w-16">
        <span className="bg-brand absolute inset-0 animate-ping rounded-full opacity-30" />
        <span className="bg-brand absolute inset-3 animate-pulse rounded-full" />
      </div>
    </div>
  );
}
