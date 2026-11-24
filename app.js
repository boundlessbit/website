"use strict";

/* ---- Contactos (edite aqui os seus dados reais) -------------------------- */
const CONTACT = {
  email: "hello@ethics.click",
  signalUser: "ethics_click.01",
  signalUrl: "https://signal.me/#eu/hTSsEJpOLLodu34geTBqpUdqZiQe2-fU-_X-lOOLFdLedxW_fMhMN6EKGKwtjzms",
  phone: "+351900100100",
  phonePretty: "+351 9XX XXX XXX"
};

/* ---- Fotos de perfil (edite aqui) ----------------------------------------
   A foto do "Sobre" troca automaticamente com o tema:
   light → usado em modo claro | dark → usado em modo escuro.
   Pode ser um ficheiro junto ao HTML ou base64.                            */
const PERFIL = {
  light: "perfil.webp",
  dark: "perfil-dark.webp"
};

/* ---- Blogue --------------------------------------------------------------
   Edite só este array para gerir os artigos: cada entrada cria um card
   completo (título, data, excerto e botão) automaticamente.
   "cta" é opcional — se omitido, usa a etiqueta padrão do idioma.          */
const POSTS = [
  { key: "post1", date: "2026-11-02", url: "/posts/post-one/",   cta: "Ler artigo →" },
  { key: "post2", date: "2026-10-14", url: "/posts/post-two/",   cta: "Ler artigo →" },
  { key: "post3", date: "2026-09-30", url: "/posts/post-three/" }
];

