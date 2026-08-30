import Link from "next/link";
import { ThemeToggle } from "./theme-toggle";

export function SiteHeader() {
  return <header className="site-header wrap">
    <Link href="/" className="wordmark" aria-label="NGOC / bnbn home">NGOC / bnbn</Link>
    <nav aria-label="Primary navigation"><Link href="/#work">Work</Link><Link href="/about">About</Link><Link href="/contact">Contact</Link><ThemeToggle /></nav>
  </header>;
}
