"use client";

import { useEffect, useRef, useState } from "react";
import { Plus } from "lucide-react";
import type { ClinicalEntry } from "@/data/care-areas";

export default function TreatmentAccordion({ entry, areaSlug }: { entry: ClinicalEntry; areaSlug: string }) {
  const [expanded, setExpanded] = useState(false);
  const card = useRef<HTMLDivElement>(null);
  const [entrance, setEntrance] = useState<"idle" | "waiting" | "entered">("idle");
  const id = `${areaSlug}-${entry.slug}`;

  useEffect(() => {
    const element = card.current;
    if (!element || !window.IntersectionObserver || window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    // Only stage offscreen cards: SSR and cards already in view remain visible.
    if (element.getBoundingClientRect().top < window.innerHeight) return;
    setEntrance("waiting");
    const observer = new IntersectionObserver(([entry]) => {
      if (!entry.isIntersecting) return;
      setEntrance("entered");
      observer.disconnect();
    }, { threshold: 0.1 });
    observer.observe(element);
    return () => observer.disconnect();
  }, []);

  return (
    <div ref={card} className="treatment-card" data-expanded={expanded} data-entrance={entrance}>
      <h5>
        <button
          type="button"
          id={`${id}-trigger`}
          className="treatment-trigger"
          aria-expanded={expanded}
          aria-controls={`${id}-description`}
          onClick={() => setExpanded((previous) => !previous)}
        >
          <span>{entry.title}</span>
          <Plus size={18} className="treatment-indicator" aria-hidden="true" />
        </button>
      </h5>
      <div
        id={`${id}-description`}
        className="treatment-panel"
        aria-labelledby={`${id}-trigger`}
        aria-hidden={!expanded}
      >
        <div className="treatment-panel-content">
          <div className="treatment-description">
            {entry.description.split("\n").map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
          </div>
        </div>
      </div>
    </div>
  );
}
