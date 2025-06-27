// Configuración centralizada de emails por servicio
export const EMAIL_DESTINATIONS = {
  // Servicios principales
  inluxury: "gestor.citas13@insalud.pe",
  enzimas: "Info@inaesthetics.pe", 
  hydrafacial: "Info@inaesthetics.pe",
  lunares: "Info@inaesthetics.pe",
  
  // Departamentos
  ventas: "ventas@inaesthetics.pe",
  consultas: "consultas@inaesthetics.pe",
  soporte: "soporte@inaesthetics.pe",
  
  // Email por defecto (se usa si no se especifica)
  default: process.env.EMAIL_USER || "Info@inaesthetics.pe"
} as const;

// Tipo para autocompletado
export type EmailDestination = keyof typeof EMAIL_DESTINATIONS; 