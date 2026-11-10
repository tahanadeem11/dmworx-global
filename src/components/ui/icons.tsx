import {
  Clapperboard,
  Globe,
  Layers,
  MapPin,
  Palette,
  Search,
  Server,
  Share2,
  ShoppingCart,
  Smartphone,
  Sparkles,
  Target,
  Wrench,
  type LucideIcon,
} from "lucide-react";

export const iconMap: Record<string, LucideIcon> = {
  "map-pin": MapPin,
  search: Search,
  globe: Globe,
  smartphone: Smartphone,
  share: Share2,
  palette: Palette,
  target: Target,
  "shopping-cart": ShoppingCart,
  sparkles: Sparkles,
  clapperboard: Clapperboard,
  wrench: Wrench,
  server: Server,
  layers: Layers,
};

export const getIcon = (key: string): LucideIcon => iconMap[key] ?? Sparkles;

export function ServiceIcon({ name, className }: { name: string; className?: string }) {
  const Icon = iconMap[name] ?? Sparkles;
  return <Icon className={className} aria-hidden />;
}
