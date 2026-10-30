// Contenido del sitio. Los textos van en { es, en }; números, enlaces y cédulas son iguales en ambos idiomas.

const img = (path) => `${import.meta.env.BASE_URL}img/${path}`

export const doctor = {
  name: 'Dr. Marvin Facio',
  specialty: { es: 'Medicina general y metabólica', en: 'General & metabolic medicine' },
  cedula: '12419385',
  conamege: '25/01/08-221-22815',
  university: 'Universidad Autónoma de Chihuahua',
  photo: img('dr-marvin-facio.jpg'),
}

const address = 'Av. José María Iglesias 4912, Las Granjas, 31100 Chihuahua, Chih.'

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
  maps: `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(address)}`,
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
    ad: { es: img('ads/es/control-metabolico.png'), en: img('ads/en/control-metabolico.png') },
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
    ad: { es: img('ads/es/medicina-general.png'), en: img('ads/en/medicina-general.png') },
    accent: 'bg-teal',
  },
  {
    id: 'verrugas',
    title: { es: 'Eliminación de verrugas', en: 'Wart removal' },
    text: {
      es: 'Con electrocauterio y anestesia local. Atención discreta y confidencial.',
      en: 'Electrocautery with local anesthesia. Discreet and confidential care.',
    },
    ad: { es: img('ads/es/verrugas.png'), en: img('ads/en/verrugas.png') },
    accent: 'bg-magenta',
  },
  {
    id: 'ekg',
    title: { es: 'Electrocardiograma', en: 'Electrocardiogram (ECG)' },
    text: {
      es: 'Resultado inmediato en el consultorio. Útil antes de cirugías, trámites laborales y deporte.',
      en: 'Immediate results in the office. Useful before surgery, for work paperwork and sports.',
    },
    ad: { es: img('ads/es/ekg.png'), en: img('ads/en/ekg.png') },
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
      'Soy médico general originario de la ciudad de Chihuahua, con 6 años de experiencia. Actualmente colaboro con la Dra. Perla Hernández, endocrinóloga, en el Hospital Sierra Alta, y atiendo en mi consultorio particular en Nexcare Consultorios.',
      'Ofrezco consulta general y metabólica para ayudarte a mejorar tu salud metabólica, con estrategias personalizadas, seguimiento cercano y tratamiento médico cuando está indicado. También realizo procedimientos en consultorio como electrocardiograma, retiro de verrugas y retiro de implante anticonceptivo, entre otros.',
    ],
    en: [
      'I am a general practitioner from Chihuahua with 6 years of experience. I currently work alongside Dr. Perla Hernández, endocrinologist, at Hospital Sierra Alta, and see patients at my private practice in Nexcare Consultorios.',
      'I offer general and metabolic consultations to help you improve your metabolic health, with personalized strategies, close follow-up and medical treatment when indicated. I also perform in-office procedures such as electrocardiograms, wart removal and contraceptive implant removal, among others.',
    ],
  },
  highlights: [
    { value: '6', label: { es: 'años de experiencia', en: 'years of experience' } },
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
  businessTitle: {
    es: 'Servicios médicos para empresas | Servicios Médicos SaF',
    en: 'Occupational health for businesses | Servicios Médicos SaF',
  },
  nav: {
    services: { es: 'Servicios', en: 'Services' },
    profile: { es: 'Perfil', en: 'About' },
    hours: { es: 'Horario', en: 'Hours' },
    business: { es: 'Para empresas', en: 'For businesses' },
    home: { es: 'Consultorio', en: 'Clinic' },
    language: { es: 'Idioma', en: 'Language' },
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
      es: 'Toca un servicio para ver su promoción completa.',
      en: 'Tap a service to see its full flyer.',
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
      es: 'Si necesitas una valoración integral, no dudes en contactarnos. Nos encantaría ayudarte a retomar tu salud metabólica.',
      en: "If you need a comprehensive evaluation, don't hesitate to contact us. We'd love to help you get your metabolic health back on track.",
    },
  },
  visit: {
    hoursTitle: { es: 'Horario y médicos', en: 'Hours & doctors' },
    closed: { es: 'Cerrado', en: 'Closed' },
    locationTitle: { es: 'Ubicación', en: 'Location' },
    openMaps: { es: 'Abrir en Google Maps →', en: 'Open in Google Maps →' },
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
}
