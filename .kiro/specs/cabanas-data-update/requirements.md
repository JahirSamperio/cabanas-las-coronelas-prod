# Requirements Document

## Introduction

Este documento especifica los requerimientos para actualizar la página web de Cabañas Las Coronelas con información real y completa del negocio. Actualmente, la página contiene datos de ejemplo (placeholder) que deben ser reemplazados con la información detallada de las 14 cabañas reales, instalaciones, servicios, políticas y menú de desayuno. La actualización debe mantener y mejorar el SEO para búsquedas como "Cabañas en Huasca", optimizar el rendimiento, y seguir las mejores prácticas de UI/UX.

## Glossary

- **Sistema Web**: La aplicación web de Cabañas Las Coronelas construida con React y Vite
- **Cabaña**: Unidad de alojamiento individual con características específicas de capacidad, precio y amenidades
- **Amenidad**: Característica o servicio incluido en una cabaña (ej: chimenea, WiFi, cocina)
- **Tarifa**: Precio por noche según la capacidad de personas
- **Check-in**: Hora de entrada a la cabaña
- **Check-out**: Hora de salida de la cabaña
- **SEO**: Search Engine Optimization - optimización para motores de búsqueda
- **Meta Tags**: Etiquetas HTML que proporcionan metadatos sobre la página web
- **Schema Markup**: Código estructurado que ayuda a los motores de búsqueda a entender el contenido
- **Lazy Loading**: Técnica de carga diferida de imágenes para mejorar el rendimiento
- **Responsive Design**: Diseño que se adapta a diferentes tamaños de pantalla

## Requirements

### Requirement 1

**User Story:** Como visitante del sitio web, quiero ver información precisa y completa de todas las cabañas disponibles, para poder elegir la que mejor se adapte a mis necesidades.

#### Acceptance Criteria

1. WHEN el Sistema Web carga la página de cabañas THEN el Sistema Web SHALL mostrar las 14 cabañas reales con sus nombres correctos (Quinta Valeria, Quinta Adelita, San Pedro, San Francisco, La Rielera, El Jacal del Meño, Los Adobes, Paraíso, Sofía, La Paloma, Río Grande, Leticia, San Miguel, Venancio)
2. WHEN un usuario visualiza una cabaña THEN el Sistema Web SHALL mostrar la capacidad exacta de personas, tarifas por capacidad, número de recámaras, distribución de camas, y número de baños
3. WHEN un usuario visualiza las amenidades de una cabaña THEN el Sistema Web SHALL listar todas las amenidades específicas incluyendo tipo de sala, comedor, cocina/refrigerador, chimenea, TV con Sky, WiFi, y estacionamiento
4. WHEN un usuario visualiza una cabaña que no incluye utensilios de cocina THEN el Sistema Web SHALL mostrar una nota clara indicando "No cuenta con utensilios de cocina (trastes)"
5. WHEN un usuario visualiza las tarifas THEN el Sistema Web SHALL mostrar los precios correctos con desayuno incluido para cada nivel de capacidad

### Requirement 2

**User Story:** Como visitante del sitio web, quiero conocer todas las instalaciones y áreas comunes disponibles, para planificar las actividades durante mi estancia.

#### Acceptance Criteria

1. WHEN el Sistema Web muestra información de instalaciones THEN el Sistema Web SHALL listar todas las áreas recreativas incluyendo alberca (1.20-1.70m), chapoteadero (50-90cm), juegos infantiles, campo de fútbol iluminado, jardín de 1 hectárea, asadores, fogateros, palapas, y museo de antigüedades
2. WHEN el Sistema Web muestra servicios generales THEN el Sistema Web SHALL listar Sky, WiFi, estacionamiento sin costo, y desayuno incluido en fines de semana y días festivos
3. WHEN el Sistema Web muestra servicios adicionales THEN el Sistema Web SHALL indicar los costos: leña $200, asador móvil $100, asador fijo $0
4. WHEN un usuario visualiza la palapa gigante THEN el Sistema Web SHALL indicar que tiene capacidad para 50 personas y tiene costo extra

### Requirement 3

