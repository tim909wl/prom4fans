import nodemailer, { type Transporter } from 'nodemailer';

export type ContactSubmission = {
  name: string;
  email: string;
  message: string;
  locale: 'de' | 'en';
};

let cachedTransporter: Transporter | null = null;

function getTransporter(): Transporter {
  if (cachedTransporter) return cachedTransporter;

  const host = process.env.SMTP_HOST;
  const port = Number(process.env.SMTP_PORT ?? 587);
  const user = process.env.SMTP_USER;
  const pass = process.env.SMTP_PASS;

  if (!host || !user || !pass) {
    throw new Error(
      'SMTP is not configured. Set SMTP_HOST, SMTP_PORT, SMTP_USER and SMTP_PASS (see .env.example).',
    );
  }

  cachedTransporter = nodemailer.createTransport({
    host,
    port,
    secure: process.env.SMTP_SECURE === 'true', // true for port 465, false for 587/25 (STARTTLS)
    auth: { user, pass },
  });

  return cachedTransporter;
}

function escapeHtml(value: string): string {
  return value
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#39;');
}

function emailShell(content: string, preheader: string): string {
  return `<!doctype html><html lang="de"><head><meta name="viewport" content="width=device-width,initial-scale=1"><meta name="color-scheme" content="light"><title>Prom4Fans</title></head><body style="margin:0;background:#f6f4fb;color:#15162d;font-family:Arial,Helvetica,sans-serif"><span style="display:none!important;opacity:0;color:transparent;height:0;width:0">${escapeHtml(preheader)}</span><table role="presentation" width="100%" cellspacing="0" cellpadding="0" style="background:#f6f4fb;padding:32px 12px"><tr><td align="center"><table role="presentation" width="100%" cellspacing="0" cellpadding="0" style="max-width:640px;background:#fff;border-radius:20px;overflow:hidden"><tr><td style="background:#15162d;padding:28px 32px"><div style="font-size:16px;font-weight:800;letter-spacing:2px;color:#d6fa43">PROM4FANS</div><div style="margin-top:6px;font-size:12px;color:#bfc1d1">Creator Management</div></td></tr><tr><td style="padding:36px 32px">${content}</td></tr><tr><td style="border-top:1px solid #eceaf2;padding:22px 32px;color:#7c7f92;font-size:12px;line-height:1.6">Prom4Fans · Julius Blumberg · Brückenstr. 9 · 24220 Flintbek<br><a href="mailto:contact@prom4fans.com" style="color:#6c35ed">contact@prom4fans.com</a></td></tr></table></td></tr></table></body></html>`;
}

const receiverCopy = {
  de: {
    subject: (name: string) => `Neue Anfrage über prom4fans.de – ${name}`,
    heading: 'Neue Kontaktanfrage',
    fieldName: 'Name',
    fieldEmail: 'E-Mail',
    fieldMessage: 'Nachricht',
  },
  en: {
    subject: (name: string) => `New inquiry via prom4fans.de – ${name}`,
    heading: 'New contact request',
    fieldName: 'Name',
    fieldEmail: 'Email',
    fieldMessage: 'Message',
  },
};

const confirmationCopy = {
  de: {
    subject: 'Wir haben deine Anfrage erhalten – Prom4Fans',
    greeting: (name: string) => `Hallo ${name},`,
    body: [
      'danke für deine Nachricht. Wir haben sie erhalten und melden uns in der Regel innerhalb von 1–2 Werktagen persönlich zurück.',
      'Zur Erinnerung, das hast du uns geschrieben:',
    ],
    signOff: 'Bis gleich,\nJulius & das Prom4Fans-Team',
  },
  en: {
    subject: 'We received your message – Prom4Fans',
    greeting: (name: string) => `Hi ${name},`,
    body: [
      'thanks for reaching out. We’ve received your message and usually get back to you in person within 1–2 business days.',
      'For reference, here’s what you sent us:',
    ],
    signOff: 'Talk soon,\nJulius & the Prom4Fans team',
  },
};

/**
 * Sends two emails for one contact-form submission:
 *  - a notification to the site owner (CONTACT_RECEIVER_EMAIL), reply-to set
 *    to the visitor so it can be answered directly, and
 *  - a confirmation to the visitor, reply-to set to the owner.
 * Both sends are awaited together; if either fails the caller sees the error.
 */
