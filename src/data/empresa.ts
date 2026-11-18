// Datos de la empresa que aparecen en toda la página.
// COMPLETAR: el correo es de ejemplo, reemplazarlo antes de publicar.
export const empresa = {
  nombre: 'Nexora Solutions',
  bajada: 'Next generation technology',
  ciudad: 'Paraguay',
  email: 'contacto@nexora.com.py',
  // WhatsApp de la empresa: número internacional sin "+" ni espacios (ej. '595981123456').
  // Vacío = la página no muestra el botón de WhatsApp.
  whatsapp: '595981000000', // FALSO: reemplazar por el de la empresa
  whatsappVisible: '+595 981 000 000',
};

export const equipo: { nombre: string; rol?: string }[] = [
  { nombre: 'Cristhian Marecos', rol: 'Ingeniero, fundador' },
  { nombre: 'Roberto Amarilla', rol: 'Analista de sistemas, cofundador' },
];
