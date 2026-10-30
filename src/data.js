// Contenido del sitio. Los textos van en { es, en }; números, enlaces y cédulas son iguales en ambos idiomas.

const img = (path) => `${import.meta.env.BASE_URL}img/${path}`

// Imagen WebP en varios anchos (los genera `npm run images` desde assets-src/)
const responsive = (base, widths) => ({
  src: img(`${base}-${widths.at(-1)}.webp`),
  srcSet: widths.map((w) => `${img(`${base}-${w}.webp`)} ${w}w`).join(', '),
})

const ad = (name) => ({ es: responsive(`ads/es/${name}`, [700, 1080]), en: responsive(`ads/en/${name}`, [700, 1080]) })

// Los años de experiencia se calculan solos a partir del año en que empezó a ejercer
const practiceSince = 2020
const years = String(new Date().getFullYear() - practiceSince)

export const doctor = {
  name: 'Dr. Marvin Facio',
  specialty: { es: 'Medicina general y metabólica', en: 'General & metabolic medicine' },
  cedula: '12419385',
  conamege: '25/01/08-221-22815',
  university: 'Universidad Autónoma de Chihuahua',
  photo: responsive('dr-marvin-facio', [560, 896]),
  yearsOfExperience: years,
}


export const contact = {
  whatsappDisplay: '56 6643 4543',
  receptionDisplay: '614 346 1230',
  cofepris: '2608012002A00405',
}

export const links = {
  whatsapp: 'https://wa.me/525666434543',
  whatsappWith: (text) => `https://wa.me/525666434543?text=${encodeURIComponent(text)}`,
  reception: 'tel:+526143461230',
  instagram: 'https://www.instagram.com/serviciosmedicossaf',
  // Perfil de Empresa de Google: en el celular abre Maps con las reseñas y la ruta
  maps: 'https://maps.google.com/?cid=12067484894196096710',
  reviews: 'https://share.google/BUNNZYr5uLaDcKtHE',
  home: import.meta.env.BASE_URL,
  business: `${import.meta.env.BASE_URL}empresas/`,
}

export const addressLines = [
  'Nexcare Consultorios · Interior E',
  'Av. José María Iglesias 4912',
  'Col. Las Granjas, C.P. 31100',
  'Chihuahua, Chih.',
]

