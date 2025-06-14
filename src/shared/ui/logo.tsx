import Link from "next/link";

export function Logo() {
  return (
    <Link className="flex items-center space-x-2" href="/">
      <img className="size-12" src="/logo.svg" alt="logo" />

      <span className="inline-block">BELKINA.ONLINE</span>
    </Link>
  );
}
