import assert from 'node:assert/strict';
import { readFileSync, existsSync } from 'node:fs';
import { execFileSync } from 'node:child_process';

const source = readFileSync('Prompt_Codex_Rediseno_Dr_Buendia_V4.md', 'utf8').split('# FUENTE EDITORIAL INTEGRAL')[1];
const editorial = source.split('4. Áreas de atención')[1].split('5. Consultorios y citas')[0];
const htmlPath = process.argv[2] || `${process.env.NEXT_DIST_DIR || '.next'}/server/app/index.html`;
const html = readFileSync(htmlPath, 'utf8');
const normalize = (text) => text.replace(/\s+/g, ' ').trim();
const visible = normalize(html.replace(/<!--[\s\S]*?-->/g, '').replace(/<script\b[^>]*>[\s\S]*?<\/script>/g, '').replace(/<[^>]+>/g, ' ').replace(/&amp;/g, '&').replace(/&#x27;/g, "'").replace(/&quot;/g, '"'));
const lines = editorial.split('\n').map((line) => line.replace(/^### /, '').replace(/\*\*/g, '').trim()).filter(Boolean);
const ignore = new Set(['Título', 'Texto', 'Foto', 'Padecimientos', 'Tratamientos', 'Botones', 'Botón']);
let cursor = 0;
let paragraphs = 0;
let previous = "";
for (const line of lines) {
  if (ignore.has(line) || line.endsWith('.webp') || line.startsWith('Agendar consulta')) continue;
  if (line === previous) continue;
  previous = line;
  const position = visible.indexOf(normalize(line), cursor);
  assert(position !== -1, `Texto editorial ausente o fuera de orden: ${line}`);
  cursor = position + normalize(line).length;
  paragraphs++;
}
assert.equal((html.match(/<h1\b/g) || []).length, 1, 'Debe existir un solo H1');
assert.equal((html.match(/class="clinical-entry"/g) || []).length, 49, '22 padecimientos, 22 tratamientos y 5 entradas de mano');
const ids = [...html.matchAll(/\bid="([^"]+)"/g)].map((m) => m[1]);
assert.equal(new Set(ids).size, ids.length, 'IDs únicos');
const treatmentTriggers = [...html.matchAll(/<button\b[^>]*class="treatment-trigger"[^>]*>/g)].map((match) => match[0]);
assert.equal(treatmentTriggers.length, 22, 'Los 22 tratamientos deben tener un botón de acordeón');
for (const trigger of treatmentTriggers) {
  assert(trigger.includes('aria-expanded="false"'), 'Los tratamientos deben iniciar cerrados');
  const panelId = trigger.match(/aria-controls="([^"]+)"/)[1];
  assert(ids.includes(panelId), `Panel de tratamiento ausente: ${panelId}`);
}
for (const [, anchor] of html.matchAll(/href="#([^"]+)"/g)) assert(ids.includes(anchor), `Anchor sin destino: ${anchor}`);
assert(html.includes('https://wa.me/525551996805'));
assert(html.includes('tel:+525510489471'));
assert(!html.includes('525543307969'), 'No debe quedar el teléfono anterior');
for (const name of ['1-TRAUMATOLOGIA.webp', '2-ORTOPEDIA.webp', '3-ORTOPEDIA-mano.webp', '4-CIRUGIA.webp', '5-IMAGEN-DR-BUENDIA.webp']) assert(existsSync(`public/images/${name}`), `Asset ausente: ${name}`);
const current = readFileSync('components/DemoDrDiegoBuendia.tsx', 'utf8');
const baseline = execFileSync('git', ['show', 'backup/pre-buendia-v4-20261103:components/DemoDrDiegoBuendia.tsx'], { encoding: 'utf8' });
const video = (code) => code.match(/<div className="absolute inset-0 overflow-hidden pointer-events-none"[\s\S]*?<\/div>/)[0];
assert.equal(video(current), video(baseline), 'Video, fuente, reproducción y recorte deben conservarse intactos');
assert.equal(current.slice(current.indexOf('      <dialog')), baseline.slice(baseline.indexOf('      <dialog')), 'Interfaz de privacidad intacta');
const biography = (code) => code.match(/Mi propósito es mejorar tu calidad de vida\.[\s\S]*?<\/ul>/)[0].match(/<p(?:\s[^>]*)?>[\s\S]*?<\/p>|<span>[\s\S]*?<\/span>/g).map((part) => normalize(part.replace(/<[^>]+>/g, '')));
for (const paragraph of biography(baseline)) assert(biography(current).includes(paragraph), `Biografía o credencial modificada: ${paragraph}`);
assert.equal((current.match(/Más de 20 años de ejercicio profesional\./g) || []).length, 1);
console.log(`Verificación V4 correcta: ${paragraphs} bloques editoriales en orden; 49 entradas clínicas completas; H1, anchors, contactos, assets, video, biografía y privacidad comprobados.`);
