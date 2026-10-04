// Sends each inquiry form to /api/inquiry (a Vercel function that saves it in Supabase).
document.querySelectorAll('form.inquiry').forEach(function (f) {
  f.addEventListener('submit', function (e) {
    e.preventDefault();
    var s = f.querySelector('.status'), b = f.querySelector('button[type=submit]');
    var d = Object.fromEntries(new FormData(f).entries());
    s.className = 'status';
    if (!d.name || !d.name.trim()) { s.textContent = 'Please add your name.'; s.classList.add('err'); return; }
    if (!(d.phone || '').trim() && !(d.email || '').trim()) { s.textContent = 'Please add a phone number or an email.'; s.classList.add('err'); return; }
    if (!d.interest) { s.textContent = 'Please choose what this is about.'; s.classList.add('err'); return; }
    b.disabled = true; s.textContent = 'Sending...';
    fetch('/api/inquiry', { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify(d) })
      .then(function (r) { if (!r.ok) throw new Error(r.status); f.reset(); s.textContent = 'Thank you. We got your message and will get back to you soon.'; s.classList.add('ok'); })
      .catch(function () { s.textContent = 'Sorry, that did not go through. Please call (414) 627-9049.'; s.classList.add('err'); })
      .finally(function () { b.disabled = false; });
  });
});
