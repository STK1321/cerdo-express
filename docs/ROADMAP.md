# Roadmap de Producto - Cerdo Express

## Objetivo

Construir una landing page de alta conversion para captar cotizaciones de cerdo fresco por WhatsApp y formulario, respetando la identidad de marca y una implementacion moderna con Astro (Vite) + Tailwind CSS v4.

## Estado General

- Estado actual: Implementacion completada
- Fecha de inicio: 2026-03-28
- Stack base: Astro 6 (Vite), Tailwind CSS v4

## Fases

### Fase 0 - Base tecnica

- [x] Inicializar proyecto Astro
- [x] Configurar Tailwind CSS v4
- [x] Definir estructura de estilos globales y tokens
- Criterio de salida: `npm run dev` y `npm run build` sin errores

### Fase 1 - Sistema de marca

- [x] Implementar paleta oficial (azul, dorado, rojo, crema, gris)
- [x] Configurar tipografias (serif para titulares, sans para cuerpo)
- [x] Definir estilos reutilizables para botones, tarjetas y secciones
- Criterio de salida: componentes base coherentes con identidad Cerdo Express

### Fase 2 - Landing principal

- [x] Hero con propuesta de valor y CTA principal
- [x] Bloque de beneficios y publico objetivo
- [x] Bloque de confianza y cobertura
- [x] CTA repetidos a WhatsApp
- [x] Formulario de captacion de leads
- Criterio de salida: flujo completo de conversion visible en una sola pagina

### Fase 3 - SEO y conversion

- [x] Metadatos SEO basicos (title, description, Open Graph)
- [x] Estructura semantica correcta (h1, h2, secciones)
- [x] Mejoras de copy en CTAs y escaneabilidad
- Criterio de salida: checklist SEO on-page basico cumplido

### Fase 4 - Calidad y entrega

- [x] Build de produccion
- [x] Ajustes responsive (mobile/tablet/desktop)
- [x] Revision final de enlaces y formulario
- Criterio de salida: version lista para despliegue

## Dato comercial configurado

- Numero de WhatsApp gestionado por entorno: `PUBLIC_WHATSAPP_NUMBER`

## Entregables

- Landing page funcional en `src/pages/index.astro`
- Estilos globales y tokens de marca en `src/styles/global.css`
- Tickets de seguimiento en `docs/tickets/`

## Riesgos y mitigaciones

- Riesgo: cambios de canal comercial o numero de contacto
  - Mitigacion: mantener `whatsappHref` centralizado para actualizar todos los CTA en un solo punto
- Riesgo: cambios de branding en medio del desarrollo
  - Mitigacion: tokens CSS para cambiar color y tipografia sin reescribir layout
