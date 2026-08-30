import "./contact.css";

export const metadata = { title: "Contact | Portfolio", description: "Contact page for this entrepreneurship and product portfolio." };

export default function ContactPage() {
  return <main className="page wrap contact-page">
    <p className="eyebrow">Contact</p>
    <h1>Let&apos;s start with the work.</h1>
    <div className="contact-details">
      <p><a href="mailto:buinguyenbaongoc29@gmail.com">buinguyenbaongoc29@gmail.com</a></p>
      <p><a href="https://www.linkedin.com/in/bnbngoc/" target="_blank" rel="noreferrer">LinkedIn <span aria-hidden="true">↗</span></a></p>
      <p><a href="https://www.facebook.com/buinguyenbaongoc29" target="_blank" rel="noreferrer">Facebook <span aria-hidden="true">↗</span></a></p>
    </div>
  </main>;
}
