import type { MetadataRoute } from "next";
import { projects } from "@/data/projects";
export const dynamic = "force-static";
export default function sitemap(): MetadataRoute.Sitemap { const base = process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000"; return ["", "/about", "/contact", ...projects.map((p) => `/work/${p.slug}`)].map((path) => ({ url: `${base}${path}`, lastModified: new Date() })); }
