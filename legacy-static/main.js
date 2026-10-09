const reduceMotion = matchMedia('(prefers-reduced-motion: reduce)').matches;
const $ = (s, el = document) => el.querySelector(s);
const $$ = (s, el = document) => [...el.querySelectorAll(s)];

$('#yr').textContent = new Date().getFullYear();

// Hero intro (homepage): headline lines slide up, then supporting content
requestAnimationFrame(() => document.body.classList.add('is-loaded'));

// Header shadow + mobile dock (shows after the first screen; hides while the form is visible)
const header = $('.header');
const dock = $('.dock');
const hero = $('.hero') || $('.phero');
const form = $('#wizard');
let formVisible = false;
const onScroll = () => {
  header.classList.toggle('is-scrolled', scrollY > 8);
  const threshold = hero ? hero.offsetHeight * 0.7 : 300;
  dock.classList.toggle('is-shown', scrollY > threshold && !formVisible);
};
if (form) new IntersectionObserver(([e]) => { formVisible = e.isIntersecting; onScroll(); }, { threshold: 0 }).observe(form);
addEventListener('scroll', onScroll, { passive: true });
onScroll();

// Mobile menu
const burger = $('.burger');
const nav = $('#nav');
const setMenu = open => {
  nav.classList.toggle('is-open', open);
  burger.setAttribute('aria-expanded', open);
  burger.setAttribute('aria-label', open ? 'Close menu' : 'Open menu');
  document.body.classList.toggle('menu-open', open);
};
burger.addEventListener('click', () => setMenu(!nav.classList.contains('is-open')));
$$('a', nav).forEach(a => a.addEventListener('click', () => setMenu(false)));

// Highlight the current page inside the Services menu
$$('.nav__menu a').forEach(a => { if (a.pathname === location.pathname) a.setAttribute('aria-current', 'page'); });

// Services dropdown (click/tap toggles; desktop also opens on hover via CSS)
const group = $('.nav__group');
const toggle = $('.nav__toggle');
const setGroup = open => { group.classList.toggle('is-open', open); toggle.setAttribute('aria-expanded', open); };
toggle.addEventListener('click', () => setGroup(!group.classList.contains('is-open')));
document.addEventListener('click', e => { if (!group.contains(e.target)) setGroup(false); });
addEventListener('keydown', e => {
  if (e.key !== 'Escape') return;
  setMenu(false);
  if (group.classList.contains('is-open')) { setGroup(false); toggle.focus(); }
});

// Hero: rotating "for your mum / dad / …" word
const word = $('.rotator em');
if (word && !reduceMotion) {
  const words = JSON.parse(word.dataset.words);
  let i = 0;
  setInterval(() => {
    word.classList.add('is-out');
    setTimeout(() => {
      i = (i + 1) % words.length;
      word.textContent = words[i];
      word.classList.replace('is-out', 'is-in');
      requestAnimationFrame(() => requestAnimationFrame(() => word.classList.remove('is-in')));
    }, 350);
  }, 2800);
}

// Hero: slow cross-fade between site banners (extra images load after first paint)
const heroImgs = $$('.hero__img');
if (!reduceMotion && heroImgs.length > 1) {
  addEventListener('load', () => {
    heroImgs.forEach(img => {
      if (img.dataset.srcset) { img.srcset = img.dataset.srcset; img.src = img.dataset.src; }
    });
    let h = 0;
    setInterval(() => {
      heroImgs[h].classList.remove('is-active');
      h = (h + 1) % heroImgs.length;
      heroImgs[h].classList.add('is-active');
    }, 8000);
  });
}

// Reveal on scroll — once, with a small stagger for siblings
const io = new IntersectionObserver(entries => {
  entries.forEach(e => {
    if (!e.isIntersecting) return;
    const sibs = $$(':scope > .reveal', e.target.parentElement);
    e.target.style.setProperty('--d', `${Math.min(sibs.indexOf(e.target), 4) * 70}ms`);
    e.target.classList.add('is-in');
    io.unobserve(e.target);
  });
}, { rootMargin: '0px 0px -8% 0px' });
$$('.reveal').forEach(el => io.observe(el));

