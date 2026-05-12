import { NextRequest, NextResponse } from "next/server";
import { Resend } from "resend";

function getRecipients(): string[] {
  const raw = process.env.LEAD_EMAIL_TO ?? "";
  return raw
    .split(",")
    .map((e) => e.trim())
    .filter(Boolean);
}

function row(label: string, value: string | undefined) {
  if (!value) return "";
  return `<tr>
    <td style="padding:8px 12px;font-weight:600;color:#737373;white-space:nowrap;vertical-align:top">${label}</td>
    <td style="padding:8px 12px;color:#101010">${value}</td>
  </tr>`;
}

function buildHtml(fields: Record<string, string>) {
  const rows = [
    row("Navn", fields.navn),
    row("E-post", fields.epost),
    row("Telefon", fields.telefon),
    row("Nettside", fields.nettside),
    row("Hva selger de?", fields.hvaSelger),
    row("Budsjett", fields.budsjett),
    row("Pakke", fields.pakke),
    row("Shoot", fields.shoot),
    row("Melding", fields.melding),
  ]
    .filter(Boolean)
    .join("\n");

  return `<!DOCTYPE html>
<html>
<body style="font-family:system-ui,sans-serif;background:#f7f4ee;padding:32px">
  <div style="max-width:560px;margin:0 auto;background:white;border-radius:12px;overflow:hidden;border:1px solid #e5e5e5">
    <div style="background:#101010;padding:24px 28px">
      <p style="margin:0;font-size:12px;font-weight:700;letter-spacing:0.2em;color:#BEFF00;text-transform:uppercase">Fujii.no</p>
      <h1 style="margin:6px 0 0;font-size:20px;color:white;font-weight:900">Ny lead fra Fujii.no</h1>
    </div>
    <div style="padding:8px 0">
      <table style="width:100%;border-collapse:collapse;font-size:14px">
        ${rows}
      </table>
    </div>
    <div style="padding:16px 24px;background:#f7f4ee;font-size:11px;color:#a3a3a3">
      Sendt fra kontaktskjemaet på fujii.no
    </div>
  </div>
</body>
</html>`;
}

export async function POST(req: NextRequest) {
  let body: Record<string, string>;
  try {
    body = await req.json();
  } catch {
    return NextResponse.json({ error: "Ugyldig forespørsel" }, { status: 400 });
  }

  const { navn, epost, telefon } = body;
  if (!navn?.trim() || !epost?.trim()) {
    return NextResponse.json(
      { error: "Navn og e-post er påkrevd" },
      { status: 422 }
    );
  }
  if (!telefon?.trim()) {
    return NextResponse.json(
      { error: "Fyll inn telefonnummer." },
      { status: 422 }
    );
  }

  const to = getRecipients();
  if (to.length === 0) {
    console.error("LEAD_EMAIL_TO er ikke satt");
    return NextResponse.json(
      { error: "Serverkonfigurasjonsfeil" },
      { status: 500 }
    );
  }

  const apiKey = process.env.RESEND_API_KEY;
  if (!apiKey) {
    console.error("RESEND_API_KEY er ikke satt");
    return NextResponse.json(
      { error: "Serverkonfigurasjonsfeil" },
      { status: 500 }
    );
  }

  const resend = new Resend(apiKey);
  const { data, error } = await resend.emails.send({
    from: "Fujii.no <noreply@fujii.no>",
    to,
    replyTo: epost.trim(),
    subject: "Ny lead fra Fujii.no",
    html: buildHtml(body),
  });

  if (error) {
    console.error("[contact] Resend feil:", JSON.stringify(error));
    const isDev = process.env.NODE_ENV === "development";
    return NextResponse.json(
      {
        error: "Kunne ikke sende e-post",
        ...(isDev && { details: (error as { message?: string }).message ?? String(error) }),
      },
      { status: 500 }
    );
  }

  console.log("[contact] E-post sendt, id:", data?.id);
  return NextResponse.json({ ok: true });
}
