import { Icons } from "@/assets/icons";

export default function Icon({
  name,
  size = 20,
  color = "#000",
}) {
  const SvgIcon = Icons[name];

  if (!SvgIcon) {
    console.warn(`Icon "${name}" does not exist`);
    return null;
  }

  return <SvgIcon width={size} height={size} color={color} />;
}