export async function sendContactEmails(submission: ContactSubmission): Promise<void> {
  const transporter = getTransporter();
  const from = process.env.SMTP_FROM ?? process.env.SMTP_USER!;
  const receiver = process.env.CONTACT_RECEIVER_EMAIL;

  if (!receiver) {
    throw new Error('CONTACT_RECEIVER_EMAIL is not set (see .env.example).');
  }

  const r = receiverCopy[submission.locale];
  const c = confirmationCopy[submission.locale];
  const safeName = escapeHtml(submission.name);
  const safeMessage = escapeHtml(submission.message).replace(/\n/g, '<br>');
  const profileRows = submission.message.includes('--- Bewerbungsprofil ---')
    ? submission.message.split('\n').slice(-6).map((line) => { const [label, ...rest] = line.split(': '); return `<tr><td style="padding:7px 0;color:#7c7f92;font-size:13px;width:42%">${escapeHtml(label ?? '')}</td><td style="padding:7px 0;font-size:13px;font-weight:600">${escapeHtml(rest.join(': '))}</td></tr>`; }).join('')
    : '';
  const formattedMessage = safeMessage.replace(/<br>--- Bewerbungsprofil ---<br>(?:[^<]*<br>?)+$/, '');
  const profileBlock = profileRows ? `<div style="margin:24px 0;padding:18px 20px;background:#f6f4fb;border-radius:14px"><div style="font-size:11px;font-weight:800;letter-spacing:1.4px;text-transform:uppercase;color:#6c35ed;margin-bottom:8px">Bewerbungsprofil</div><table role="presentation" width="100%" cellspacing="0" cellpadding="0">${profileRows}</table></div>` : '';

  await Promise.all([
    transporter.sendMail({
      from,
      to: receiver,
      replyTo: submission.email,
      subject: r.subject(submission.name),
      text: `${r.heading}\n\n${r.fieldName}: ${submission.name}\n${r.fieldEmail}: ${submission.email}\n\n${r.fieldMessage}:\n${submission.message}`,
      html: emailShell(`<div style="display:inline-block;background:#d6fa43;border-radius:999px;padding:7px 12px;font-size:11px;font-weight:800;letter-spacing:1px;text-transform:uppercase">Neue Bewerbung</div><h1 style="margin:20px 0 12px;font-size:30px;line-height:1.05;letter-spacing:-1px">${r.heading}</h1><p style="margin:0 0 22px;color:#586078;line-height:1.6">Eine neue Anfrage ist über prom4fans.com eingegangen.</p><div style="padding:18px 20px;background:#f6f4fb;border-radius:14px"><p style="margin:0;line-height:1.7"><strong>${r.fieldName}:</strong> ${safeName}<br><strong>${r.fieldEmail}:</strong> ${escapeHtml(submission.email)}</p></div>${profileBlock}<p style="margin:24px 0 8px;font-weight:700">${r.fieldMessage}</p><p style="margin:0;line-height:1.7;color:#35374b">${formattedMessage}</p>`, `Neue Bewerbung von ${submission.name}`),
    }),
    transporter.sendMail({
      from,
      to: submission.email,
      replyTo: receiver,
      subject: c.subject,
      text: `${c.greeting(submission.name)}\n\n${c.body.join('\n\n')}\n\n"${submission.message}"\n\n${c.signOff}`,
      html: emailShell(`<h1 style="margin:0 0 18px;font-size:30px;line-height:1.05;letter-spacing:-1px">${c.greeting(safeName)}</h1>${c.body.map((p) => `<p style="margin:0 0 16px;color:#586078;line-height:1.7">${p}</p>`).join('')}<div style="margin:24px 0;padding:18px 20px;background:#f6f4fb;border-left:4px solid #6c35ed;border-radius:0 12px 12px 0;color:#35374b;line-height:1.7">${safeMessage}</div><p style="margin:24px 0 0;white-space:pre-line;line-height:1.7">${c.signOff}</p>`, `Danke für deine Anfrage an Prom4Fans`),
    }),
  ]);
}
