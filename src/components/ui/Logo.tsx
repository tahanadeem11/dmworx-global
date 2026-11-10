import Image from "next/image";

export function Logo({ className = "h-9 w-auto", priority = false }: { className?: string; priority?: boolean }) {
  return (
    <>
      <Image src="/logos/logo.png" alt="DM Worx Global" width={678} height={189} priority={priority} className={`logo-light ${className}`} />
      <Image src="/logos/logo-dark.png" alt="DM Worx Global" width={678} height={189} priority={priority} className={`logo-dark ${className}`} />
    </>
  );
}
