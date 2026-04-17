import { Search, Plus, Trash, Settings } from "lucide-react";

const icons = {
  search: Search,
  plus: Plus,
  trash: Trash,
  settings: Settings,
};

export default function Icon({ name, size = 24 }) {
  const Component = icons[name];

  if (!Component) return null;

  return <Component size={size} />;
}