/* ---- i18n --------------------------------------------------------------- */
const I18N = {
  "pt-PT": {
    siteTitle: "ethics.click",
    metaDesc: "ethics.click — freelancer independente. Hacking ético, OSINT, forense digital e segurança operacional: formação e soluções.",
    skip: "Saltar para o conteúdo",
    brand: "ethics.click",
    navServices: "Serviços", navAbout: "Sobre", navBlog: "Blogue", navContact: "Contacto",
    themeLabel: "Alternar modo escuro",
    menuLabel: "Abrir menu",
    prevLabel: "Artigo anterior", nextLabel: "Artigo seguinte",
    blogCta: "Ler artigo →",
    comingSoon: "Em breve — novos artigos a caminho",
    heroTitle: "Segurança e privacidade, ensinadas e aplicadas na prática.",
    heroSub: "Freelancer independente em cibersegurança, hacking ético, OSINT avançado, forense digital e segurança operacional. Ensino à distância ou presencialmente e construo planos e soluções práticas que protegem as pessoas e os seus dados — particulares ou organizações.",
    servicesTitle: "Serviços & Formação",
    servicesIntro: "Todas as áreas abaixo funcionam como aulas e formação — à distância ou presencialmente — e como planos e soluções para particulares ou organizações.",
    svc1Title: "Hacking Ético & Pentesting",
    svc1Body: "Aprenda pentesting com autorização e rigor — ou contrate uma auditoria — para encontrar falhas antes de as encontrarem por si, com relatórios em linguagem clara.",
    svc1Tag: "Aulas à distância ou presenciais · Particulares e organizações",
    svc2Title: "Forense Digital",
    svc2Body: "Formação e investigação em forense digital — preservação de evidências, análise de sistemas e reconstrução de incidentes, do primeiro rasto ao relatório final.",
    svc2Tag: "Aulas à distância ou presenciais · Particulares e organizações",
    svc3Title: "OSINT Avançado",
    svc3Body: "Recolha e análise de informação de fontes abertas — metodologia, ferramentas e ética — para investigações próprias ou formação avançada.",
    svc3Tag: "Aulas à distância ou presenciais · Particulares e organizações",
    svc4Title: "Segurança Operacional (OPSEC)",
    svc4Body: "Planos práticos de OPSEC à medida — avaliação de riscos, hábitos e rotinas que protegem a vida profissional e pessoal de cada pessoa ou equipa.",
    svc4Tag: "Planos personalizados · Particulares e organizações",
    svc5Title: "Hardening & Redes",
    svc5Body: "Reforço de sistemas Linux e Android e boas práticas de rede — soluções concretas que cada pessoa ou organização consegue aplicar e manter sozinha.",
    svc5Tag: "Soluções à medida · Particulares e organizações",
    svc6Title: "Privacidade, Direitos Digitais & FLOSS",
    svc6Body: "Formação, sensibilização e trabalho de watchdog em defesa da privacidade e dos direitos digitais — com o Software Livre/Open Source (FLOSS) como fundação para a transparência e a segurança orientada pela comunidade.",
    svc6Tag: "Formação e sensibilização · Particulares e organizações",
    aboutTitle: "Sobre",
    aboutP1: "Sou freelancer independente por trás da ethics.click. Trabalho em cibersegurança, hacking ético, OSINT avançado, forense digital e segurança operacional — construindo e ensinando soluções práticas que protegem pessoas e os seus dados.",
    aboutP2: "Acredito na segurança, privacidade e liberdade através da colaboração e da educação — e no Software Livre/Open Source (FLOSS) como fundação para a transparência e a segurança orientada pela comunidade.",
    aboutP3: "Para lá do trabalho, a vida divide-se entre muitas atividades — profissionais e de lazer. É desse equilíbrio que nasce a minha forma de trabalhar: prática, direta e centrada nas pessoas — em como usam a tecnologia e em qual escolhem usar.",
    blogTitle: "Blogue",
    post1Title: "Segurança operacional para todos",
    post1Excerpt: "Como aplicar princípios de OPSEC no dia-a-dia — sem paranoias, sem complicações, apenas hábitos que fazem a diferença.",
    post2Title: "Notas de hardening para Linux",
    post2Excerpt: "Reforço mínimo de um sistema Linux: contas, rede e atualizações. As três coisas que mais importam, por esta ordem.",
    post3Title: "FLOSS: segurança orientada pela comunidade",
    post3Excerpt: "Porque o software livre e open source é a base da transparência — e porque a auditoria coletiva vale mais do que qualquer promessa fechada.",
    contactTitle: "Contacto",
    contactIntro: "Um clique abre a conversa diretamente — e o contacto fica visível no cartão para poder guardá-lo ou copiá-lo.",
    cmEmailTitle: "Email",
    cmEmailCta: "Contactar por email →",
    cmEmailDesc: "A forma mais simples e universal de chegar até mim.",
    cmEmailPro1: "Funciona em qualquer dispositivo, sem instalar nada",
    cmEmailPro2: "Mensagem escrita, arquivável e pesquisável",
    cmEmailPro3: "Permite anexos e respostas pensadas com calma",
    cmEmailCon1: "Resposta pode demorar mais",
    cmEmailCon2: "Metadados ficam visíveis ao fornecedor de email",
    cmSignalTitle: "Signal",
    cmSignalCta: "Contactar no Signal →",
    cmSignalDesc: "Mensagens e chamadas encriptadas de ponta a ponta.",
    cmSignalPro1: "Encriptação ponta-a-ponta por predefinição",
    cmSignalPro2: "Chamadas de voz e vídeo seguras",
    cmSignalPro3: "Recolha mínima de metadados",
    cmSignalCon1: "Ambos precisam de ter a aplicação instalada",
    cmSignalCon2: "Exige criar conta com um número de telefone",
    cmPhoneTitle: "Telefone (PT)",
    cmPhoneCta: "Ligar agora →",
    cmPhoneDesc: "Para o que é urgente ou precisa de voz, imediatamente.",
    cmPhonePro1: "Imediato e direto, ideal para urgências",
    cmPhonePro2: "Não exige instalar aplicações",
    cmPhoneCon1: "Chamadas e SMS não são encriptadas",
    cmPhoneCon2: "Expõe o número e fica sujeito a interceção na rede",
    quote: "Sem privacidade, não existe liberdade; sem liberdade, nenhuma segurança merece ser desejada",
    footerNote: "Sem cookies, sem rastreio, sem JavaScript além de um seletor de tema e idioma."
  },
  "en-US": {
    siteTitle: "ethics.click",
    metaDesc: "ethics.click — independent freelancer. Ethical hacking, OSINT, digital forensics and operational security: training and solutions.",
    skip: "Skip to content",
    brand: "ethics.click",
    navServices: "Services", navAbout: "About", navBlog: "Blog", navContact: "Contact",
    themeLabel: "Toggle dark mode",
    menuLabel: "Open menu",
    prevLabel: "Previous post", nextLabel: "Next post",
    blogCta: "Read post →",
    comingSoon: "Coming soon — new posts on the way",
    heroTitle: "Security and privacy, taught and applied hands-on.",
    heroSub: "Independent freelancer in cybersecurity, ethical hacking, advanced OSINT, digital forensics and operational security. I teach remotely or in person, and build practical plans and solutions that protect people and their data — individuals and organisations alike.",
    servicesTitle: "Services & Training",
    servicesIntro: "Every area below works as classes and training — remote or in person — and as plans and solutions for individuals or organisations.",
    svc1Title: "Ethical Hacking & Pentesting",
    svc1Body: "Learn authorized, rigorous penetration testing — or hire an audit — to find flaws before someone else does, with plain-language reports.",
    svc1Tag: "Classes remote or in person · Individuals and organisations",
    svc2Title: "Digital Forensics",
    svc2Body: "Training and investigation in digital forensics — evidence preservation, system analysis and incident reconstruction, from the first trace to the final report.",
    svc2Tag: "Classes remote or in person · Individuals and organisations",
    svc3Title: "Advanced OSINT",
    svc3Body: "Open-source intelligence gathering and analysis — methodology, tools and ethics — for your own investigations or advanced training.",
    svc3Tag: "Classes remote or in person · Individuals and organisations",
    svc4Title: "Operational Security (OPSEC)",
    svc4Body: "Tailored, practical OPSEC plans — risk assessment, habits and routines that protect the professional and personal life of each person or team.",
    svc4Tag: "Tailored plans · Individuals and organisations",
    svc5Title: "Hardening & Networking",
    svc5Body: "Hardening for Linux and Android systems and network best practices — concrete solutions each person or organisation can apply and maintain themselves.",
    svc5Tag: "Tailored solutions · Individuals and organisations",
    svc6Title: "Privacy, Digital Rights & FLOSS",
    svc6Body: "Training, awareness and watchdog work in defence of privacy and digital rights — with Free/Libre and Open Source Software as the foundation for transparency and community-driven security.",
    svc6Tag: "Training and awareness · Individuals and organisations",
    aboutTitle: "About",
    aboutP1: "I'm an independent freelancer behind ethics.click. I work in cybersecurity, ethical hacking, advanced OSINT, digital forensics and operational security — building and teaching practical solutions that protect people and their data.",
    aboutP2: "I believe in security, privacy and freedom through collaboration and education — and in Free/Libre and Open Source Software as the foundation for transparency and community-driven security.",
    aboutP3: "Beyond work, life is split across many activities — professional and leisure alike. That balance shapes how I work: practical, direct and centred on people — on how they use technology, and which technology they choose to use.",
    blogTitle: "Blog",
    post1Title: "Operational security for everyone",
    post1Excerpt: "Applying OPSEC principles to daily life — no paranoia, no complexity, just habits that make a difference.",
    post2Title: "Linux hardening notes",
    post2Excerpt: "Minimal hardening for a Linux system: accounts, networking and updates. The three things that matter most, in that order.",
    post3Title: "FLOSS: community-driven security",
    post3Excerpt: "Why free and open source software is the foundation of transparency — and why collective auditing beats any closed promise.",
    contactTitle: "Contact",
    contactIntro: "One click opens the conversation directly — and the contact stays visible on the card so you can save or copy it.",
    cmEmailTitle: "Email",
    cmEmailCta: "Contact by email →",
    cmEmailDesc: "The simplest and most universal way to reach me.",
    cmEmailPro1: "Works on any device, nothing to install",
    cmEmailPro2: "Written message, archivable and searchable",
    cmEmailPro3: "Supports attachments and well-thought replies",
    cmEmailCon1: "Reply may take longer",
    cmEmailCon2: "Metadata is visible to the email provider",
    cmSignalTitle: "Signal",
    cmSignalCta: "Contact on Signal →",
    cmSignalDesc: "End-to-end encrypted messages and calls.",
    cmSignalPro1: "End-to-end encryption by default",
    cmSignalPro2: "Secure voice and video calls",
    cmSignalPro3: "Minimal metadata collection",
    cmSignalCon1: "Both sides need the app installed",
    cmSignalCon2: "Requires creating an account with a phone number",
    cmPhoneTitle: "Phone (PT)",
    cmPhoneCta: "Call now →",
    cmPhoneDesc: "For anything urgent or that needs a voice, right away.",
    cmPhonePro1: "Immediate and direct, ideal for emergencies",
    cmPhonePro2: "No app installation required",
    cmPhoneCon1: "Calls and SMS are not encrypted",
    cmPhoneCon2: "Exposes the number and is subject to network interception",
    quote: "Without privacy, there is no freedom; without freedom, there is no security worth having.",
    footerNote: "No cookies, no tracking, no JavaScript beyond a theme and language toggle."
  }
};

