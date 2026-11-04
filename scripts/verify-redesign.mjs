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
const profile = html.match(/<section id="perfil-profesional"[\s\S]*?<\/section>/)[0];
const profileText = normalize(profile.replace(/<[^>]+>/g, ' '));
const expectedProfile = [
  'Perfil profesional',
  'Dr. Diego Eduardo Buendia Valdez',
  'Especialista en Ortopedia y Traumatología, con alta especialidad en Cirugía de Columna Vertebral.',
  'Médico Cirujano. Universidad Nacional Autónoma de México (UNAM). Cédula profesional 5492834.',
  'Especialidad en Ortopedia y Traumatología. UNAM, sede Hospital General Dr. Manuel Gea González. Cédula de especialidad 7440114.',
  'Alta especialidad en Cirugía de Columna Vertebral. UNAM.',
  'Certificado por el Consejo Mexicano de Ortopedia y Traumatología, registro 1034217.',
  'Más de 20 años de ejercicio profesional en instituciones públicas y privadas.',
  'Docente, conferencista y autor de investigaciones y capítulos de libros de su especialidad. Miembro de la Asociación Mexicana de Cirujanos de Columna y AO Spine.',
];
assert.equal(profileText, expectedProfile.join(' '), 'Perfil profesional íntegro y en el orden solicitado');
assert.equal((profile.match(/<svg\b/g) || []).length, 4, 'Cuatro iconos para formación, certificación, experiencia y actividad académica');
assert(!profile.includes('<ul'), 'Credenciales en párrafos, sin viñetas');
const signature = (code) => code.match(/src={IMG.logoBlue} alt="Firma Dr. Buendia" className="([^"]+)"/)[1];
assert.equal(signature(current), signature(baseline), 'Logotipo del perfil con el tamaño y la forma originales');
console.log(`Verificación V4 correcta: ${paragraphs} bloques editoriales en orden; 49 entradas clínicas completas; H1, anchors, contactos, assets, video, biografía y privacidad comprobados.`);
