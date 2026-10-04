// Vercel serverless function: saves a form inquiry to the Supabase "inquiries" table.
// Needs env vars NEXT_PUBLIC_SUPABASE_URL and SUPABASE_ANON_KEY (see launch-steps.md).
module.exports = async function handler(req, res) {
  if (req.method !== 'POST') { res.setHeader('Allow', 'POST'); return res.status(405).json({ error: 'Method not allowed' }); }
  const url = process.env.NEXT_PUBLIC_SUPABASE_URL, key = process.env.SUPABASE_ANON_KEY;
  if (!url || !key) return res.status(503).json({ error: 'Form is not connected yet' });
  let b = req.body || {};
  if (typeof b === 'string') { try { b = JSON.parse(b); } catch (e) { b = {}; } }
  if (b.website) return res.status(200).json({ ok: true }); // honeypot: quietly drop bots
  const clip = (v, n) => (typeof v === 'string' ? v.trim().slice(0, n) : '');
  const row = { name: clip(b.name, 120), phone: clip(b.phone, 40) || null, email: clip(b.email, 200) || null,
    interest: ['homes', 'training', 'other'].includes(b.interest) ? b.interest : 'other', message: clip(b.message, 4000) || null };
  if (!row.name || (!row.phone && !row.email)) return res.status(400).json({ error: 'Name and a phone or email are required' });
  const r = await fetch(url.replace(/\/$/, '') + '/rest/v1/inquiries', { method: 'POST',
    headers: Object.assign({ apikey: key, 'Content-Type': 'application/json', Prefer: 'return=minimal' },
      key.startsWith('eyJ') ? { Authorization: 'Bearer ' + key } : {}), // legacy anon JWT also goes in Authorization; new sb_publishable_ keys only in apikey
    body: JSON.stringify(row) });
  if (!r.ok) { console.error('supabase insert failed', r.status, await r.text()); return res.status(502).json({ error: 'Could not save' }); }
  return res.status(200).json({ ok: true });
};
