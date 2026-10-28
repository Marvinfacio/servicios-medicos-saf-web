// Datos del consultorio: cambia aquí la información sin tocar los componentes.

export const doctor = {
  name: 'Dr. Marvin Facio',
  specialty: 'Medicina general y metabolismo',
  cedula: '12419385',
  conamege: '25/01/08-221-22815',
}

const address = 'Av. José María Iglesias 4912, Las Granjas, 31100 Chihuahua, Chih.'

export const links = {
  whatsapp: 'https://wa.me/525666434543',
  instagram: 'https://www.instagram.com/serviciosmedicossaf',
  maps: `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(address)}`,
}

export const addressLines = [
  'Av. José María Iglesias 4912',
  'Col. Las Granjas, C.P. 31100',
  'Chihuahua, Chih.',
]

export const services = [
  {
    title: 'Consulta médica general',
    text: 'Valoración, diagnóstico y tratamiento de enfermedades comunes para toda la familia.',
    accent: 'bg-teal',
  },
  {
    title: 'Consulta de metabolismo',
    tags: ['Resistencia a la insulina', 'Sobrepeso y obesidad', 'Diabetes', 'Colesterol y triglicéridos'],
    accent: 'bg-cyan',
  },
  {
    title: 'Eliminación de verrugas',
    text: 'Procedimiento en consultorio, rápido y con indicaciones de cuidado.',
    accent: 'bg-magenta',
  },
  {
    title: 'Electrocardiograma',
    text: 'Estudio del corazón realizado en el mismo consultorio.',
    accent: 'bg-navy',
  },
]

export const hours = [
  { days: 'Lunes a viernes', time: '15:00 – 20:00 h' },
  { days: 'Sábado', time: '12:00 – 15:00 h' },
  { days: 'Domingo', time: 'Cerrado' },
]
