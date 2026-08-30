import Link from "next/link";

export const metadata = { title: "About | Portfolio", description: "A short introduction to the work behind this portfolio." };

export default function AboutPage() {
  return <main className="page wrap about-page">
    <p className="eyebrow">About</p>
    <h1>I pursue ideas that matter and turn them into reality.</h1>
    <div className="about-copy">
      <p>I have initiated, co-founded, or joined six startup teams and worked across nine commercial products in education, accessibility, digital well-being, and consumer technology. I have learned business by being in it: talking to customers, testing markets, launching products, making decisions, getting things wrong, and trying again.</p>
      <p>Entrepreneurship has made me more curious, decisive, and comfortable with uncertainty. I question my assumptions, change direction when evidence demands it, and care more about finding the right answer than being right.</p>
    </div>
    <div className="about-facts">
      <p><b>Long-term direction</b><br />Science × Technology × Entrepreneurship</p>
      <p><b>How I work</b><br />Curious, open-minded, adaptable, and ambitious</p>
    </div>
    <Link href="/#work" className="text-link">Explore the work <span aria-hidden="true">↗</span></Link>
  </main>;
}