// Count-up stats
const countIO = new IntersectionObserver(entries => {
  entries.forEach(e => {
    if (!e.isIntersecting) return;
    countIO.unobserve(e.target);
    if (reduceMotion) return;
    const el = e.target, end = parseFloat(el.dataset.count), dec = +(el.dataset.dec || 0);
    const t0 = performance.now(), dur = 1400;
    const tick = t => {
      const p = Math.min((t - t0) / dur, 1), eased = 1 - Math.pow(1 - p, 3);
      el.textContent = (end * eased).toFixed(dec);
      if (p < 1) requestAnimationFrame(tick);
    };
    requestAnimationFrame(tick);
  });
}, { threshold: 0.6 });
$$('[data-count]').forEach(el => countIO.observe(el));

// =========================================================
// Consultation wizard (homepage #contact and /contact/#consult)
// =========================================================
if (form) {
  const steps = $$('.step', form);
  const back = $('[data-back]', form);
  const next = $('[data-next]', form);
  const err = $('.wizard__err', form);
  const bar = $('#progressBar');
  let step = 0;

  const show = i => {
    steps.forEach((s, n) => s.classList.toggle('is-active', n === i));
    $('#stepNum').textContent = i + 1;
    $('#stepTitle').textContent = steps[i].dataset.title;
    bar.style.transform = `scaleX(${(i + 1) / steps.length})`;
    back.hidden = i === 0;
    next.textContent = i === steps.length - 1 ? 'Send my request' : 'Continue';
    err.hidden = true;
  };

  const validate = i => {
    let ok = true;
    $$('[required]', steps[i]).forEach(f => {
      if (f.type === 'radio') {
        const bad = !$(`input[name="${f.name}"]:checked`, form);
        f.closest('.choices').classList.toggle('invalid', bad);
        if (bad) ok = false;
      } else {
        const bad = !f.value.trim();
        f.classList.toggle('invalid', bad);
        if (bad) ok = false;
      }
    });
    err.hidden = ok;
    return ok;
  };

  form.addEventListener('change', e => {
    e.target.classList.remove('invalid');
    e.target.closest('.choices')?.classList.remove('invalid');
  });

  back.addEventListener('click', () => { if (step > 0) show(--step); });
  next.addEventListener('click', () => {
    if (!validate(step)) return;
    if (step < steps.length - 1) return show(++step);

    const d = Object.fromEntries(new FormData(form));
    const body = [
      `Who needs care: ${d.who}`,
      `Type of care: ${d.type}`,
      `Postcode: ${d.postcode}`,
      `How soon: ${d.when}`,
      `Funding: ${d.funding}`,
      '',
      `Name: ${d.name}`,
      `Phone: ${d.phone}`,
      `Email: ${d.email || '-'}`,
      '',
      d.notes || ''
    ].join('\n');
    location.href = `mailto:enquiries@taskhealthcare.co.uk?subject=${encodeURIComponent('Consultation request — ' + d.name)}&body=${encodeURIComponent(body)}`;

    steps.forEach(s => s.classList.remove('is-active'));
    bar.style.transform = 'scaleX(1)';
    $('.wizard__top', form).hidden = true;
    $('.wizard__nav', form).hidden = true;
    $('.wizard__note', form).hidden = true;
    $('.wizard__done', form).hidden = false;
  });

  // Homepage "Who needs care?" chips pre-select step 1 of the form
  $$('[data-who]').forEach(a => a.addEventListener('click', () => {
    const radio = $(`input[name="who"][value="${a.dataset.who}"]`, form);
    if (radio) radio.checked = true;
    step = 0; show(0);
  }));

  // Pre-select the type of care when arriving from a care page (?care=Live-in%20care)
  const care = new URLSearchParams(location.search).get('care');
  if (care) {
    const opt = $$('select[name="type"] option', form).find(o => o.text.toLowerCase().includes(care.toLowerCase()));
    if (opt) opt.selected = true;
  }
}