const $ = (sel) => document.querySelector(sel);
let currentLang = "pt-PT";

/* ---- Blogue: renderização do slider (DOM seguro, sem innerHTML) ----------
   Cada card recebe um botão gerado automaticamente a partir do "url"
   do post — para alterar um link no futuro, basta editar POSTS.
   O primeiro card é sempre o "Em breve"; ao carregar, a vista salta
   para o primeiro artigo, deixando-o apenas meio visível à esquerda.       */
function renderBlog(lang) {
  const dict = I18N[lang] || I18N["en-US"];
  const track = $("#blogTrack");
  track.innerHTML = "";

  /* Cartão "Em breve" — primeiro da fila, desliza com os restantes */
  const soon = document.createElement("article");
  soon.className = "card blog-card coming-soon";
  const soonTitle = document.createElement("h3");
  soonTitle.textContent = dict.comingSoon;
  soon.appendChild(soonTitle);
  track.appendChild(soon);

  for (const p of POSTS) {
    const card = document.createElement("article");
    card.className = "card blog-card";

    const h3 = document.createElement("h3");
    const a = document.createElement("a");
    a.href = p.url;
    a.textContent = dict[p.key + "Title"];
    h3.appendChild(a);

    const excerpt = document.createElement("p");
    excerpt.textContent = dict[p.key + "Excerpt"];

    /* Botão "ler artigo" — liga sempre ao url deste post */
    const btn = document.createElement("a");
    btn.className = "blog-cta";
    btn.href = p.url;
    btn.textContent = p.cta || dict.blogCta;

    const time = document.createElement("time");
    time.setAttribute("datetime", p.date);
    time.textContent = p.date;

    card.append(h3, excerpt, btn, time);
    track.appendChild(card);
  }

  /* Começar com o primeiro artigo visível:
     o "Em breve" fica escondido meio cartão à esquerda. */
  const cards = track.querySelectorAll(".blog-card");
  const first = cards[1]; // índice 0 é o "Em breve"
  if (first) {
    requestAnimationFrame(() => {
      const left =
        first.getBoundingClientRect().left -
        track.getBoundingClientRect().left +
        track.scrollLeft;
      track.scrollTo({
        left: left - (track.clientWidth - first.offsetWidth) / 2,
        behavior: "auto"
      });
    });
  }
}

