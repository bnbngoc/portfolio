import type { Metadata } from "next";
import "./globals.css";
import { SiteHeader } from "@/components/site-header";

export const metadata: Metadata = {
  title: "Portfolio | Building, testing, learning",
  description: "An editorial archive of entrepreneurship and product work.",
  openGraph: {
    title: "Portfolio | Building, testing, learning",
    description: "An editorial archive of entrepreneurship and product work.",
    type: "website",
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>
        <SiteHeader />
        {children}
      </body>
    </html>
  );
}
