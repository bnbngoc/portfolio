import Link from "next/link";

export const metadata = { title: "About | Portfolio", description: "A short introduction to the work behind this portfolio." };

export default function AboutPage() {
  return <main className="page wrap about-page">
    <p className="eyebrow">About</p>
    <h1>I am an entrepreneur, driven by a simple ambition: to pursue ideas that matter and turn them into reality.</h1>
    <div className="about-copy">
      <p>I have initiated, co-founded, or joined six startup projects and worked across nine commercial products in education, accessibility, digital well-being, and consumer technology. I have learned business by being in it—talking to customers, testing markets, launching products, making decisions, getting things wrong, and trying again.</p>
      <p>Entrepreneurship has shaped more than what I know; it has shaped who I am. I have become more curious, more decisive, and more comfortable with uncertainty. I question my own assumptions, change direction when evidence demands it, and learn whatever I need to keep moving. I care more about finding the right answer than being right.</p>
      <p>I am drawn to the space where science, technology, and entrepreneurship meet. I want to understand difficult problems deeply, discover what is genuinely possible, and pursue opportunities capable of creating meaningful impact.</p>
      <p>I don&apos;t know yet exactly where that pursuit will lead me. I know, however, that I will keep exploring, keep learning, and keep moving toward it—whatever I need to become along the way.</p>
    </div>
    <div className="about-facts">
      <p><b>Long-term direction</b><br />Science × Technology × Entrepreneurship</p>
    </div>
    <Link href="/#work" className="text-link">Explore the work <span aria-hidden="true">↗</span></Link>
  </main>;
}