/* ---- Idioma -------------------------------------------------------------- */
function setLang(lang, persist = true) {
  const dict = I18N[lang] || I18N["en-US"];
  currentLang = lang === "pt-PT" ? "pt-PT" : "en-US";
  document.documentElement.lang = currentLang;
  document.title = dict.siteTitle;
  for (const el of document.querySelectorAll("[data-i18n]")) {
    const key = el.getAttribute("data-i18n");
    if (dict[key]) el.textContent = dict[key];
  }
  for (const el of document.querySelectorAll("[data-i18n-aria]")) {
    const key = el.getAttribute("data-i18n-aria");
    if (dict[key]) el.setAttribute("aria-label", dict[key]);
  }
  $("#langBtn").textContent = currentLang === "pt-PT" ? "EN" : "PT";
  renderBlog(currentLang);
  if (persist) localStorage.setItem("lang", currentLang);
}

/* ---- Tema ---------------------------------------------------------------- */
const mqDark = matchMedia("(prefers-color-scheme: dark)");

/* Tema efetivamente visível: o escolhido, ou o do sistema se estiver em "auto" */
function effectiveDark() {
  const t = document.documentElement.dataset.theme || "auto";
  return t === "dark" || (t === "auto" && mqDark.matches);
}

function cycleTheme() {
  const order = ["auto", "dark", "light"];
  const current = document.documentElement.dataset.theme || "auto";
  const idx = order.indexOf(current) === -1 ? 0 : order.indexOf(current);
  const nextTheme = order[(idx + 1) % order.length];
  document.documentElement.dataset.theme = nextTheme;
  localStorage.setItem("theme", nextTheme);
  applyPhotoForTheme(); // a foto acompanha o novo tema
}

/* ---- Slider do blogue ---------------------------------------------------- */
function slideBy(dir) {
  const track = $("#blogTrack");
  const card = track.querySelector(".blog-card");
  const step = card ? card.offsetWidth + 16 : 320;
  track.scrollBy({ left: dir * step, behavior: "smooth" });
}

/* ---- Contacto: um clique revela o contacto e comunica diretamente -------- */
function buildContactLink(type) {
  const a = document.createElement("a");
  if (type === "email") {
    a.href = "mailto:" + CONTACT.email;
    a.textContent = CONTACT.email;
  } else if (type === "signal") {
    a.href = CONTACT.signalUrl;
    a.textContent = CONTACT.signalUser;
  } else if (type === "phone") {
    a.href = "tel:" + CONTACT.phone;
    a.textContent = CONTACT.phonePretty;
  }
  return a;
}

