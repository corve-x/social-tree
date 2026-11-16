import { profile } from "@/config/profile";
import { Item } from "./motion";

export function Footer() {
  return (
    <Item as="footer" className="mt-auto pt-14 text-center">
      <p className="text-[13px] text-sub">{profile.footer}</p>
      <p className="mt-1 font-mono text-[11px] text-sub">
        © {new Date().getFullYear()} corve-x
      </p>
    </Item>
  );
}
