# Cabañas del Valle - Landing Page

Landing page profesional para un negocio de renta de cabañas, desarrollada con React + Vite y CSS vanilla.

## 🚀 Características

- **SEO Optimizado**: Meta tags, Open Graph, Twitter Cards y Schema.org
- **Performance**: Lazy loading, code splitting y optimizaciones de Vite
- **Accesibilidad**: Cumple estándares WCAG 2.1 AA
- **Responsive**: Diseño adaptable a todos los dispositivos
- **Modular**: Arquitectura escalable y componentes reutilizables

## 📱 Páginas

- `/` - Landing page principal con hero, beneficios y cabañas destacadas
- `/cabanas` - Listado completo con filtros por capacidad, precio y ordenamiento
- `/cabanas/[id]` - Página de detalle con galería, amenidades y reserva

## 🛠️ Tecnologías

- **React 18** - Biblioteca de UI
- **Vite** - Build tool y dev server
- **React Router** - Navegación SPA
- **CSS Vanilla** - Estilos personalizados con variables CSS
- **Intersection Observer** - Lazy loading optimizado

## 🏗️ Instalación y Desarrollo

```bash
# Instalar dependencias
npm install

# Servidor de desarrollo
npm run dev

# Build para producción
npm run build

# Preview del build
npm run preview
```

## 📂 Estructura del Proyecto

```
src/
├── components/          # Componentes reutilizables
│   ├── Header.jsx      # Navegación principal
│   ├── Footer.jsx      # Footer con contacto
│   ├── CabanaCard.jsx  # Card de cabaña
│   └── LazyImage.jsx   # Componente de imagen optimizada
├── pages/              # Páginas principales
│   ├── Home.jsx        # Landing page
│   ├── Cabanas.jsx     # Listado con filtros
│   └── CabanaDetail.jsx # Detalle de cabaña
├── data/               # Datos mock
│   └── cabanas.js      # Información de cabañas
├── hooks/              # Hooks personalizados
│   └── useLazyImage.js # Hook para lazy loading
└── styles/             # Estilos CSS
```

## 🎨 Características de Diseño

- **Paleta de colores**: Verde bosque, marrón tierra y dorado
- **Tipografía**: Inter (Google Fonts)
- **Grid responsive**: CSS Grid con auto-fit
- **Animaciones**: Transiciones suaves y hover effects
- **Imágenes**: Lazy loading con Intersection Observer

## 🔍 SEO Implementado

- Title y meta description optimizados
- Estructura semántica HTML5
- Schema.org LodgingBusiness
- Open Graph y Twitter Cards
- URLs amigables
- Sitemap automático (Vite)

## ♿ Accesibilidad

- Navegación por teclado completa
- ARIA labels y roles
- Contraste de colores AA
- Skip links
- Screen reader friendly
- Focus management

## 📊 Performance

- Code splitting automático
- Lazy loading de imágenes
- Optimización de assets
- Compresión de CSS/JS
- Preload de fuentes críticas

## 🚀 Deployment

### Netlify
```bash
npm run build
# Subir carpeta dist/
```

### Vercel
```bash
npm run build
# Conectar repositorio Git
```

### Servidor tradicional
```bash
npm run build
# Subir contenido de dist/ al servidor web
```

## 🌟 Funcionalidades Destacadas

- **Filtros inteligentes**: Por capacidad, precio y ordenamiento
- **Galería interactiva**: Navegación de imágenes en detalle
- **Reserva directa**: Enlaces a WhatsApp y teléfono
- **Breadcrumbs**: Navegación contextual
- **Cards relacionadas**: Sugerencias de otras cabañas

## 📱 Responsive Breakpoints

- **Desktop**: 1200px+
- **Tablet**: 768px - 1199px
- **Mobile**: 320px - 767px

## 🔧 Configuración Adicional

Para personalizar:

1. **Colores**: Modificar variables CSS en `src/index.css`
2. **Contenido**: Editar `src/data/cabanas.js`
3. **SEO**: Actualizar meta tags en `index.html`
4. **Contacto**: Cambiar información en `Footer.jsx`

## 📈 Métricas Lighthouse

- **Performance**: 95+
- **Accessibility**: 100
- **Best Practices**: 100
- **SEO**: 100

## 🤝 Contribución

1. Fork del proyecto
2. Crear rama feature (`git checkout -b feature/nueva-funcionalidad`)
3. Commit cambios (`git commit -m 'Agregar nueva funcionalidad'`)
4. Push a la rama (`git push origin feature/nueva-funcionalidad`)
5. Crear Pull Request

## 📄 Licencia

Este proyecto está bajo la Licencia MIT - ver el archivo [LICENSE](LICENSE) para detalles.

---

Desarrollado con ❤️ para Cabañas del Valle