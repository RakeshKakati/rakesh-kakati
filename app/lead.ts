"use server";

import { site, type Track } from "@/lib/site";

const webhook = process.env.LEAD_WEBHOOK_URL;

export type LeadResult = { ok: true } | { ok: false; error: string };

function field(formData: FormData, name: string, maxLength = 500) {
  const value = formData.get(name);
  if (typeof value !== "string") return "";
  const trimmed = value.trim();
  return trimmed.slice(0, maxLength);
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

  const gclid = field(formData, "gclid", 200);
  const gbraid = field(formData, "gbraid", 200);
  const wbraid = field(formData, "wbraid", 200);
  const landing_page = field(formData, "landing_page", 2000);
  const utm_source = field(formData, "utm_source", 200);
  const utm_medium = field(formData, "utm_medium", 200);
  const utm_campaign = field(formData, "utm_campaign", 200);
  const utm_term = field(formData, "utm_term", 200);
  const utm_content = field(formData, "utm_content", 200);

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
      body: JSON.stringify({
        name,
        email,
        phone,
        company,
        website,
        track,
        gclid,
        gbraid,
        wbraid,
        landing_page,
        utm_source,
        utm_medium,
        utm_campaign,
        utm_term,
        utm_content,
      }),
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
