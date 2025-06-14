import Link from "next/link";
import { LogoIcon } from "../icons/logo-icon";

export function Logo() {
  return (
    <Link className="flex items-center space-x-2" href="/">
      <LogoIcon className="h-12 w-12" />
      <span className="inline-block">BELKINA.ONLINE</span>
    </Link>
  );
}
