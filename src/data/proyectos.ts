// Para sumar un proyecto, agregar un objeto a la lista. El primero se muestra destacado.
// La imagen va en `public/proyectos/` y se referencia desde la raíz (`/proyectos/archivo.png`).
export type Proyecto = {
  nombre: string;
  cliente: string;
  anio: string;
  estado: string;
  resumen: string;
  queHace: string[];
  tecnologias: string[];
  imagen?: { src: string; alt: string };
  enlace?: { texto: string; url: string };
};

export const proyectos: Proyecto[] = [
  {
    nombre: 'Sistema municipal',
    cliente: 'Municipalidad de Pilar, Ñeembucú',
    anio: '2026',
    estado: 'En implementación',
    resumen:
      'Un portal donde el ciudadano hace sus trámites, paga sus impuestos y habla con la municipalidad sin ir a la ventanilla. Del otro lado, los funcionarios atienden expedientes, cobran y ven reportes en el mismo sistema.',
    queHace: [
      'Trámites en línea con seguimiento del expediente',
      'Pago de impuestos y tasas con pasarela de pago',
      'Consultas por la web y por WhatsApp, con adjuntos',
      'Asistente con inteligencia artificial para el ciudadano',
      'Caja, recaudación y reportes para la municipalidad',
      'Preparado para varios municipios con datos separados',
    ],
    tecnologias: ['React', 'NestJS', 'PostgreSQL', 'Redis', 'Claude'],
    imagen: {
      src: '/proyectos/sistema-municipal.jpg',
      alt: 'Pantalla de inicio del portal del ciudadano del sistema municipal de Pilar',
    },
    enlace: { texto: 'Probar la demo', url: 'https://pilar-demo.pages.dev' },
  },
];
