"use server";

import { site, type Track } from "@/lib/site";

const webhook = process.env.LEAD_WEBHOOK_URL;

export type LeadResult = { ok: true } | { ok: false; error: string };

function field(formData: FormData, name: string) {
  const value = formData.get(name);
  return typeof value === "string" ? value.trim() : "";
}

function websiteHref(value: string) {
  const withProtocol = /^https?:\/\//i.test(value) ? value : `https://${value}`;
  try {
    const url = new URL(withProtocol);
    if (!url.hostname.includes(".")) return null;
    return url.toString();
  } catch {
    return null;
  }
}

export async function submitLead(formData: FormData): Promise<LeadResult> {
  if (field(formData, "company_fax")) return { ok: true };

  const name = field(formData, "name");
  const email = field(formData, "email");
  const phone = field(formData, "phone");
  const company = field(formData, "company");
  const website = websiteHref(field(formData, "website"));
  const trackValue = field(formData, "track");
  const track: Track | "general" =
    trackValue === "dtc" || trackValue === "b2b" ? trackValue : "general";

  if (name.length < 2) return { ok: false, error: "Add your name." };
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    return { ok: false, error: "Add a real email address." };
  }
  if (phone.replace(/\D/g, "").length < 8) {
    return { ok: false, error: "Add a phone number." };
  }
  if (company.length < 2) return { ok: false, error: "Add the company name." };
  if (!website) return { ok: false, error: "Add the company website." };
  if (!webhook) {
    return {
      ok: false,
      error: `That didn't send. Email ${site.email} and I'll reply.`,
    };
  }

  try {
    const response = await fetch(webhook, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ name, email, phone, company, website, track }),
      signal: AbortSignal.timeout(12000),
    });

    if (!response.ok) {
      return {
        ok: false,
        error: `That didn't send. Email ${site.email} and I'll reply.`,
      };
    }
  } catch {
    return {
      ok: false,
      error: `That didn't send. Email ${site.email} and I'll reply.`,
    };
  }

  return { ok: true };
}
