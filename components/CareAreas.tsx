import Image from "next/image";
import { ArrowUpRight, Phone } from "lucide-react";
import { careAreas, careIntroduction, type ClinicalEntry } from "@/data/care-areas";
import TreatmentAccordion from "@/components/TreatmentAccordion";

const WHATSAPP = "https://wa.me/525551996805";

function AppointmentLinks({ emergency = false }: { emergency?: boolean }) {
  return (
    <div className="area-actions">
      <a className="button-primary" href={WHATSAPP} target="_blank" rel="noreferrer">
        Agendar consulta <ArrowUpRight size={17} aria-hidden="true" />
      </a>
      {emergency && (
        <a className="button-text" href="tel:+525510489471">
          <Phone size={16} aria-hidden="true" /> Llamar a urgencias
        </a>
      )}
    </div>
  );
}

function ClinicalList({ entries, treatments = false, punctuate = true }: { entries: ClinicalEntry[]; treatments?: boolean; punctuate?: boolean }) {
  return (
    <ol className={treatments ? "treatment-list" : "condition-list"}>
      {entries.map((entry, index) => (
        <li key={entry.slug} className="clinical-entry">
          {!treatments && <span className="entry-number" aria-hidden="true">{String(index + 1).padStart(2, "0")}</span>}
          <div>
            <h5>{entry.title}{!treatments && punctuate && "."}</h5>
            {entry.description.split("\n").map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
          </div>
        </li>
      ))}
    </ol>
  );
}

export default function CareAreas() {
  return (
    <section id="areas-de-atencion" className="care-section" aria-labelledby="care-title">
      <div className="care-container">
        <div className="care-intro">
          <div><p className="eyebrow">Atención especializada</p><h2 id="care-title">Áreas de atención</h2></div>
          <p className="care-introduction">{careIntroduction}</p>
        </div>
        <nav className="area-index" aria-label="Explorar áreas de atención">
          {careAreas.map((area, index) => (
            <a key={area.slug} href={`#${area.slug}`}><span>0{index + 1}</span>{area.title}<ArrowUpRight size={17} aria-hidden="true" /></a>
          ))}
        </nav>
        {careAreas.map((area, index) => (
          <article key={area.slug} id={area.slug} className="care-area" aria-labelledby={`${area.slug}-title`}>
            <div className={`area-lead ${index === 1 ? "area-lead-reverse" : ""}`}>
              <div className="area-image">
                <Image src={area.image} alt={area.alt} fill sizes="(min-width: 1024px) 680px, (min-width: 768px) 55vw, 100vw" />
              </div>
              <div className="area-heading">
                <span className="area-number" aria-hidden="true">0{index + 1}</span>
                <h3 id={`${area.slug}-title`}>{area.title}</h3>
                <p>{area.description}</p>
              </div>
            </div>
            <div className="area-body">
              <div className="clinical-heading"><h4>Padecimientos</h4></div>
              <ClinicalList entries={area.conditions} />
              <div className="treatments-block">
                <div className="clinical-heading"><h4>Tratamientos</h4></div>
                <ol className="treatment-list">
                  {area.treatments.map((entry) => (
                    <li key={entry.slug} className="clinical-entry">
                      <TreatmentAccordion entry={entry} areaSlug={area.slug} />
                    </li>
                  ))}
                </ol>
              </div>
              {area.hand && (
                <section id={area.hand.slug} className="hand-section" aria-labelledby="hand-title">
                  <div className="hand-lead">
                    <div className="hand-image"><Image src={area.hand.image} alt={area.hand.alt} fill sizes="(min-width: 768px) 50vw, 100vw" /></div>
                    <div><p className="eyebrow">Ortopedia</p><h4 id="hand-title">{area.hand.title}</h4><p>{area.hand.description}</p></div>
                  </div>
                  <ClinicalList entries={area.hand.entries} punctuate={false} />
                </section>
              )}
              <AppointmentLinks emergency={index === 0} />
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
