# Inaesthetics - Estética Natural y Bienestar

## 📌 Descripción

Sitio web corporativo para Inaesthetics, una clínica especializada en tratamientos estéticos seguros y naturales. El proyecto está desarrollado con Next.js 15 (App Router), TypeScript, y Tailwind CSS, ofreciendo una experiencia digital moderna y optimizada para promocionar diversos tratamientos estéticos.

## 🛠️ Tecnologías

- **Framework:** Next.js 15 (App Router)
- **Lenguaje:** TypeScript
- **Estilizado:** Tailwind CSS 4
- **Componentes UI:** shadcn/ui (basado en Radix UI)
- **Formularios:** React Hook Form + Zod
- **Animaciones:** AOS (Animate On Scroll)
- **Carruseles:** Swiper
- **Estado Global:** Zustand
- **Notificaciones:** Sonner
- **Análisis:** Google Analytics, Google Tag Manager

## 🏗️ Estructura del Proyecto

```
src/
├── app/                 # Rutas y páginas
│   ├── enzimas/         # Tratamiento con enzimas PB Serum
│   ├── hydrafacial/     # Tratamiento Hydrafacial
│   ├── lunares/         # Eliminación de lunares con láser CO2
│   └── api/             # API routes
├── components/          # Componentes compartidos
│   ├── ui/              # Componentes de shadcn/ui
│   └── ...              # Otros componentes personalizados
├── data/                # Datos estáticos
├── lib/                 # Utilidades y funciones auxiliares
├── schemas/             # Esquemas de validación (Zod)
├── store/               # Estado global (Zustand)
└── types/               # Tipado TypeScript
```

## 🚀 Características Principales

- **Páginas de Tratamientos Específicos:** Secciones dedicadas para enzimas, hydrafacial, eliminación de lunares, etc.
- **Interfaz de Usuario Moderna:** Diseño elegante y profesional con componentes de shadcn/ui
- **SEO Optimizado:** Metadatos completos para cada página, con Open Graph, Twitter Cards, etc.
- **Responsive Design:** Diseño adaptable a diferentes dispositivos
- **Modales Promocionales:** Sistema de popups con ofertas especiales
- **Integración WhatsApp:** Botones de contacto directo con mensajes predefinidos
- **Formularios de Contacto:** Con validación avanzada
- **Animaciones:** Animaciones al scroll para mejorar la experiencia de usuario
- **Sección de Testimonios:** Carruseles con testimonios de clientes

## 🔧 Instalación y Uso

1. Clonar el repositorio:
   ```bash
   git clone [url-repositorio]
   cd in-aesthetics-2
   ```

2. Instalar dependencias:
   ```bash
   npm install
   ```

3. Ejecutar en desarrollo (con Turbopack):
   ```bash
   npm run dev
   ```

4. Construir para producción:
   ```bash
   npm run build
   ```

5. Iniciar en producción:
   ```bash
   npm run start
   ```

## 📱 Integración con Servicios Externos

- **Google Analytics:** Tracking de usuarios y eventos
- **Google Tag Manager:** Gestión centralizada de tags
- **WhatsApp Business API:** Botones de contacto directo
- **NodeMailer:** Envío de formularios por email

## 🧩 Componentes Principales

- **UI Components (shadcn/ui):** Sistema de componentes consistente y personalizable
- **PromoModal:** Popups promocionales configurables
- **ContactForm:** Formulario de contacto con validación
- **ButtonWsp:** Botón flotante de WhatsApp personalizable
- **Testimonials:** Sección de testimonios de clientes
- **Benefits:** Sección de beneficios de tratamientos

## 📊 SEO y Marketing Digital

El proyecto está optimizado para SEO con:
- Metadatos estructurados para cada página
- URLs canónicas
- Open Graph y Twitter Cards para compartir en redes sociales
- Robots.txt y configuración para rastreo de buscadores
- Estructura de datos Schema.org

## 🌐 Despliegue

El sitio está configurado para ser desplegado en Vercel, aprovechando las capacidades de Edge Functions y optimizaciones automáticas.

## 📝 Contribución

1. Crear una rama para tu feature (`git checkout -b feature/amazing-feature`)
2. Commit de tus cambios (`git commit -m 'Add some amazing feature'`)
3. Push a la rama (`git push origin feature/amazing-feature`)
4. Abrir un Pull Request

## 📄 Licencia

Derechos reservados © Inaesthetics
