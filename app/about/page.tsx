import Link from "next/link";

export const metadata = { title: "About | Portfolio", description: "A short introduction to the work behind this portfolio." };

export default function AboutPage() {
  return <main className="page wrap about-page">
    <p className="eyebrow">About</p>
    <h1>I keep turning ideas into things that can be tested.</h1>
    <div className="about-copy">
      <p>I have worked across startups, rapid-sprint SaaS products, physical products, marketplaces, and a resale business. The work has taken me through teams, projects, products, markets, finance, sales, and marketing.</p>
      <p>My aim is to build a sustainable business with meaningful impact and mission, not just profit. The projects here are the record: an idea, a real attempt, evidence, a decision, and the next thing built.</p>
    </div>
    <div className="about-facts">
      <p><b>Personal project record</b><br />6 startup projects / teams<br />9 commercial products</p>
      <p><b>Resume wording</b><br />5 startups<br />7+ commercial products</p>
    </div>
    <Link href="/#work" className="text-link">Explore the work <span aria-hidden="true">↗</span></Link>
  </main>;
}
