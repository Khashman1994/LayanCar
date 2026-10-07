'use client';
// app/page.tsx

import React from 'react';
import {
  CarFront, Home, MapPin, Clock, Globe, FileCheck,
  ShieldCheck, Banknote, Smartphone, CheckCircle2,
  type LucideIcon
} from 'lucide-react';

export default function LayanCartransPage() {
  // --- FORMSPREE ENDPUNKT HIER EINTRAGEN ---
  const FORM_ENDPOINT = "https://formspree.io/f/xgobajjz";

  const scrollToForm = () => {
    document.getElementById('kontakt-formular')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-slate-50 font-sans text-slate-900">
      
      {/* --- HEADER / NAVBAR --- */}
      <header className="bg-white shadow-sm sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex justify-between items-center">
          <div className="flex items-center gap-2">
            <CarFront className="w-8 h-8 text-blue-600" />
            <span className="text-2xl font-bold text-slate-900 tracking-tight">Layan Cartrans</span>
          </div>
          <nav className="hidden md:flex gap-8 font-medium text-slate-600">
            <a href="#wer-wir-sind" className="hover:text-blue-600 transition">Über uns</a>
            <a href="#leistungen" className="hover:text-blue-600 transition">Leistungen</a>
            <a href="#vorteile" className="hover:text-blue-600 transition">Vorteile</a>
          </nav>
          <button 
            onClick={scrollToForm}
            className="bg-blue-600 hover:bg-blue-700 text-white px-5 py-2.5 rounded-lg font-semibold transition shadow-sm"
          >
            Angebot anfordern
          </button>
        </div>
      </header>

      {/* --- HERO SEKTION --- */}
      <section className="relative bg-slate-900 text-white py-24 lg:py-32 overflow-hidden">
        <div className="absolute inset-0 opacity-10 bg-[url('https://images.unsplash.com/photo-1519641471654-76ce0107ad1b?q=80&w=2000&auto=format&fit=crop')] bg-cover bg-center"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <span className="inline-block py-1 px-3 rounded-full bg-blue-500/20 border border-blue-400/30 text-blue-300 text-sm font-semibold tracking-wider mb-6 uppercase">
            Europaweite Fahrzeuglogistik
          </span>
          <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight mb-6 leading-tight">
            Sichere Fahrzeugüberführung <br className="hidden md:block"/> von A nach B.
          </h1>
          <p className="text-lg md:text-xl text-slate-300 max-w-2xl mx-auto mb-10">
            Wir bringen Ihr Fahrzeug sicher, pünktlich und digital protokolliert an sein Ziel. 
            Ihr zuverlässiger Partner für Autohäuser, Flotten und Privatkunden.
          </p>
          <button 
            onClick={scrollToForm}
            className="bg-blue-600 hover:bg-blue-500 text-white px-8 py-4 rounded-xl font-bold text-lg transition shadow-lg shadow-blue-900/50"
          >
            Jetzt unverbindlich anfragen
          </button>
          
          {/* Zielgruppen Badges */}
          <div className="mt-12 flex flex-wrap justify-center gap-4 text-sm font-medium text-slate-300">
            <span className="flex items-center gap-1"><CheckCircle2 className="w-4 h-4 text-blue-400"/> KFZ Überführung</span>
            <span className="flex items-center gap-1"><CheckCircle2 className="w-4 h-4 text-blue-400"/> Elektroautos</span>
            <span className="flex items-center gap-1"><CheckCircle2 className="w-4 h-4 text-blue-400"/> Transporter</span>
            <span className="flex items-center gap-1"><CheckCircle2 className="w-4 h-4 text-blue-400"/> Autohäuser</span>
            <span className="flex items-center gap-1"><CheckCircle2 className="w-4 h-4 text-blue-400"/> Privatkunden</span>
          </div>
        </div>
      </section>

      {/* --- WER WIR SIND --- */}
      <section id="wer-wir-sind" className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-slate-900 mb-6">Wer wir sind</h2>
          <p className="text-lg text-slate-600 leading-relaxed">
            Layan Cartrans ist Ihr spezialisierter Dienstleister für professionelle Fahrzeugüberführungen. Ob Neuwagen für Autohaus, Kundenfahrzeug für Werkstatt oder Exportfahrzeug für Händler – wir bewegen Ihr Fahrzeug sicher auf eigener Achse oder per Transporter. Jede Überführung erfolgt mit vollständiger Dokumentation, Versicherungsschutz und festem Zeitfenster. So kommt Ihr Fahrzeug pünktlich und in einwandfreiem Zustand am Ziel an.
          </p>
        </div>
      </section>

      {/* --- LEISTUNGEN --- */}
      <section id="leistungen" className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-slate-900 mb-4">Unsere Leistungen</h2>
            <p className="text-slate-600 max-w-2xl mx-auto">Maßgeschneiderte Transportlösungen für jede Anforderung.</p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <ServiceCard icon={CarFront} title="Einfachüberführung" desc="Schnelle und direkte Überführung Ihres Fahrzeugs vom Start- zum Zielort durch erfahrene Fahrer." />
            <ServiceCard icon={Home} title="Haustürüberführung" desc="Bequemer Door-to-Door Service. Wir holen das Auto direkt bei Ihnen ab und liefern es vor die Haustür." />
            <ServiceCard icon={MapPin} title="Fahrzeugabholung" desc="Sie haben ein Auto gekauft? Wir übernehmen die professionelle Abholung beim Verkäufer oder Händler." />
            <ServiceCard icon={Clock} title="Bereitschaftsdienst" desc="Flexible und kurzfristige Überführungen, wenn es einmal besonders schnell gehen muss." />
            <ServiceCard icon={Globe} title="Fahrzeugüberführung ins Ausland" desc="Wir bringen Ihr Fahrzeug nicht nur deutschlandweit, sondern sicher über die Grenzen ins europäische Ausland." />
            <ServiceCard icon={FileCheck} title="Digitale Protokollierung" desc="Professionelle Übergabeprotokolle mit Fotodokumentation. 100% transparent und digital." />
          </div>
        </div>
      </section>

      {/* --- WARUM LAYAN CARTRANS --- */}
      <section id="vorteile" className="py-20 bg-slate-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4">Warum Layan Cartrans?</h2>
            <p className="text-slate-400 max-w-2xl mx-auto">Ihre Fahrzeuge sind bei uns in den besten Händen. Das ist unser Versprechen.</p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <AdvantageCard icon={ShieldCheck} title="Höchste Zuverlässigkeit" desc="Sorgfältiger Umgang mit Ihrem Fahrzeug und absolute Diskretion sind unser Standard." />
            <AdvantageCard icon={Banknote} title="Faire Preise" desc="Transparente und kalkulierbare Kosten ohne versteckte Gebühren." />
            <AdvantageCard icon={Clock} title="Pünktlich & sicher" desc="Wir halten uns strikt an vereinbarte Zeitfenster und garantieren einen sicheren Transport." />
            <AdvantageCard icon={Smartphone} title="Echtzeit Tracking" desc="Wissen Sie immer, wo Ihr Fahrzeug gerade ist. Transparenz während der gesamten Fahrt." />
          </div>
        </div>
      </section>

      {/* --- KONTAKT FORMULAR --- */}
      <section id="kontakt-formular" className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-slate-50 border border-slate-200 rounded-2xl p-8 md:p-12 shadow-sm">
            <h2 className="text-3xl font-bold text-slate-900 mb-2">Angebot anfordern</h2>
            <p className="text-slate-600 mb-8">Füllen Sie das Formular aus, wir melden uns umgehend mit einem fairen Angebot bei Ihnen.</p>
            
            <form action={FORM_ENDPOINT} method="POST" className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-semibold text-slate-700 mb-2">Name / Unternehmen *</label>
                  <input type="text" name="Name" required className="w-full px-4 py-3 rounded-xl border border-slate-300 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition" placeholder="Max Mustermann GmbH" />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-slate-700 mb-2">E-Mail Adresse *</label>
                  <input type="email" name="Email" required className="w-full px-4 py-3 rounded-xl border border-slate-300 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition" placeholder="mail@beispiel.de" />
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-semibold text-slate-700 mb-2">Telefonnummer</label>
                  <input type="tel" name="Telefon" className="w-full px-4 py-3 rounded-xl border border-slate-300 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition" placeholder="+49 151 1234567" />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-slate-700 mb-2">Auftragsart *</label>
                  <select name="Auftragsart" required className="w-full px-4 py-3 rounded-xl border border-slate-300 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition bg-white">
                    <option value="">Bitte wählen...</option>
                    <option value="Privatkunde_PKW">PKW Überführung (Privatkunde)</option>
                    <option value="Autohaus_Flotte">Autohaus / Flotte</option>
                    <option value="Elektroauto">Elektroauto Überführung</option>
                    <option value="Transporter">Transporter Überführung</option>
                    <option value="Ausland">Überführung ins Ausland</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-sm font-semibold text-slate-700 mb-2">Fahrzeugdetails & Strecke *</label>
                <textarea name="Details" required rows={4} className="w-full px-4 py-3 rounded-xl border border-slate-300 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition resize-none" placeholder="Von: Stuttgart (PLZ 70173) | Nach: München (PLZ 80331) | Fahrzeug: VW Golf 8..."></textarea>
              </div>

              {/* DSGVO Checkbox */}
              <label className="flex items-start gap-3 cursor-pointer">
                <input type="checkbox" required name="DSGVO_Zustimmung" className="mt-1 w-5 h-5 rounded border-slate-300 text-blue-600 focus:ring-blue-500 cursor-pointer" />
                <span className="text-sm text-slate-600">
                  Ich stimme zu, dass meine Angaben aus dem Kontaktformular zur Beantwortung meiner Anfrage erhoben und verarbeitet werden. Die Daten werden nach abgeschlossener Bearbeitung Ihrer Anfrage gelöscht. (Hinweis: Sie können Ihre Einwilligung jederzeit widerrufen).
                </span>
              </label>

              {/* Honeypot Spam Protection */}
              <input type="text" name="_gotcha" className="hidden" />

              <button type="submit" className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-4 rounded-xl transition shadow-lg">
                Kostenfreies Angebot anfordern
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* --- FOOTER --- */}
      <footer className="bg-slate-950 text-slate-400 py-12 border-t border-slate-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid md:grid-cols-3 gap-8">
          
          <div>
            <div className="flex items-center gap-2 mb-4">
              <CarFront className="w-6 h-6 text-blue-500" />
              <span className="text-xl font-bold text-white tracking-tight">Layan Cartrans</span>
            </div>
            <p className="text-sm">Ihr professioneller Partner für Fahrzeugüberführungen in Deutschland und Europa.</p>
          </div>

          <div>
            <h3 className="text-white font-semibold mb-4">Kontakt</h3>
            <ul className="space-y-3 text-sm">
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-blue-500 shrink-0" />
                <span>Walderdorffstr. 24<br/>93053 Regensburg<br/>Deutschland</span>
              </li>
              {/* Hier kannst du später Telefon und Email ergänzen */}
            </ul>
          </div>

          <div>
            <h3 className="text-white font-semibold mb-4">Rechtliches</h3>
            <ul className="space-y-2 text-sm">
              <li><a href="/impressum" className="hover:text-white transition">Impressum</a></li>
              <li><a href="/datenschutz" className="hover:text-white transition">Datenschutz</a></li>
              <li><a href="/agb" className="hover:text-white transition">AGB</a></li>
            </ul>
          </div>

        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-12 pt-8 border-t border-slate-800 text-sm text-center">
          &copy; {new Date().getFullYear()} Layan Cartrans. Alle Rechte vorbehalten.
        </div>
      </footer>

    </div>
  );
}

// --- Hilfs-Komponenten für ein sauberes Layout ---

function ServiceCard({ icon: Icon, title, desc }: { icon: LucideIcon, title: string, desc: string }) {
  return (
    <div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100 hover:shadow-md transition-shadow">
      <div className="w-12 h-12 bg-blue-50 text-blue-600 rounded-xl flex items-center justify-center mb-6">
        <Icon className="w-6 h-6" />
      </div>
      <h3 className="text-xl font-bold text-slate-900 mb-3">{title}</h3>
      <p className="text-slate-600 leading-relaxed">{desc}</p>
    </div>
  );
}

function AdvantageCard({ icon: Icon, title, desc }: { icon: LucideIcon, title: string, desc: string }) {
  return (
    <div className="text-center p-6 rounded-2xl bg-slate-800/50 border border-slate-700/50">
      <div className="w-16 h-16 mx-auto bg-blue-500/10 text-blue-400 rounded-full flex items-center justify-center mb-6">
        <Icon className="w-8 h-8" />
      </div>
      <h3 className="text-lg font-bold text-white mb-3">{title}</h3>
      <p className="text-slate-400 text-sm leading-relaxed">{desc}</p>
    </div>
  );
}