export const services = [
  {
    id: 'metabolico',
    title: { es: 'Control metabólico y de peso', en: 'Metabolic & weight control' },
    text: {
      es: 'Plan personalizado con mediciones en consultorio, alimentación, actividad física y tratamiento médico cuando está indicado.',
      en: 'Personalized plan with in-office measurements, nutrition, physical activity and medical treatment when indicated.',
    },
    tags: {
      es: ['Sobrepeso y obesidad', 'Resistencia a la insulina', 'Diabetes', 'Colesterol y triglicéridos', 'Hígado graso', 'SOP'],
      en: ['Overweight & obesity', 'Insulin resistance', 'Diabetes', 'Cholesterol & triglycerides', 'Fatty liver', 'PCOS'],
    },
    ad: ad('control-metabolico'),
    adAlt: {
      es: 'Volante de la consulta de control metabólico y de peso, precio de apertura $500 MXN. Atiende sobrepeso y obesidad, resistencia a la insulina, diabetes, colesterol y triglicéridos altos, hígado graso y SOPM. Informes y citas: 614 346 1230 y WhatsApp 56 6643 4543.',
      en: 'Flyer for the metabolic and weight management visit, opening price $500 MXN. Covers overweight and obesity, insulin resistance, diabetes, high cholesterol and triglycerides, fatty liver and PMOS. Information and appointments: 614 346 1230 and WhatsApp 56 6643 4543.',
    },
    accent: 'bg-cyan',
  },
  {
    id: 'general',
    title: { es: 'Consulta de medicina general', en: 'General medicine' },
    text: {
      es: 'Infecciones, malestares comunes, control de niño sano y orientación con especialistas.',
      en: 'Infections, common illnesses, well-child checkups and referral to specialists.',
    },
    tags: {
      es: ['Lavado de oídos', 'Suturas', 'Retiro de puntos', 'Inyecciones'],
      en: ['Ear wash', 'Stitches', 'Stitch removal', 'Injections'],
    },
    ad: ad('medicina-general'),
    adAlt: {
      es: 'Volante de la consulta de medicina general con la Dra. Isabel Orozco Gutiérrez y el Dr. Marvin Facio: infecciones, malestares comunes y control de niño sano; lavado de oídos, suturas, retiro de puntos y aplicación de medicamentos. Descuento en estudios de imagen y laboratorio. Informes y citas: 614 346 1230 y WhatsApp 56 6643 4543.',
      en: 'Flyer for the general medical consultation with Dr. Isabel Orozco Gutiérrez and Dr. Marvin Facio: infections, common illnesses and well-child checkups; ear irrigation, sutures, stitch removal and shots. Discount on imaging and lab tests. Information and appointments: 614 346 1230 and WhatsApp 56 6643 4543.',
    },
    accent: 'bg-teal',
  },
  {
    id: 'verrugas',
    title: { es: 'Eliminación de verrugas', en: 'Wart removal' },
    text: {
      es: 'Con electrocauterio y anestesia local. Atención discreta y confidencial.',
      en: 'Electrocautery with local anesthesia. Discreet and confidential care.',
    },
    ad: ad('verrugas'),
    adAlt: {
      es: 'Volante de eliminación de verrugas con electrocauterio y anestesia: hasta 7 verrugas $350, hasta 15 verrugas $600 y de 16 a 30 verrugas $1,100. Informes y citas: 614 346 1230 y WhatsApp 56 6643 4543.',
      en: 'Flyer for wart removal with electrocautery and anesthesia: up to 7 warts $350, up to 15 warts $600 and 16 to 30 warts $1,100. Information and appointments: 614 346 1230 and WhatsApp 56 6643 4543.',
    },
    accent: 'bg-magenta',
  },
  {
    id: 'ekg',
    title: { es: 'Electrocardiograma', en: 'Electrocardiogram (ECG)' },
    text: {
      es: 'Resultado inmediato en el consultorio. Útil antes de cirugías, trámites laborales y deporte.',
      en: 'Immediate results in the office. Useful before surgery, for work paperwork and sports.',
    },
    ad: ad('ekg'),
    adAlt: {
      es: 'Volante del electrocardiograma, precio de apertura $300 MXN, resultado inmediato y previa cita. Informes y citas: 614 346 1230 y WhatsApp 56 6643 4543.',
      en: 'Flyer for the electrocardiogram, opening price $300 MXN, immediate results, by appointment. Information and appointments: 614 346 1230 and WhatsApp 56 6643 4543.',
    },
    accent: 'bg-navy',
  },
]

export const team = {
  marvin: { name: 'Dr. Marvin Facio', cedula: 'Céd. Prof. 12419385' },
  isabel: { name: 'Dra. Isabel Orozco Gutiérrez', cedula: 'Céd. 26635 PROV-SIV' },
  paulina: { name: 'Dra. Paulina Escobedo', cedula: 'Céd. Prof. 15962293' },
}

export const schedule = [
  {
    days: { es: 'Lunes a viernes', en: 'Monday to Friday' },
    shifts: [
      { time: '09:00 – 15:00', doctor: team.isabel },
      { time: '15:00 – 20:00', doctor: team.marvin },
    ],
  },
  {
    days: { es: 'Sábado', en: 'Saturday' },
    shifts: [
      { time: '09:00 – 12:00', doctor: team.paulina },
      { time: '12:00 – 15:00', doctor: team.marvin },
    ],
  },
  { days: { es: 'Domingo', en: 'Sunday' }, closed: true },
]

