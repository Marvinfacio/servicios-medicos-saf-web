// Artículos del blog. Cada artículo necesita además su página en blog/<slug>/index.html
// (copia la de un artículo existente y cambia el título, la descripción y data-post).
//
// El cuerpo es una lista de bloques que React dibuja tal cual (sin HTML incrustado):
//   { h2: 'Título' }
//   { p: 'Párrafo' }
//   { list: ['Elemento', …] }
//   { compare: { head: ['', 'A', 'B'], rows: [['Fila', 'a', 'b'], …] } }
//   { callout: { tone: 'warning' | 'info', title: 'Título', items: ['…'] } }

export const posts = [
  {
    slug: 'resfriado-o-faringoamigdalitis',
    date: '2026-11-07',
    readingMinutes: 5,
    category: { es: 'Infecciones', en: 'Infections' },
    // Servicio de data.js cuyo volante se muestra al final del artículo
    relatedService: 'general',
    title: {
      es: '¿Resfriado o faringoamigdalitis? Cómo saber la diferencia',
      en: 'Common cold or pharyngotonsillitis? How to tell them apart',
    },
    description: {
      es: 'El dolor de garganta casi siempre es por un virus. Te explicamos cómo distinguir un resfriado de una faringoamigdalitis, por qué no conviene tomar antibióticos por tu cuenta y cuándo acudir a consulta.',
      en: "A sore throat is usually caused by a virus. Learn how to tell a cold from pharyngotonsillitis, why you shouldn't take antibiotics on your own and when to see a doctor.",
    },
    body: {
      es: [
        {
          p: 'El dolor de garganta es uno de los motivos de consulta más comunes, sobre todo en temporada de frío. Muchas veces se trata de un resfriado que se quita solo; otras, de una faringoamigdalitis (inflamación de la garganta y las amígdalas) que conviene revisar. Saber la diferencia te ayuda a cuidarte mejor y a evitar medicamentos que no necesitas.',
        },
        { h2: '¿Qué es cada uno?' },
        {
          p: 'El resfriado común es una infección viral de la nariz y la garganta. Suele empezar con estornudos, escurrimiento nasal, congestión y una molestia leve de garganta, y mejora por sí solo en 7 a 10 días.',
        },
        {
          p: 'La faringoamigdalitis es la inflamación de la faringe y las amígdalas. La mayoría de las veces también la causa un virus, pero en una parte de los casos la provoca una bacteria: el estreptococo del grupo A. Es más frecuente en niños de 5 a 15 años, aunque también se presenta en adultos.',
        },
        { h2: 'Diferencias principales' },
        {
          compare: {
            head: ['', 'Resfriado', 'Faringoamigdalitis por estreptococo (probable)'],
            rows: [
              ['Inicio', 'Gradual', 'Rápido, en pocas horas'],
              ['Tos y escurrimiento nasal', 'Frecuentes', 'Poco comunes'],
              ['Fiebre', 'Ausente o baja', 'Frecuente, a menudo de 38 °C o más'],
              ['Dolor de garganta', 'Leve a moderado', 'Intenso, duele al tragar'],
              ['Amígdalas', 'Algo enrojecidas', 'Inflamadas, a veces con placas blancas'],
              ['Ganglios del cuello', 'Normales', 'Inflamados y dolorosos'],
            ],
          },
        },
        {
          p: 'Estas pistas orientan, pero no son definitivas: unas amígdalas con placas blancas también pueden deberse a un virus. Por eso el diagnóstico se confirma con la exploración médica y, cuando hace falta, con una prueba rápida o un cultivo de exudado faríngeo.',
        },
        { h2: '¿Por qué no tomar antibióticos por mi cuenta?' },
        {
          list: [
            'Los antibióticos no sirven contra los virus, que causan todos los resfriados y la mayoría de los dolores de garganta.',
            'Tomarlos sin necesidad favorece la resistencia bacteriana: cuando de verdad los necesites, pueden ya no funcionar.',
            'Pueden causar efectos adversos como diarrea, malestar estomacal o reacciones alérgicas.',
            'En México los antibióticos solo se venden con receta médica, justamente para cuidar su uso.',
          ],
        },
        {
          p: 'Cuando la causa es bacteriana, el médico indica el tratamiento adecuado y cuánto tiempo debe durar. Completarlo como se indicó ayuda a evitar complicaciones.',
        },
        { h2: 'Cuidados en casa' },
        {
          list: [
            'Descansa y toma líquidos con frecuencia: agua, caldos o tés tibios.',
            'Haz gárgaras con agua tibia con sal para aliviar la garganta (adultos y niños que ya saben hacerlas).',
            'Para el dolor o la fiebre, pregunta a tu médico qué analgésico es seguro para ti. A niños y adolescentes no se les debe dar ácido acetilsalicílico (aspirina).',
            'Lávate las manos seguido y cúbrete al toser o estornudar para no contagiar a otros.',
            'Evita el humo de tabaco, que irrita aún más la garganta.',
          ],
        },
        {
          callout: {
            tone: 'warning',
            title: 'Acude a urgencias si hay',
            items: [
              'Dificultad para respirar.',
              'Dificultad para tragar incluso la saliva, o babeo (sobre todo en niños).',
              'Dificultad para abrir la boca o inflamación de un solo lado de la garganta.',
              'Rigidez de cuello o somnolencia excesiva.',
              'Señales de deshidratación: orina muy escasa, boca seca o mucho decaimiento.',
            ],
          },
        },
        {
          callout: {
            tone: 'info',
            title: 'Agenda una consulta si',
            items: [
              'La fiebre dura más de 3 días o llega a 39 °C o más.',
              'El dolor de garganta es intenso y no tienes tos ni escurrimiento nasal.',
              'Ves placas blancas en las amígdalas o tienes los ganglios del cuello inflamados.',
              'Aparece un sarpullido áspero en la piel.',
              'Los síntomas no mejoran en una semana o empeoran después de haber mejorado.',
              'Se trata de un niño pequeño, una persona mayor o alguien con una enfermedad crónica.',
            ],
          },
        },
        {
          p: 'En consulta revisamos tu garganta, valoramos si la causa es viral o bacteriana y te indicamos el tratamiento médico cuando está indicado.',
        },
      ],
      en: [
        {
          p: "A sore throat is one of the most common reasons to see a doctor, especially in cold season. Often it's a cold that goes away on its own; other times it's pharyngotonsillitis (inflammation of the throat and tonsils) that is worth having checked. Knowing the difference helps you take better care of yourself and avoid medicines you don't need.",
        },
        { h2: 'What is each one?' },
        {
          p: 'The common cold is a viral infection of the nose and throat. It usually starts with sneezing, a runny nose, congestion and a mild sore throat, and gets better on its own within 7 to 10 days.',
        },
        {
          p: 'Pharyngotonsillitis is inflammation of the pharynx and tonsils. Most of the time it is also caused by a virus, but in some cases it is caused by a bacterium: group A streptococcus ("strep throat"). It is most common in children aged 5 to 15, but adults can get it too.',
        },
        { h2: 'Key differences' },
        {
          compare: {
            head: ['', 'Common cold', 'Strep pharyngotonsillitis (likely)'],
            rows: [
              ['Onset', 'Gradual', 'Fast, within a few hours'],
              ['Cough and runny nose', 'Common', 'Uncommon'],
              ['Fever', 'None or low', 'Common, often 38 °C (100.4 °F) or higher'],
              ['Sore throat', 'Mild to moderate', 'Severe, painful to swallow'],
              ['Tonsils', 'Slightly red', 'Swollen, sometimes with white patches'],
              ['Neck lymph nodes', 'Normal', 'Swollen and tender'],
            ],
          },
        },
        {
          p: 'These clues help, but they are not definitive: tonsils with white patches can also be caused by a virus. That is why the diagnosis is confirmed with a medical exam and, when needed, a rapid test or a throat culture.',
        },
        { h2: "Why shouldn't I take antibiotics on my own?" },
        {
          list: [
            "Antibiotics don't work against viruses, which cause every cold and most sore throats.",
            "Taking them when they aren't needed promotes bacterial resistance: when you really need them, they may no longer work.",
            'They can cause side effects such as diarrhea, an upset stomach or allergic reactions.',
            'In Mexico, antibiotics are only sold with a prescription, precisely to protect how they are used.',
          ],
        },
        {
          p: 'When the cause is bacterial, the doctor prescribes the right treatment and how long it should last. Finishing it as directed helps prevent complications.',
        },
        { h2: 'Home care' },
        {
          list: [
            'Rest and drink fluids often: water, broth or warm tea.',
            'Gargle with warm salt water to soothe your throat (adults and children who can already gargle).',
            'For pain or fever, ask your doctor which pain reliever is safe for you. Children and teenagers should not be given aspirin.',
            'Wash your hands often and cover your mouth when you cough or sneeze to avoid infecting others.',
            'Avoid tobacco smoke, which irritates the throat even more.',
          ],
        },
        {
          callout: {
            tone: 'warning',
            title: 'Go to the emergency room if there is',
            items: [
              'Difficulty breathing.',
              'Difficulty swallowing even saliva, or drooling (especially in children).',
              'Trouble opening the mouth, or swelling on only one side of the throat.',
              'A stiff neck or unusual drowsiness.',
              'Signs of dehydration: very little urine, a dry mouth or extreme tiredness.',
            ],
          },
        },
        {
          callout: {
            tone: 'info',
            title: 'Book a visit if',
            items: [
              'The fever lasts more than 3 days or reaches 39 °C (102.2 °F) or higher.',
              "Your sore throat is severe and you don't have a cough or runny nose.",
              'You see white patches on your tonsils or your neck glands are swollen.',
              'A rough, sandpaper-like rash appears on your skin.',
              "Symptoms don't improve within a week, or get worse after getting better.",
              'The patient is a young child, an older adult or someone with a chronic illness.',
            ],
          },
        },
        {
          p: 'At your visit we examine your throat, assess whether the cause is viral or bacterial and prescribe medical treatment when indicated.',
        },
      ],
    },
    references: [
      { label: 'CDC. Sore Throat Basics.', url: 'https://www.cdc.gov/sore-throat/about/index.html' },
      { label: 'CDC. About Strep Throat.', url: 'https://www.cdc.gov/group-a-strep/about/strep-throat.html' },
      {
        label:
          'Shulman ST, et al. Clinical Practice Guideline for the Diagnosis and Management of Group A Streptococcal Pharyngitis: 2012 Update by the Infectious Diseases Society of America. Clin Infect Dis. 2012;55(10):e86–e102.',
        url: 'https://doi.org/10.1093/cid/cis629',
      },
      { label: 'NICE. Sore throat (acute): antimicrobial prescribing (NG84).', url: 'https://www.nice.org.uk/guidance/ng84' },
      {
        label: 'OMS / WHO. Antimicrobial resistance.',
        url: 'https://www.who.int/news-room/fact-sheets/detail/antimicrobial-resistance',
      },
    ],
  },
]

export const postUrl = (post) => `${import.meta.env.BASE_URL}blog/${post.slug}/`

// Los más recientes primero
export const latestPosts = [...posts].sort((a, b) => b.date.localeCompare(a.date))