**User Story:** Como visitante del sitio web, quiero conocer las políticas de check-in/check-out y horarios, para planificar mi llegada y salida correctamente.

#### Acceptance Criteria

1. WHEN el Sistema Web muestra políticas de fechas normales THEN el Sistema Web SHALL indicar check-in a la 1:00 PM y check-out a las 12:00 PM
2. WHEN el Sistema Web muestra políticas de fechas vacacionales THEN el Sistema Web SHALL indicar check-in a las 3:00 PM y check-out a las 12:00 PM
3. WHEN el Sistema Web muestra horario de desayunador THEN el Sistema Web SHALL indicar horario de 9:00 AM a 11:00 AM cuando está incluido
4. WHEN el Sistema Web muestra información de llegada temprana THEN el Sistema Web SHALL indicar que si llega antes de la 1 PM puede usar alberca, asadores y áreas comunes
5. WHEN el Sistema Web muestra información de reservaciones THEN el Sistema Web SHALL indicar que sin reservación anticipada la cabaña se entrega inmediatamente solo si está disponible

### Requirement 4

**User Story:** Como visitante del sitio web, quiero conocer el menú de desayuno incluido, para saber qué esperar durante mi estancia.

#### Acceptance Criteria

1. WHEN el Sistema Web muestra el menú de desayuno THEN el Sistema Web SHALL listar los 4 platillos principales: huevos al gusto, chilaquiles rojos/verdes, molletes, y hotcakes
2. WHEN el Sistema Web muestra cada platillo THEN el Sistema Web SHALL incluir la descripción de acompañamientos para cada opción
3. WHEN el Sistema Web muestra el menú THEN el Sistema Web SHALL indicar que incluye fruta de temporada con granola y pan de pulque
4. WHEN el Sistema Web muestra bebidas THEN el Sistema Web SHALL listar café, té, agua de sabor, y jugo de naranja

### Requirement 5

**User Story:** Como visitante del sitio web, quiero conocer el reglamento y políticas del lugar, para asegurarme de cumplir con las normas durante mi estancia.

#### Acceptance Criteria

1. WHEN el Sistema Web muestra el reglamento THEN el Sistema Web SHALL indicar que está prohibido fumar dentro de las cabañas
2. WHEN el Sistema Web muestra horarios de música THEN el Sistema Web SHALL indicar volumen moderado hasta las 10:00 PM y prohibición después de esa hora
3. WHEN el Sistema Web muestra horario de silencio THEN el Sistema Web SHALL indicar el período de 10:00 PM a 9:00 AM
4. WHEN el Sistema Web muestra normas de alberca THEN el Sistema Web SHALL indicar que no se permite ingerir ni llevar alimentos o bebidas dentro
5. WHEN el Sistema Web muestra políticas de daños THEN el Sistema Web SHALL indicar que daños, deterioro o manchas difíciles tendrán penalización extra

### Requirement 6

**User Story:** Como visitante con mascota, quiero conocer las políticas pet-friendly y costos asociados, para planificar mi visita con mi mascota.

#### Acceptance Criteria

1. WHEN el Sistema Web muestra información pet-friendly THEN el Sistema Web SHALL indicar que sí son pet-friendly con costos de $150 para razas pequeñas y $250 para razas grandes
2. WHEN el Sistema Web muestra depósito de seguridad THEN el Sistema Web SHALL indicar $200 pesos por mascota que se devuelve después del chequeo
3. WHEN el Sistema Web muestra condiciones de devolución THEN el Sistema Web SHALL indicar que no se devuelve si hay objetos rotos, excremento, o mobiliario deteriorado
4. WHEN el Sistema Web muestra normas para mascotas THEN el Sistema Web SHALL indicar que está prohibido dejar mascotas confinadas solas, que deben traer mobiliario propio, y que las mascotas no pueden usar el mobiliario de la cabaña

### Requirement 7

**User Story:** Como visitante del sitio web, quiero que la página tenga excelente SEO para búsquedas locales, para poder encontrar fácilmente las cabañas cuando busco alojamiento en la región.

#### Acceptance Criteria