export const profile = {
  paragraphs: {
    es: [
      `Soy médico general originario de la ciudad de Chihuahua, con ${years} años de experiencia. Actualmente colaboro con la Dra. Perla Hernández, endocrinóloga, en el Hospital Sierra Alta, y atiendo en mi consultorio particular en Nexcare Consultorios.`,
      'Ofrezco consulta general y metabólica para ayudarte a mejorar tu salud metabólica, con estrategias personalizadas, seguimiento cercano y tratamiento médico cuando está indicado. También realizo procedimientos en consultorio como electrocardiograma, retiro de verrugas y retiro de implante anticonceptivo, entre otros.',
    ],
    en: [
      `I am a general practitioner from Chihuahua with ${years} years of experience. I currently work alongside Dr. Perla Hernández, endocrinologist, at Hospital Sierra Alta, and see patients at my private practice in Nexcare Consultorios.`,
      'I offer general and metabolic consultations to help you improve your metabolic health, with personalized strategies, close follow-up and medical treatment when indicated. I also perform in-office procedures such as electrocardiograms, wart removal and contraceptive implant removal, among others.',
    ],
  },
  highlights: [
    { value: years, label: { es: 'años de experiencia', en: 'years of experience' } },
    { value: '+', label: { es: 'Colaboración con endocrinología · Hospital Sierra Alta', en: 'Works with endocrinology · Hospital Sierra Alta' } },
    { value: '✓', label: { es: 'Seguimiento personalizado', en: 'Personalized follow-up' } },
  ],
}

