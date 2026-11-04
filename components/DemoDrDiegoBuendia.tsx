"use client";

import React, { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { Menu, X, ShieldCheck, Activity, GraduationCap, Award, Phone, Instagram, Facebook, Music2, ArrowUpRight, MessageCircle } from "lucide-react";

const WHATSAPP = "https://wa.me/525551996805";
const EMERGENCY = "tel:+525510489471";
const IMG = {
  hero: "/images/hero-entorno-medico.jpg",
  drCuadrado: "/images/5-IMAGEN-DR-BUENDIA.webp",
  logoWhite: "/images/logo-doctor-blanco.png",
  logoBlue: "/images/logo-doctor-azul.png",
  cta: "/images/consulta-ortopedia.jpg",
};
const navItems = [
  { label: "Perfil profesional", href: "#perfil-profesional" },
  { label: "Áreas de atención", href: "#areas-de-atencion" },
  { label: "Consultorios y citas", href: "#consultorios" },
];
const consultorios = [
  {
    nombre: "Hospital MAC Periférico Sur",
    consultorio: "Torre II, piso 8, consultorio 822",
    direccion: "Periférico Sur 5246, col. Pedregal de Carrasco, Coyoacán, C.P. 04700, Ciudad de México",
    mapa: "Hospital MAC Periférico Sur 5246 Ciudad de México",
  },
  {
    nombre: "Hospital Ángeles Universidad",
    consultorio: "Consultorio 5010",
    direccion: "Avenida Universidad 1080, col. Xoco, Benito Juárez, C.P. 03339, Ciudad de México",
    mapa: "Hospital Ángeles Universidad Avenida Universidad 1080 Ciudad de México",
  },
];

// Content stays visible in server-rendered HTML, including with reduced motion or no JavaScript.
function Reveal({ children, className = "" }: { children: React.ReactNode; delay?: number; className?: string }) {
  return <div className={className}>{children}</div>;
}

export default function DemoDrDiegoBuendia({ children }: { children: React.ReactNode }) {
  const privacyDialog = useRef<HTMLDialogElement>(null);
  const privacyTrigger = useRef<HTMLButtonElement>(null);
  const menuTrigger = useRef<HTMLButtonElement>(null);
  const [privacyOpen, setPrivacyOpen] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    if (!privacyOpen) return;
    const dialog = privacyDialog.current;
    const trigger = privacyTrigger.current;
    const previousOverflow = document.body.style.overflow;
    dialog?.showModal();
    document.body.style.overflow = "hidden";
    return () => {
      dialog?.close();
      document.body.style.overflow = previousOverflow;
      trigger?.focus();
    };
  }, [privacyOpen]);

  useEffect(() => {
    if (!menuOpen) return;
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setMenuOpen(false);
        menuTrigger.current?.focus();
      }
    };
    document.addEventListener("keydown", onKeyDown);
    return () => document.removeEventListener("keydown", onKeyDown);
  }, [menuOpen]);

  return (
    <div className="w-full min-h-screen relative bg-white text-ink font-sans selection:bg-accent selection:text-white">
      <a className="skip-link" href="#contenido">Saltar al contenido</a>
      <a href={WHATSAPP} target="_blank" rel="noreferrer" className="floating-whatsapp" aria-label="Agendar consulta por WhatsApp">
        <MessageCircle size={23} aria-hidden="true" /><span>Agendar consulta</span>
      </a>
      <header className="site-header">
        <div className="contact-bar">
          <div className="header-container">
            <a href={EMERGENCY}><Phone size={13} aria-hidden="true" /><span className="desktop-contact">Urgencias 24 horas: 55 1048 9471</span><span className="mobile-contact">Llamar a urgencias</span></a>
            <span className="contact-divider" aria-hidden="true">·</span>
            <a href={WHATSAPP} target="_blank" rel="noreferrer"><MessageCircle size={14} aria-hidden="true" /><span className="desktop-contact">Citas por WhatsApp: 55 5199 6805</span><span className="mobile-contact">Agendar por WhatsApp</span></a>
          </div>
        </div>
        <nav className="main-nav header-container" aria-label="Navegación principal">
          <a className="brand-link" href="#inicio" aria-label="Dr. Diego Buendia, inicio"><Image src={IMG.logoBlue} alt="Dr. Diego Buendia" width={800} height={782} priority /><span>Dr. Diego Buendia<small>Ortopedia · Cirugía de Columna</small></span></a>
          <div className="desktop-nav">{navItems.map((item) => <a key={item.href} href={item.href}>{item.label}</a>)}</div>
          <a href={WHATSAPP} target="_blank" rel="noreferrer" className="button-primary header-appointment">Agendar consulta <ArrowUpRight size={16} aria-hidden="true" /></a>
          <button ref={menuTrigger} className="menu-toggle" type="button" aria-label={menuOpen ? "Cerrar menú" : "Abrir menú"} aria-expanded={menuOpen} aria-controls="mobile-menu" onClick={() => setMenuOpen(!menuOpen)}>{menuOpen ? <X size={24} /> : <Menu size={24} />}</button>
        </nav>
        <nav id="mobile-menu" aria-label="Navegación móvil" className="mobile-menu" hidden={!menuOpen}>
          {navItems.map((item) => <a key={item.href} href={item.href} onClick={() => setMenuOpen(false)}>{item.label}<ArrowUpRight size={16} aria-hidden="true" /></a>)}
          <a href={WHATSAPP} target="_blank" rel="noreferrer" className="button-primary" onClick={() => setMenuOpen(false)}>Agendar consulta</a>
        </nav>
      </header>
      <main id="contenido">
      <section id="inicio" className="hero-section relative w-full flex items-end overflow-hidden bg-ink" aria-labelledby="hero-title">
        {/* Imagen de respaldo detrás del video */}
        <div className="absolute inset-0 w-full h-full overflow-hidden pointer-events-none">
          {/* eslint-disable-next-line @next/next/no-img-element -- Se conserva el respaldo original del hero. */}
          <img
            className="w-full h-full object-cover opacity-50"
            src={IMG.hero}
            alt=""
            fetchPriority="high"
          />
        </div>

        {/* El contenedor recorta el video 16:9 para cubrir la portada. */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none" style={{ containerType: "size" }} aria-hidden="true">
          <iframe
            title="Video de fondo de la portada"
            src="https://www.youtube.com/embed/LI5insKWPN0?autoplay=1&mute=1&loop=1&playlist=LI5insKWPN0&controls=0&showinfo=0&rel=0&playsinline=1"
            allow="autoplay; encrypted-media"
            tabIndex={-1}
            className="absolute left-1/2 top-1/2 w-[max(100cqw,177.78cqh)] h-[max(100cqh,56.25cqw)] -translate-x-1/2 -translate-y-1/2 border-0 pointer-events-none"
          />
        </div>
        <div className="absolute inset-0 bg-slate-900/60 pointer-events-none" />

        {/* Gradients para asegurar la legibilidad del texto */}
        <div className="absolute inset-0 bg-gradient-to-t from-ink/95 via-ink/40 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-r from-ink/70 via-transparent to-transparent" />

        <div className="hero-copy relative z-10 w-full max-w-6xl mx-auto px-6 sm:px-8">
          <p className="hero-eyebrow">Dr. Diego Eduardo Buendia Valdez · Ciudad de México</p>
          <h1 id="hero-title">Traumatología, Ortopedia y Cirugía de Columna</h1>
          <p className="hero-description">Diagnóstico y tratamiento de lesiones, dolor articular y problemas de columna. Opciones quirúrgicas y no quirúrgicas.</p>
          <p className="hero-locations">Consulta en Hospital MAC Periférico Sur y Hospital Ángeles Universidad.</p>
          <div className="hero-actions">
            <a href={WHATSAPP} target="_blank" rel="noreferrer" className="button-primary">Agendar consulta <ArrowUpRight size={17} aria-hidden="true" /></a>
            <a href={EMERGENCY} className="button-outline"><Phone size={16} aria-hidden="true" />Urgencias 24 horas</a>
          </div>
        </div>
      </section>

      <section id="perfil-profesional" className="py-24 sm:py-36 px-6 sm:px-8 bg-white">
        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          
          <Reveal>
            <div className="relative rounded-[2.5rem] overflow-hidden shadow-xl aspect-square">
              <Image
                src={IMG.drCuadrado}
                width={854}
                height={1280}
                sizes="(min-width: 1024px) 528px, (min-width: 640px) 80vw, 100vw"
                alt="Dr. Diego Buendia en consulta"
                className="w-full h-full object-cover object-top hover:scale-105 transition-transform duration-[1.5s]"
              />
            </div>
          </Reveal>

          <div>
            <Reveal>
              <p className="text-[12px] uppercase mb-4 text-accent tracking-[0.2em] font-semibold">
                Dr. Diego Eduardo Buendia Valdez
              </p>
            </Reveal>
            <Reveal delay={100}>
              <h2 className="font-display font-normal text-[clamp(2rem,4vw,3rem)] leading-tight text-ink">
                Mi propósito es mejorar tu calidad de vida.
              </h2>
            </Reveal>
            <Reveal delay={200}>
              <div className="mt-8 flex flex-col gap-5 text-[16px] leading-relaxed text-muted font-light">
                <p>
                  Soy Diego Buendia, ortopedista y cirujano de columna. Estudié
                  Medicina en la UNAM, donde también hice la especialidad en
                  Ortopedia y la alta especialidad en Cirugía de Columna.
                  Completé mi formación en cirugía de columna en el IMSS.
                </p>
                <p>
                  Un problema de movilidad no se queda en el consultorio. Cansa,
                  desanima y pesa también en quien te acompaña. Por eso el
                  tratamiento lo decidimos juntos, con tiempos reales y sin
                  promesas de más.
                </p>
                <p className="text-ink font-medium">
                  Trabajo con un equipo de expertos que te acompaña desde la
                  primera consulta hasta que vuelves a tu rutina.
                </p>
              </div>
            </Reveal>
            <Reveal delay={300}>
              <ul className="mt-8 space-y-4 border-t border-line pt-6 text-[14px] leading-relaxed text-muted">
                <li className="flex items-start gap-3">
                  <ShieldCheck size={20} className="mt-0.5 shrink-0 text-accent" aria-hidden="true" />
                  <span>Certificación del Consejo Mexicano de Ortopedia y Traumatología.</span>
                </li>
                <li className="flex items-start gap-3">
                  <Award size={20} className="mt-0.5 shrink-0 text-accent" aria-hidden="true" />
                  <span>Miembro de la North American Spine Society.</span>
                </li>
                <li className="flex items-start gap-3">
                  <GraduationCap size={20} className="mt-0.5 shrink-0 text-accent" aria-hidden="true" />
                  <span>Maestría en Bioética y maestría en Administración de Instituciones de Salud.</span>
                </li>
                <li className="flex items-start gap-3">
                  <Activity size={20} className="mt-0.5 shrink-0 text-accent" aria-hidden="true" />
                  <span>Más de 20 años de ejercicio profesional.</span>
                </li>
              </ul>
               <Image width={800} height={782} src={IMG.logoBlue} alt="Firma Dr. Buendia" className="h-24 w-auto mt-10 opacity-80" />
            </Reveal>
          </div>
        </div>
      </section>

      {children}
      <section id="consultorios" className="py-24 sm:py-32 px-6 sm:px-8 bg-off" aria-labelledby="offices-title">
        <div className="max-w-6xl mx-auto">
          <p className="eyebrow">Ciudad de México</p>
          <h2 id="offices-title" className="font-display text-[clamp(2.2rem,4vw,3.4rem)] mb-12">Consultorios y citas</h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {consultorios.map((consultorio) => (
              <article key={consultorio.nombre} className="h-full flex flex-col overflow-hidden rounded-[2rem] border border-line bg-white">
                <div className="p-6 sm:p-8 flex-1">
                  <h3 className="font-display text-2xl text-accent">{consultorio.nombre}</h3>
                  <p className="mt-3 font-medium">{consultorio.consultorio}</p>
                  <address className="mt-3 text-muted text-[15px] leading-relaxed not-italic">{consultorio.direccion}</address>
                  <div className="office-actions">
                    <a href={WHATSAPP} target="_blank" rel="noreferrer" className="button-primary" aria-label={`Agendar consulta en ${consultorio.nombre}`}>Agendar consulta <ArrowUpRight size={16} aria-hidden="true" /></a>
                    <a href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(consultorio.mapa)}`} target="_blank" rel="noreferrer" className="button-text" aria-label={`Cómo llegar a ${consultorio.nombre}`}>Cómo llegar <ArrowUpRight size={16} aria-hidden="true" /></a>
                  </div>
                </div>
                <iframe title={`Mapa de ${consultorio.nombre}`} src={`https://www.google.com/maps?q=${encodeURIComponent(consultorio.mapa)}&output=embed`} className="w-full h-72 border-0" loading="lazy" referrerPolicy="no-referrer-when-downgrade" allowFullScreen />
              </article>
            ))}
          </div>
        </div>
      </section>
      <section id="contacto" className="relative isolate overflow-hidden py-20 sm:py-28 px-6 sm:px-8 bg-accent text-white" aria-labelledby="contact-title">
        <div className="absolute inset-0 -z-10 pointer-events-none"><Image src={IMG.cta} alt="" fill sizes="100vw" className="object-cover mix-blend-overlay opacity-20" /></div>
        <div className="max-w-6xl mx-auto">
          <div className="max-w-4xl mx-auto text-center mb-12">
            <h2 id="contact-title" className="font-display font-normal text-[clamp(2.4rem,4.5vw,3.8rem)] leading-tight">Agende una consulta</h2>
            <p className="mt-6 text-[16px] sm:text-[18px] text-white/85 max-w-2xl mx-auto">Consulte las opciones de tratamiento para su lesión o padecimiento.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 contact-cards">
            <div>
              <MessageCircle size={24} aria-hidden="true" /><h3>WhatsApp para citas</h3>
              <a href={WHATSAPP} target="_blank" rel="noreferrer" className="contact-number">55 5199 6805 <ArrowUpRight size={16} aria-hidden="true" /></a>
              <h4>Teléfonos de consultorio</h4>
              <a href="tel:+525551996805">55 5199 6805</a><a href="tel:+525554241489">55 5424 1489</a><a href="tel:+525543337869">55 4333 7869</a>
            </div>
            <div>
              <Phone size={24} aria-hidden="true" /><h3>Urgencias 24 horas</h3>
              <a href={EMERGENCY} className="contact-number">55 1048 9471</a>
              <a href={EMERGENCY} className="contact-button">Llamar a urgencias <ArrowUpRight size={16} aria-hidden="true" /></a>
            </div>
            <div>
              <ArrowUpRight size={24} aria-hidden="true" /><h3>Correo</h3>
              <a href="mailto:drdiegobuendia@gmail.com" className="contact-button">Enviar correo <ArrowUpRight size={16} aria-hidden="true" /></a>
            </div>
          </div>
        </div>
      </section>
      </main>

      <footer className="px-6 sm:px-8 pt-20 pb-10 bg-ink text-white border-t border-white/10">
        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 mb-16">
          
          {/* Brand Col */}
          <div className="lg:col-span-4 flex flex-col items-start">
            <div className="flex items-center gap-4 mb-6">
              <Image width={800} height={782} src={IMG.logoWhite} alt="Dr. Diego Buendia Logo" className="h-12 w-auto" />
              <span className="font-display text-xl text-white">Dr. Diego Eduardo Buendia Valdez</span>
            </div>
            <p className="text-[14px] text-white/75 font-light leading-relaxed mb-8">
              Traumatología · Ortopedia · Cirugía de Columna · Ciudad de México
            </p>
            <p className="text-[12px] text-white/70 font-light mb-3">@DrDiegoBuendia</p>
            <div className="flex gap-4">
              <a href="https://www.facebook.com/DrDiegoBuendia/" target="_blank" rel="noopener noreferrer" aria-label="Facebook de Dr. Diego Buendia" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-white/20 transition-colors text-white/80"><Facebook size={18} /></a>
              <a href="https://www.instagram.com/drdiegobuendia" target="_blank" rel="noopener noreferrer" aria-label="Instagram de Dr. Diego Buendia" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-white/20 transition-colors text-white/80"><Instagram size={18} /></a>
              <a href="https://www.tiktok.com/@drdiegobuendia" target="_blank" rel="noopener noreferrer" aria-label="TikTok de Dr. Diego Buendia" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-white/20 transition-colors text-white/80"><Music2 size={18} /></a>
            </div>
          </div>

          {/* Nav Col */}
          <div className="lg:col-span-2 lg:col-start-6">
            <h3 className="text-[12px] uppercase tracking-[0.15em] text-white/65 mb-6 font-semibold">Navegación</h3>
            <ul className="flex flex-col gap-4 text-[14px] text-white/70 font-light">
              {navItems.map((item) => <li key={item.href}><a href={item.href} className="hover:text-white transition-colors">{item.label}</a></li>)}
            </ul>
          </div>

          {/* Contact Col */}
          <div className="lg:col-span-4 lg:col-start-9">
            <h3 className="text-[12px] uppercase tracking-[0.15em] text-white/65 mb-6 font-semibold">Contacto y Citas</h3>
            <div className="flex flex-col gap-5 text-[14px] text-white/70 font-light">
              <div className="flex items-start gap-3">
                <Phone size={18} className="text-white/65 mt-0.5" />
                <div>
                  <p className="text-white font-medium mb-1">Consultorio</p>
                  <a href="tel:+525551996805" className="block">55 5199 6805</a>
                  <a href="tel:+525554241489" className="block">55 5424 1489</a>
                  <a href="tel:+525543337869" className="block">55 4333 7869</a>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <Activity size={18} className="text-white/65 mt-0.5" />
                <div>
                  <p className="text-white font-medium mb-1">Urgencias</p>
                  <a href="tel:+525510489471">55 1048 9471</a>
                </div>
              </div>
              <a 
                href={WHATSAPP} 
                target="_blank" 
                rel="noreferrer"
                className="mt-2 inline-block text-center rounded-full py-3 px-6 text-sm font-medium text-ink bg-white hover:bg-white/90 transition-colors w-fit"
              >
                Agendar consulta
              </a>
            </div>
          </div>

        </div>

        {/* Copyright */}
        <div className="max-w-6xl mx-auto pt-8 border-t border-white/10 flex flex-col sm:flex-row justify-between items-center gap-4 text-[12px] text-white/65 font-light">
          <p>© 2026 Dr. Diego Eduardo Buendia Valdez. Todos los derechos reservados.</p>
          <div className="flex gap-6">
            <button ref={privacyTrigger} type="button" onClick={() => setPrivacyOpen(true)} aria-haspopup="dialog" className="hover:text-white transition-colors underline underline-offset-4">Aviso de Privacidad</button>
          </div>
        </div>
      </footer>

      <dialog
        ref={privacyDialog}
        aria-labelledby="privacy-title"
        onCancel={() => setPrivacyOpen(false)}
        onClose={() => setPrivacyOpen(false)}
        className="m-auto w-[calc(100%-2rem)] max-w-2xl max-h-[85dvh] overflow-y-auto rounded-3xl p-0 bg-white text-ink shadow-2xl backdrop:bg-black/60 backdrop:backdrop-blur-sm"
      >
        <div className="sticky top-0 flex items-center justify-between gap-4 border-b border-line bg-white px-6 py-5">
          <h2 id="privacy-title" className="font-display text-2xl">Aviso de Privacidad</h2>
          <button type="button" autoFocus onClick={() => setPrivacyOpen(false)} aria-label="Cerrar aviso de privacidad" className="rounded-full p-3 hover:bg-off focus-visible:outline-accent">
            <X size={22} aria-hidden="true" />
          </button>
        </div>
        <div className="p-6 sm:p-8 space-y-5 text-[15px] leading-relaxed text-muted">
          <p><strong className="text-ink">Responsable:</strong> El Dr. Diego Eduardo Buendia Valdez, con consultorio en Periférico Sur 5246, Coyoacán, CDMX.</p>
          <p><strong className="text-ink">Datos recabados:</strong> Para agendar cita y atención médica (nombre, teléfono, correo) y datos sensibles de salud.</p>
          <p><strong className="text-ink">Uso:</strong> Expediente clínico, diagnóstico, tratamiento y contacto.</p>
          <p><strong className="text-ink">Con quién se comparten:</strong> Hospitales, autoridades sanitarias y aseguradoras a petición del paciente.</p>
          <p><strong className="text-ink">Tus derechos (ARCO):</strong> Solicitar corrección o eliminación al correo <a href="mailto:drdiegobuendia@gmail.com" className="break-words underline">drdiegobuendia@gmail.com</a> o teléfono <a href="tel:+525551996805" className="underline">55 5199 6805</a>.</p>
          <p><strong className="text-ink">Uso de cookies:</strong> Este sitio usa cookies de medición; puedes deshabilitarlas en tu navegador.</p>
        </div>
      </dialog>
    </div>
  );
}