1. WHEN el Sistema Web genera meta tags THEN el Sistema Web SHALL incluir keywords relevantes: "cabañas Huasca", "cabañas Huasca", "cabañas Hidalgo", "alojamiento Huasca", "hospedaje Hidalgo", "cabañas con alberca Hidalgo"
2. WHEN el Sistema Web genera títulos de página THEN el Sistema Web SHALL incluir ubicación geográfica y palabras clave principales en formato optimizado
3. WHEN el Sistema Web genera descripciones meta THEN el Sistema Web SHALL incluir llamados a la acción, ubicación, y características únicas en menos de 160 caracteres
4. WHEN el Sistema Web genera Schema Markup THEN el Sistema Web SHALL implementar schema.org/LodgingBusiness con información completa de ubicación, precios, amenidades y ratings
5. WHEN el Sistema Web genera contenido THEN el Sistema Web SHALL usar encabezados semánticos (H1, H2, H3) con keywords naturalmente integradas

### Requirement 8

**User Story:** Como visitante del sitio web, quiero que la página cargue rápidamente y funcione bien en mi dispositivo, para tener una experiencia fluida sin importar mi conexión o dispositivo.

#### Acceptance Criteria

1. WHEN el Sistema Web carga imágenes THEN el Sistema Web SHALL implementar lazy loading para todas las imágenes de cabañas
2. WHEN el Sistema Web carga imágenes THEN el Sistema Web SHALL usar formatos optimizados (WebP con fallback) y tamaños responsivos
3. WHEN el Sistema Web renderiza en diferentes dispositivos THEN el Sistema Web SHALL mantener diseño responsive con breakpoints apropiados para móvil, tablet y desktop
4. WHEN el Sistema Web carga recursos THEN el Sistema Web SHALL minimizar y comprimir CSS y JavaScript
5. WHEN el Sistema Web carga la página inicial THEN el Sistema Web SHALL lograr un tiempo de First Contentful Paint menor a 2 segundos en conexiones 3G

### Requirement 9

**User Story:** Como visitante del sitio web, quiero una interfaz intuitiva y atractiva que facilite la navegación y comparación de cabañas, para tomar una decisión informada rápidamente.

#### Acceptance Criteria

1. WHEN el Sistema Web muestra el catálogo de cabañas THEN el Sistema Web SHALL permitir filtrar por capacidad de personas y rango de precio
2. WHEN el Sistema Web muestra tarjetas de cabañas THEN el Sistema Web SHALL mostrar imagen principal, nombre, capacidad, precio desde, y amenidades clave en formato consistente
3. WHEN un usuario interactúa con una tarjeta de cabaña THEN el Sistema Web SHALL proporcionar feedback visual (hover, focus) siguiendo principios de accesibilidad
4. WHEN el Sistema Web muestra detalles de cabaña THEN el Sistema Web SHALL organizar información en secciones claras: descripción, habitaciones, amenidades, tarifas, políticas
5. WHEN un usuario navega el sitio THEN el Sistema Web SHALL mantener contraste de color WCAG AA mínimo y tamaños de fuente legibles

### Requirement 10

**User Story:** Como visitante del sitio web, quiero poder contactar fácilmente al negocio para hacer reservaciones o consultas, para completar mi proceso de reserva.

#### Acceptance Criteria

1. WHEN el Sistema Web muestra información de contacto THEN el Sistema Web SHALL incluir botones de WhatsApp, teléfono, y formulario de contacto visibles en todas las páginas
2. WHEN un usuario hace clic en WhatsApp THEN el Sistema Web SHALL abrir conversación con mensaje pre-llenado incluyendo nombre de cabaña si aplica
3. WHEN el Sistema Web muestra ubicación THEN el Sistema Web SHALL mostrar "Huasca, Hidalgo, México" con mapa interactivo
4. WHEN un usuario visualiza una cabaña específica THEN el Sistema Web SHALL incluir botón de "Reservar Ahora" o "Consultar Disponibilidad" prominente
5. WHEN el Sistema Web muestra llamados a la acción THEN el Sistema Web SHALL usar lenguaje claro y directo que motive la conversión