/* ---- Foto de perfil protegida -------------------------------------------- */
let photoFailedOnce = false; // evita loop infinito se também o fallback falhar

function applyPhotoForTheme() {
  const img = $("#profilePhoto");
  if (!img || photoFailedOnce) return;
  const wanted = effectiveDark() ? PERFIL.dark : PERFIL.light;
  if (img.dataset.current === wanted) return; // já é a certa
  img.dataset.current = wanted;
  img.src = wanted;
}

function setupPhotoProtection() {
  const img = $("#profilePhoto");
  const wrap = $("#photoWrap");
  if (!img || !wrap) return;
  const FALLBACK = img.dataset.fallback;
  const BLOCK_SIZE = 16;

  // Se a foto do tema não carregar, mostra a silhueta (uma vez só)
  img.addEventListener("error", () => {
    if (!photoFailedOnce) {
      photoFailedOnce = true;
      img.src = FALLBACK;
    }
  });

  // Sem menu de contexto, sem arrastar
  wrap.addEventListener("contextmenu", (e) => e.preventDefault());
  wrap.addEventListener("dragstart", (e) => e.preventDefault());

  // Foto inicial conforme o tema atual
  applyPhotoForTheme();

  // Se o sistema mudar de tema enquanto o site está em "auto", acompanha
  mqDark.addEventListener("change", () => {
    if ((document.documentElement.dataset.theme || "auto") === "auto") applyPhotoForTheme();
  });

  window.addEventListener("beforeprint", () => {
    try {
      const tiny = document.createElement("canvas");
      tiny.width = BLOCK_SIZE; tiny.height = BLOCK_SIZE;
      const ctx = tiny.getContext("2d");
      ctx.drawImage(img, 0, 0, BLOCK_SIZE, BLOCK_SIZE);
      img.src = tiny.toDataURL();
      wrap.classList.add("pixelated");
    } catch (_) { /* se o canvas falhar, a foto simplesmente não é alterada */ }
  });

  window.addEventListener("afterprint", () => {
    wrap.classList.remove("pixelated");
    photoFailedOnce = false;         // pode voltar a tentar as fotos do tema
    img.dataset.current = "";        // força recarga da foto do tema atual
    applyPhotoForTheme();
  });
}

/* ---- Arranque ------------------------------------------------------------ */
document.addEventListener("DOMContentLoaded", () => {
  const savedTheme = localStorage.getItem("theme");
  if (savedTheme) document.documentElement.dataset.theme = savedTheme;

  const savedLang = localStorage.getItem("lang");
  const browserLang = navigator.language?.toLowerCase().startsWith("pt") ? "pt-PT" : "en-US";
  setLang(savedLang === "pt-PT" ? "pt-PT" : (savedLang === "en-US" ? "en-US" : browserLang), Boolean(savedLang));

  $("#langBtn").addEventListener("click", () =>
    setLang(currentLang === "pt-PT" ? "en-US" : "pt-PT"));

  $("#themeBtn").addEventListener("click", cycleTheme);
  $("#year").textContent = new Date().getFullYear();

  // Menu mobile
  const nav = $("#mainNav"), menuBtn = $("#menuBtn");
  menuBtn.addEventListener("click", () => {
    const open = nav.classList.toggle("open");
    menuBtn.setAttribute("aria-expanded", String(open));
    menuBtn.textContent = open ? "✕" : "☰";
  });
  nav.addEventListener("click", (e) => {
    if (e.target.tagName === "A") {
      nav.classList.remove("open");
      menuBtn.setAttribute("aria-expanded", "false");
      menuBtn.textContent = "☰";
    }
  });

  // Slider do blogue
  $("#blogPrev").addEventListener("click", () => slideBy(-1));
  $("#blogNext").addEventListener("click", () => slideBy(1));

  // Contactos: revela o contacto em definitivo e aciona a comunicação direta
  for (const btn of document.querySelectorAll(".cta[data-contact]")) {
    btn.addEventListener("click", () => {
      const type = btn.dataset.contact;
      const target = document.getElementById("reveal-" + type);
      if (!target.hidden) return;
      const link = buildContactLink(type);
      target.replaceChildren(link);
      target.hidden = false;
      btn.hidden = true;
      link.click();
    });
  }

  // Proteção da foto de perfil (+ troca por tema)
  setupPhotoProtection();
});
