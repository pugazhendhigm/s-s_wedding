(() => {
  const D = weddingData, I = D.images;
  const $ = (s) => document.querySelector(s);
  const $$ = (s) => [...document.querySelectorAll(s)];
  const reduce = matchMedia("(prefers-reduced-motion: reduce)").matches;
  const esc = (s) => String(s).replace(/[&<>"]/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" }[c]));
  const parts = (iso) => { const [y, m, d] = iso.split("-").map(Number); return new Date(y, m - 1, d); };
  const fmt = (iso) => parts(iso).toLocaleDateString("en-IN", { day: "numeric", month: "long", year: "numeric" });
  const md = (iso) => parts(iso).toLocaleDateString("en-US", { month: "long", day: "numeric" });
  const dir = (v) => "https://www.google.com/maps/dir/?api=1&destination=" + encodeURIComponent(v.address);

  /* ---------- images ---------- */
  const img = (k, { sizes = "100vw", eager = false, par = 0 } = {}) => {
    const m = I[k], u = (w) => `${m.src}?auto=compress&cs=tinysrgb&w=${w}`;
    const set = m.raw ? `src="${m.src}"` : `src="${u(1200)}" srcset="${u(640)} 640w, ${u(1200)} 1200w, ${u(1800)} 1800w" sizes="${sizes}"`;
    return `<img ${set} alt="${esc(m.alt)}"
      style="object-position:${m.position || "center"}" ${eager ? 'fetchpriority="high"' : 'loading="lazy"'} decoding="async">`;
  };
  const frame = (k, cls, opts = {}) => `<figure class="frame ${cls}"><div class="par" data-par="${opts.par ?? 0.06}">${img(k, opts)}</div></figure>`;

  /* ---------- SVG ornaments ---------- */
  const flower = (a = "#6b1424", b = "#b08d3c") => {
    let s = '<svg viewBox="-50 -50 100 100" aria-hidden="true">';
    for (let k = 0; k < 8; k++) s += `<ellipse cy="-24" rx="8" ry="22" transform="rotate(${k * 45})" fill="${a}" fill-opacity=".14" stroke="${a}" stroke-width="1.1"/>`;
    return s + `<circle r="7" fill="${b}" fill-opacity=".55" stroke="${b}"/></svg>`;
  };
  const orn = (c = "#b08d3c") => `<svg class="orn" viewBox="0 0 260 24" fill="none" stroke="${c}" aria-hidden="true"><path d="M0 12H104M156 12H260" stroke-width="1"/><path d="M130 2l10 10-10 10-10-10z" stroke-width="1.2"/><circle cx="130" cy="12" r="2.5" fill="${c}"/><circle cx="108" cy="12" r="2" fill="${c}"/><circle cx="152" cy="12" r="2" fill="${c}"/></svg>`;
  const mini = () => `<svg viewBox="-20 -20 40 40" fill="none" stroke="#d9bf7c" stroke-width="1.2"><ellipse cy="-9" rx="4" ry="9"/><ellipse cy="-9" rx="4" ry="9" transform="rotate(90)"/><ellipse cy="-9" rx="4" ry="9" transform="rotate(180)"/><ellipse cy="-9" rx="4" ry="9" transform="rotate(270)"/><circle r="2.5" fill="#d9bf7c"/></svg>`;
  const fl = (css, g, c) => `<div class="fl" style="${css}" data-speed="${g}">${flower(...(c || []))}</div>`;

  /* ---------- templates ---------- */
  const head = (en, ta) => `<h2 class="reveal">${esc(en)}<span class="ta ta-title">${esc(ta)}</span></h2><div class="reveal">${orn()}</div>`;
  const btns = (v, light) => `<div class="btns">
    <a class="btn" href="${esc(dir(v))}" target="_blank" rel="noopener">Get directions</a>
    <a class="btn alt" href="${esc(v.mapUrl)}" target="_blank" rel="noopener">View on Google Maps</a></div>`;
  const info = (e, extra = "") => `
    <p class="date">${esc(e.day)}, ${fmt(e.date)}</p><p class="time">${esc(e.time.display)}</p><hr>
    <p class="venue">${esc(e.venue.name)}</p>
    ${e.venue.tamilName ? `<p class="ta gold">${esc(e.venue.tamilName)}</p>` : ""}
    <p class="addr">${esc(e.venue.address)}</p>
    ${e.venue.landmarks ? `<p class="lm">${esc(e.venue.landmarks)}</p>` : ""}${extra}${btns(e.venue)}`;
  function render() {
    const w = D.website, inv = D.invitation, c = D.couple, W = D.wedding, R = D.reception, f = D.families;

    $("#home").innerHTML = `
      <div class="hero-bg"><div class="par" data-par="0.14">${img("hero", { eager: true })}</div></div>
      <div class="hero-in">
        <p class="ta greet" style="--i:0">${esc(D.language.tamil)}</p>
        <h1 style="--i:2">${esc(w.title).replace(" &amp; ", '<span class="amp">&amp;</span>')}</h1>
        <p class="sub" style="--i:3">${esc(w.subtitle)}</p>
        <p class="ta sub" style="--i:4">${esc(w.tamilSubtitle)}</p>
        <p class="when" style="--i:5">${esc(W.day)}, ${fmt(W.date)}</p>
        <div class="count" id="count" role="timer" style="--i:6"></div>
        <p class="count-title" style="--i:7">${esc(D.countdown.title)} · <span class="ta">${esc(D.countdown.tamilTitle)}</span></p>
      </div>
      <a class="scroll" href="#invitation" aria-label="Scroll to invitation"><span></span></a>`;

    $("#invitation").innerHTML = `${fl("left:3%;top:8%;width:84px", 0.1)}${fl("right:4%;bottom:8%;width:110px", 0.16, ["#b08d3c", "#6b1424"])}
      <div class="wrap">${head(inv.title, inv.tamilTitle)}
        <div class="frame-box reveal"><i class="c1">${flower()}</i><i class="c2">${flower()}</i><i class="c3">${flower()}</i><i class="c4">${flower()}</i>
          <p class="msg">${esc(inv.message)}</p>${orn()}<p class="msg-ta ta">${esc(inv.tamilMessage)}</p></div></div>`;

    $("#couple").innerHTML = `<div class="wrap wide">${head("Meet the couple", "மணமக்கள்")}
      <div class="pair"><div class="portrait"><div class="mobile-couple-names">
          <div><strong>${esc(c.bride.name)}</strong><small>${esc(c.bride.qualifications)}</small><small>${esc(c.bride.profession)}, ${esc(c.bride.company)}</small></div>
          <div><strong>${esc(c.groom.name)}</strong><small>${esc(c.groom.qualifications)}</small><small>${esc(c.groom.profession)}, ${esc(c.groom.company)}</small></div>
        </div>
          ${frame("couple", "tall", { sizes: "(min-width:900px) 30vw, 80vw", par: 0.05 })}</div></div></div>`;

    $("#ceremony").innerHTML = `<div class="wrap ceremony-wrap">
      <div class="panel reveal"><div class="gopuram"></div><div class="panel-in">
        <h2>${esc(W.title)}<span class="ta ta-title">${esc(W.tamilTitle)}</span></h2>${orn()}${info(W)}</div></div></div>`;

    $("#bridge").innerHTML = `<div class="par" data-par="0.1">${img("transition")}</div><div class="shade"></div>
      <div class="bridge-t reveal"><p class="ta">${esc(w.tamilSubtitle)}</p>${orn("#d9bf7c")}</div>`;

    $("#reception").innerHTML = `<div class="par" data-par="0.08">${img("reception")}</div><div class="shade"></div>
      <div class="wrap wide"><div class="card reveal"><h2>${esc(R.title)}<span class="ta ta-title">${esc(R.tamilTitle)}</span></h2>${orn()}${info(R)}</div></div>`;

    const ev = [[W, "Wedding Ceremony"], [R, "Wedding Reception"]];
    $("#timeline").innerHTML = `<div class="wrap wide">${head(D.timeline.title, D.timeline.tamilTitle)}
      <div class="tl-scroll" tabindex="0" role="region" aria-label="Event timeline"><ol class="tl" id="tl"><li class="fill" aria-hidden="true"></li>
        ${ev.map(([e, t]) => `<li class="node reveal"><span class="dot"></span><b>${md(e.date)}</b><span>${t}</span><small>${esc(e.time.display)}</small></li>`).join("")}</ol></div></div>`;

    $("#families").innerHTML = `${fl("left:6%;top:14%;width:90px", 0.1)}${fl("right:6%;top:14%;width:90px", 0.1)}
      <div class="wrap">${head("With the blessings of", "அன்புடன் அழைப்போர்")}
      <div class="family-groups reveal">${f.groups.map((group) => `<div class="family-group">${group.members.map(esc).join(group.separator === "line" ? "<br>" : " <i>&amp;</i> ")}</div>`).join("")}</div>
      <p class="fam-ta ta reveal">${esc(f.tamilDisplay)}</p></div>`;

    $("#closing").innerHTML = `<div class="par" data-par="0.08">${img("closing")}</div><div class="shade"></div>
      <div class="wrap"><h2 class="reveal">${esc(inv.closingMessage)}<span class="ta ta-title">${esc(inv.closingTamilMessage)}</span></h2>
        <div class="btns reveal">
          <a class="btn" href="${esc(dir(W.venue))}" target="_blank" rel="noopener">Ceremony directions</a>
          <a class="btn" href="${esc(dir(R.venue))}" target="_blank" rel="noopener">Reception directions</a></div>
        <div class="reveal">${orn("#d9bf7c")}</div>
        <p class="credit">${esc(w.footerMessage)}</p></div>`;

    const links = [["home", "Home"], ["invitation", "Invitation"], ["couple", "Couple"], ["ceremony", "Ceremony"], ["reception", "Reception"], ["families", "Families"]];
    $("#nav").innerHTML = links.map(([id, t]) => `<a href="#${id}">${t}</a>`).join("");
    $("#band").innerHTML = Array(2).fill(Array(14).fill(mini()).join("")).join("");

    // never leave a broken image: fall back to the maroon backdrop
    $$("img").forEach((i) => i.addEventListener("error", () => i.closest(".frame,.hero,.bridge,.recept,.closing").classList.add("noimg")));
  }

  function countdown() {
    const el = $("#count"), target = new Date(D.countdown.targetDate).getTime();
    const tick = () => {
      const d = target - Date.now();
      if (d <= 0) { el.innerHTML = `<p class="done ta">${esc(D.language.tamil)}</p>`; clearInterval(t); return; }
      el.innerHTML = [["Days", Math.floor(d / 864e5)], ["Hours", Math.floor(d / 36e5) % 24], ["Minutes", Math.floor(d / 6e4) % 60], ["Seconds", Math.floor(d / 1e3) % 60]]
        .map(([l, n]) => `<div><b>${String(n).padStart(2, "0")}</b><span>${l}</span></div>`).join("");
    };
    const t = setInterval(tick, 1000); tick();
  }

  function scrollFx() {
    const io = new IntersectionObserver((es) => es.forEach((e) => { if (e.isIntersecting) { e.target.classList.add("in"); io.unobserve(e.target); } }), { threshold: 0.15 });
    $$(".reveal, .frame").forEach((n) => io.observe(n));

    const links = $$(".nav a");
    const so = new IntersectionObserver((es) => es.forEach((e) => {
      if (e.isIntersecting) links.forEach((a) => a.classList.toggle("on", a.getAttribute("href") === "#" + e.target.id));
    }), { rootMargin: "-45% 0px -50% 0px" });
    links.forEach((a) => so.observe($(a.getAttribute("href"))));

    const nav = $("#nav"), tl = $("#tl"), track = $("#band");
    const pars = $$(".par"), fls = $$(".fl");
    let busy = false;
    const update = () => {
      busy = false;
      nav.classList.toggle("solid", scrollY > innerHeight * 0.6);
      const r = tl.getBoundingClientRect();
      tl.style.setProperty("--p", Math.min(1, Math.max(0, (innerHeight * 0.85 - r.top) / (innerHeight * 0.6 + r.height))).toFixed(3));
      if (reduce) return;
      const vc = innerHeight / 2;
      pars.forEach((p) => {
        const b = p.parentElement.getBoundingClientRect();
        if (b.bottom < -100 || b.top > innerHeight + 100) return;
        p.style.transform = `translate3d(0,${(-(b.top + b.height / 2 - vc) * p.dataset.par).toFixed(1)}px,0)`;
      });
      fls.forEach((f) => { const b = f.parentElement.getBoundingClientRect(); f.style.transform = `translate3d(0,${(-(b.top + b.height / 2 - vc) * f.dataset.speed).toFixed(1)}px,0)`; });
      track.style.transform = `translate3d(${-((scrollY * 0.4) % (track.scrollWidth / 2))}px,0,0)`;
    };
    addEventListener("scroll", () => { if (!busy) { busy = true; requestAnimationFrame(update); } }, { passive: true });
    addEventListener("resize", update);
    update();
  }

  render(); countdown(); scrollFx();
})();
