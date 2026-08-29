import Link from "next/link";

export function SiteHeader() {
  return <header className="site-header wrap">
    <Link href="/" className="wordmark" aria-label="Portfolio home">NGOC / B.</Link>
    <nav aria-label="Primary navigation"><Link href="/#work">Work</Link><Link href="/about">About</Link><Link href="/contact">Contact</Link></nav>
  </header>;
}