// Textos de la interfaz
export const ui = {
  title: {
    es: 'Dr. Marvin Facio · Medicina general y metabólica | Servicios Médicos SaF',
    en: 'Dr. Marvin Facio · General & metabolic medicine | Servicios Médicos SaF',
  },
  // Descripción para buscadores; el texto en español debe coincidir con index.html
  description: {
    es: 'Consultorio del Dr. Marvin Facio en Chihuahua: medicina general y metabólica, eliminación de verrugas y electrocardiograma. Agenda tu cita por WhatsApp.',
    en: "Dr. Marvin Facio's clinic in Chihuahua: general and metabolic medicine, wart removal and electrocardiograms. English-speaking doctors. Book your appointment on WhatsApp.",
  },
  businessTitle: {
    es: 'Servicios médicos para empresas | Servicios Médicos SaF',
    en: 'Occupational health for businesses | Servicios Médicos SaF',
  },
  // El texto en español debe coincidir con empresas/index.html
  businessDescription: {
    es: 'Servicios Médicos SaF para empresas en Chihuahua: certificados médicos, exámenes de aptitud laboral y atención para tu personal.',
    en: 'Servicios Médicos SaF for businesses in Chihuahua: medical certificates, fitness-for-work exams and care for your staff.',
  },
  nav: {
    services: { es: 'Servicios', en: 'Services' },
    profile: { es: 'Perfil', en: 'About' },
    hours: { es: 'Horario', en: 'Hours' },
    business: { es: 'Para empresas', en: 'For businesses' },
    home: { es: 'Consultorio', en: 'Clinic' },
    language: { es: 'Idioma', en: 'Language' },
    sections: { es: 'Secciones', en: 'Sections' },
  },
  hero: {
    eyebrow: { es: 'Medicina general y metabólica · Chihuahua', en: 'General & metabolic medicine · Chihuahua' },
    pitch: {
      es: 'Cuida tu salud metabólica con un plan personalizado y atención cercana.',
      en: 'Take care of your metabolic health with a personalized plan and caring attention.',
    },
    whatsapp: { es: 'Agenda por WhatsApp', en: 'Book on WhatsApp' },
    call: { es: 'Llamar a recepción', en: 'Call reception' },
    directions: { es: 'Cómo llegar', en: 'Directions' },
    instagram: { es: 'Instagram', en: 'Instagram' },
    experience: { es: 'años de experiencia', en: 'years of experience' },
    english: { es: 'We speak English', en: 'English-speaking doctors' },
    photoAlt: { es: 'Dr. Marvin Facio con bata y estetoscopio', en: 'Dr. Marvin Facio in a white coat with a stethoscope' },
  },
  services: {
    title: { es: 'Servicios', en: 'Services' },
    subtitle: {
      es: 'Toca o haz clic en un servicio para ver su volante completo.',
      en: 'Tap or click a service to see its full flyer.',
    },
    viewAd: { es: 'Ver promoción', en: 'View flyer' },
    ask: { es: 'Pregunta por este servicio', en: 'Ask about this service' },
    askText: { es: 'Hola, quiero información sobre: ', en: 'Hi, I would like information about: ' },
    close: { es: 'Cerrar', en: 'Close' },
    more: {
      es: '…y más procedimientos, como retiro de implante anticonceptivo. Pregunta por WhatsApp.',
      en: '…and more procedures, such as contraceptive implant removal. Ask us on WhatsApp.',
    },
  },
  profile: {
    eyebrow: { es: 'Conóceme', en: 'About me' },
    title: { es: 'Atención médica con enfoque metabólico', en: 'Medical care with a metabolic focus' },
    cta: {
      es: 'Si necesitas una valoración integral, no dudes en contactarnos. Nos encantaría ayudarte a cuidar tu salud metabólica.',
      en: "If you need a comprehensive evaluation, don't hesitate to contact us. We'd love to help you take care of your metabolic health.",
    },
  },
  visit: {
    hoursTitle: { es: 'Horario y médicos', en: 'Hours & doctors' },
    closed: { es: 'Cerrado', en: 'Closed' },
    locationTitle: { es: 'Ubicación', en: 'Location' },
    openMaps: { es: 'Abrir en Google Maps →', en: 'Open in Google Maps →' },
    reviews: { es: 'Ver reseñas en Google', en: 'See Google reviews' },
    reception: { es: 'Recepción y agenda', en: 'Reception & appointments' },
    payments: { es: 'Aceptamos todos los métodos de pago', en: 'All payment methods accepted' },
  },
  footer: {
    by: { es: 'Un servicio de', en: 'A service by' },
    cofepris: { es: 'Aviso de publicidad COFEPRIS', en: 'COFEPRIS advertising notice' },
  },
  business: {
    eyebrow: { es: 'Servicios Médicos SaF · Empresas', en: 'Servicios Médicos SaF · Businesses' },
    title: { es: 'Servicios médicos para empresas', en: 'Occupational health for businesses' },
    soon: { es: 'Próximamente', en: 'Coming soon' },
    text: {
      es: 'Estamos preparando esta sección con certificados médicos, exámenes de aptitud laboral y atención para tu personal. Mientras tanto, escríbenos y con gusto te enviamos una propuesta.',
      en: 'We are preparing this section with medical certificates, fitness-for-work exams and care for your staff. In the meantime, message us and we will gladly send you a proposal.',
    },
    cta: { es: 'Quiero información para mi empresa', en: 'I want information for my business' },
    ctaText: {
      es: 'Hola, quiero información de servicios médicos para mi empresa.',
      en: 'Hi, I would like information about medical services for my business.',
    },
    back: { es: '← Volver al consultorio', en: '← Back to the clinic' },
  },
  notFound: {
    pageTitle: {
      es: 'Página no encontrada | Servicios Médicos SaF',
      en: 'Page not found | Servicios Médicos SaF',
    },
    code: { es: 'Error 404', en: 'Error 404' },
    title: { es: 'Página no encontrada', en: 'Page not found' },
    text: {
      es: 'La página que buscas no existe o cambió de dirección. Puedes volver al inicio o escribirnos por WhatsApp.',
      en: "The page you are looking for doesn't exist or has moved. You can go back home or message us on WhatsApp.",
    },
    home: { es: 'Volver al inicio', en: 'Back to home' },
  },
}
