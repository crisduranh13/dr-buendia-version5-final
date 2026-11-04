export type ClinicalEntry = { slug: string; title: string; description: string };
export type CareArea = {
  slug: string;
  title: string;
  description: string;
  image: string;
  alt: string;
  conditions: ClinicalEntry[];
  treatments: ClinicalEntry[];
  hand?: { slug: string; title: string; description: string; image: string; alt: string; entries: ClinicalEntry[] };
};

// Transcripción íntegra de la fuente editorial V4 (27 de octubre de 2026).
export const careIntroduction = "Atención de lesiones y enfermedades de huesos, articulaciones, músculos, tendones y columna vertebral. La elección del tratamiento depende del diagnóstico y de las condiciones del paciente. Puede incluir medidas no quirúrgicas o cirugía.";

export const careAreas: CareArea[] = [
  {
    "slug": "traumatologia",
    "title": "Traumatología",
    "description": "Atención de lesiones por caídas, accidentes y actividad deportiva.",
    "image": "/images/1-TRAUMATOLOGIA.webp",
    "alt": "Atención de una lesión de rodilla en un entorno hospitalario",
    "conditions": [
      {
        "slug": "fracturas",
        "title": "Fracturas",
        "description": "Roturas de un hueso por caídas, golpes o accidentes, que pueden causar dolor, hinchazón y dificultad para mover la zona."
      },
      {
        "slug": "fracturas-de-cadera-y-por-fragilidad",
        "title": "Fracturas de cadera y por fragilidad",
        "description": "Fracturas por caídas leves en huesos debilitados, con frecuencia por osteoporosis; pueden afectar cadera, muñeca, hombro o columna."
      },
      {
        "slug": "esguinces",
        "title": "Esguinces",
        "description": "Lesiones de los ligamentos que estabilizan una articulación, generalmente por una torcedura, que pueden causar dolor, inflamación e inestabilidad."
      },
      {
        "slug": "luxaciones",
        "title": "Luxaciones",
        "description": "Pérdida de la posición normal de los huesos de una articulación, que puede provocar dolor intenso y dificultad para moverla."
      },
      {
        "slug": "lesiones-de-ligamentos-y-meniscos",
        "title": "Lesiones de ligamentos y meniscos",
        "description": "Daño en las estructuras que estabilizan y amortiguan la rodilla, que puede causar dolor, bloqueo o sensación de inestabilidad."
      },
      {
        "slug": "lesiones-de-tendones",
        "title": "Lesiones de tendones",
        "description": "Lesiones de los tejidos que unen el músculo al hueso, que pueden producir dolor, debilidad y limitación del movimiento."
      },
      {
        "slug": "lesiones-deportivas-y-por-sobrecarga",
        "title": "Lesiones deportivas y por sobrecarga",
        "description": "Lesiones por golpes, giros, esfuerzos repetidos o sobrecarga durante la actividad física, incluidas fracturas por estrés y desgarros musculares."
      },
      {
        "slug": "secuelas-de-fracturas",
        "title": "Secuelas de fracturas",
        "description": "Fracturas que no han unido adecuadamente o consolidaron en mala posición, con posibles molestias, deformidad o limitación para moverse."
      }
    ],
    "treatments": [
      {
        "slug": "tratamiento-conservador",
        "title": "Tratamiento conservador",
        "description": "Inmovilización con yeso, férula o bota, medicamentos y rehabilitación, según la lesión."
      },
      {
        "slug": "fijacion-de-fracturas",
        "title": "Fijación de fracturas",
        "description": "Alineación y estabilización del hueso con placas, tornillos, clavos o fijadores externos, según la fractura."
      },
      {
        "slug": "reduccion-de-luxaciones",
        "title": "Reducción de luxaciones",
        "description": "Colocación de la articulación en su posición mediante maniobras médicas. Las luxaciones recurrentes pueden requerir estabilización quirúrgica."
      },
      {
        "slug": "cirugia-de-ligamentos",
        "title": "Cirugía de ligamentos",
        "description": "Reparación o reconstrucción de ligamentos, como el cruzado anterior de la rodilla o los del tobillo."
      },
      {
        "slug": "cirugia-de-meniscos",
        "title": "Cirugía de meniscos",
        "description": "Reparación mediante sutura o retiro parcial del tejido lesionado por artroscopia, según el caso."
      },
      {
        "slug": "reparacion-de-tendones",
        "title": "Reparación de tendones",
        "description": "Reparación del manguito rotador, tendón de Aquiles, bíceps o tendones de la rodilla, según la lesión."
      },
      {
        "slug": "correccion-de-secuelas",
        "title": "Corrección de secuelas",
        "description": "Corrección de la alineación y nueva fijación; en algunos casos se utiliza injerto óseo."
      }
    ]
  },
  {
    "slug": "ortopedia",
    "title": "Ortopedia",
    "description": "Atención del dolor, desgaste, rigidez y limitación del movimiento en rodilla, cadera, hombro, codo, mano y muñeca.",
    "image": "/images/2-ORTOPEDIA.webp",
    "alt": "Valoración ortopédica de la rodilla en consulta",
    "conditions": [
      {
        "slug": "artrosis",
        "title": "Artrosis",
        "description": "Desgaste del cartílago de las articulaciones que puede causar dolor, rigidez y dificultad para moverse, especialmente en rodilla, cadera o manos."
      },
      {
        "slug": "lesiones-del-cartilago",
        "title": "Lesiones del cartílago",
        "description": "Daño localizado en el tejido que recubre los extremos de los huesos, que puede producir dolor, inflamación o bloqueo articular."
      },
      {
        "slug": "tendinopatias",
        "title": "Tendinopatías",
        "description": "Alteraciones de los tendones por sobrecarga, lesión o desgaste, que pueden causar dolor y limitar el movimiento de la zona afectada."
      },
      {
        "slug": "bursitis",
        "title": "Bursitis",
        "description": "Inflamación de las bolsas que reducen el roce entre tejidos alrededor de las articulaciones, que puede causar dolor y sensibilidad."
      },
      {
        "slug": "deformidades-de-huesos-y-articulaciones",
        "title": "Deformidades de huesos y articulaciones",
        "description": "Cambios en la alineación de huesos o articulaciones, congénitos o adquiridos, que pueden afectar el movimiento y la distribución de cargas."
      },
      {
        "slug": "osteonecrosis",
        "title": "Osteonecrosis",
        "description": "Daño de una parte del hueso por disminución de su riego sanguíneo, que puede afectar la articulación y provocar dolor."
      },
      {
        "slug": "infecciones-de-hueso-y-articulacion",
        "title": "Infecciones de hueso y articulación",
        "description": "Infecciones que afectan el hueso, las articulaciones o los implantes y que requieren atención oportuna para limitar el daño de los tejidos."
      }
    ],
    "treatments": [
      {
        "slug": "artroscopia",
        "title": "Artroscopia",
        "description": "Uso de una cámara e instrumentos por pequeñas incisiones para tratar lesiones articulares. Incluye reparación o estimulación del cartílago en casos seleccionados."
      },
      {
        "slug": "reemplazo-articular",
        "title": "Reemplazo articular",
        "description": "Sustitución de superficies articulares por una prótesis de rodilla, cadera u hombro. Incluye cirugía de revisión de prótesis previas, según el caso."
      },
      {
        "slug": "osteotomia",
        "title": "Osteotomía",
        "description": "Corte controlado del hueso para modificar su alineación y la distribución de cargas."
      },
      {
        "slug": "limpieza-quirurgica",
        "title": "Limpieza quirúrgica",
        "description": "Retiro del tejido infectado y tratamiento con antibióticos. Puede requerir retiro o recambio de implantes."
      },
      {
        "slug": "cirugia-asistida",
        "title": "Cirugía asistida",
        "description": "Navegación o asistencia robótica para planear y colocar implantes en procedimientos seleccionados."
      },
      {
        "slug": "infiltraciones-y-bloqueos",
        "title": "Infiltraciones y bloqueos",
        "description": "Aplicación de medicamento en zonas específicas como parte del manejo del dolor y la inflamación."
      },
      {
        "slug": "medicamentos-y-rehabilitacion",
        "title": "Medicamentos y rehabilitación",
        "description": "Manejo del dolor y la inflamación, coordinado con fisioterapia y ejercicio terapéutico."
      }
    ],
    "hand": {
      "slug": "mano-y-muneca",
      "title": "Mano y muñeca",
      "description": "Consulta por dolor, hormigueo, adormecimiento o pérdida de fuerza en la mano y la muñeca.",
      "image": "/images/3-ORTOPEDIA-mano.webp",
      "alt": "Exploración de la mano y la muñeca durante una consulta",
      "entries": [
        {
          "slug": "sindrome-del-tunel-del-carpo",
          "title": "Síndrome del túnel del carpo",
          "description": "Compresión del nervio mediano en la muñeca, que puede causar hormigueo, adormecimiento y pérdida de fuerza en la mano.\nPuede tratarse con férula, medicamentos, infiltración o liberación quirúrgica, según el caso."
        },
        {
          "slug": "lesiones-de-tendones-y-ligamentos",
          "title": "Lesiones de tendones y ligamentos",
          "description": "Daño en los tejidos que mueven y estabilizan la mano y la muñeca, que puede causar dolor o limitar su función.\nManejo con inmovilización y rehabilitación, o reparación quirúrgica según el tipo de lesión."
        },
        {
          "slug": "de-quervain-y-dedo-en-resorte",
          "title": "De Quervain y dedo en resorte",
          "description": "De Quervain. Inflamación de la vaina de los tendones del pulgar en la muñeca, que puede causar dolor al moverlo o sujetar objetos.\nDedo en resorte. Alteración de la vaina de los tendones flexores que puede hacer que un dedo se atore, duela o se bloquee al moverse.\nSu manejo puede incluir férula, medicamentos, infiltración o liberación quirúrgica."
        },
        {
          "slug": "fracturas-de-mano-y-muneca",
          "title": "Fracturas de mano y muñeca",
          "description": "Roturas de los huesos de la muñeca, la mano o los dedos, que pueden causar dolor, hinchazón y dificultad para moverlos.\nInmovilización o fijación quirúrgica, según la estabilidad y el desplazamiento de la fractura."
        },
        {
          "slug": "quistes-sinoviales",
          "title": "Quistes sinoviales",
          "description": "Bultos benignos llenos de líquido que pueden aparecer en la muñeca y causar molestias o limitar el movimiento.\nCuando requieren tratamiento, puede indicarse aspiración o retiro quirúrgico."
        }
      ]
    }
  },
  {
    "slug": "cirugia-de-columna",
    "title": "Cirugía de Columna",
    "description": "Diagnóstico y tratamiento del dolor de espalda o cuello, con o sin molestias en brazos o piernas, hormigueo o pérdida de fuerza.",
    "image": "/images/4-CIRUGIA.webp",
    "alt": "Atención especializada de la columna vertebral",
    "conditions": [
      {
        "slug": "hernia-de-disco",
        "title": "Hernia de disco",
        "description": "Desplazamiento de parte del disco intervertebral que puede comprimir un nervio y provocar dolor, hormigueo, adormecimiento o pérdida de fuerza."
      },
      {
        "slug": "enfermedad-degenerativa-del-disco-y-dolor-lumbar-cronico",
        "title": "Enfermedad degenerativa del disco y dolor lumbar crónico",
        "description": "Desgaste de los discos y las articulaciones de la columna, que puede acompañarse de dolor persistente, rigidez y limitación para las actividades."
      },
      {
        "slug": "estenosis-del-canal-lumbar-o-cervical",
        "title": "Estenosis del canal lumbar o cervical",
        "description": "Estrechamiento del espacio por donde pasan los nervios o la médula espinal, que puede causar dolor, debilidad o dificultad para caminar."
      },
      {
        "slug": "espondilolistesis",
        "title": "Espondilolistesis",
        "description": "Desplazamiento de una vértebra sobre otra, que puede provocar dolor de espalda y molestias en las piernas cuando existe compresión nerviosa."
      },
      {
        "slug": "escoliosis-cifosis-y-otras-deformidades",
        "title": "Escoliosis, cifosis y otras deformidades",
        "description": "Alteraciones de la curvatura de la columna que pueden asociarse con dolor, desequilibrio postural o dificultad para realizar algunas actividades."
      },
      {
        "slug": "fracturas-y-lesiones-vertebrales",
        "title": "Fracturas y lesiones vertebrales",
        "description": "Lesiones de las vértebras por accidentes o fragilidad del hueso, que pueden causar dolor y, en algunos casos, afectar los nervios."
      },
      {
        "slug": "infecciones-y-tumores-de-columna",
        "title": "Infecciones y tumores de columna",
        "description": "Procesos infecciosos o lesiones tumorales de la columna que requieren diagnóstico y atención coordinada con otras especialidades, según cada caso."
      }
    ],
    "treatments": [
      {
        "slug": "tratamiento-conservador",
        "title": "Tratamiento conservador",
        "description": "Rehabilitación, medicamentos y bloqueos o infiltraciones guiadas por imagen, según el caso."
      },
      {
        "slug": "cirugia-de-minima-invasion",
        "title": "Cirugía de mínima invasión",
        "description": "Accesos pequeños, con microscopio, endoscopio o navegación, según el caso."
      },
      {
        "slug": "microdiscectomia",
        "title": "Microdiscectomía",
        "description": "Retiro con microscopio del fragmento de disco que comprime una raíz nerviosa."
      },
      {
        "slug": "descompresion",
        "title": "Descompresión",
        "description": "Liberación de nervios o médula espinal comprimidos por hueso, ligamento o disco."
      },
      {
        "slug": "fusion-vertebral",
        "title": "Fusión vertebral",
        "description": "Unión de vértebras con injerto óseo e implantes para estabilizar la columna."
      },
      {
        "slug": "cirugia-de-escoliosis-y-cifosis",
        "title": "Cirugía de escoliosis y cifosis",
        "description": "Corrección y estabilización de la curvatura, con planeación individual del procedimiento."
      },
      {
        "slug": "fijacion-de-fracturas",
        "title": "Fijación de fracturas",
        "description": "Fijación de fracturas inestables con tornillos y barras."
      },
      {
        "slug": "vertebroplastia-y-cifoplastia",
        "title": "Vertebroplastia y cifoplastia",
        "description": "Procedimientos de cementación vertebral en casos seleccionados de fracturas por osteoporosis."
      }
    ]
  }
];
