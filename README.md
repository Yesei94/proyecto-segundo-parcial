# Proyecto Segundo Parcial

Este es un proyecto Angular desarrollado para el segundo parcial de la materia de Tecnología de Internet.

## Tecnologías Utilizadas

- **Angular 20.3.1** - Framework principal
- **Bootstrap 5** - Framework CSS para diseño responsivo y componentes UI
- **TypeScript** - Lenguaje de programación
- **Node.js** - Entorno de ejecución

## Framework CSS Elegido: Bootstrap

Este proyecto utiliza **Bootstrap 5** como framework CSS principal. Bootstrap proporciona:

- Sistema de grid responsivo
- Componentes UI predefinidos (botones, cards, formularios, etc.)
- Utilidades de espaciado y tipografía
- Diseño mobile-first
- Temas y personalización

### Instalación de Bootstrap

Bootstrap fue instalado mediante npm y configurado en `angular.json`:

```bash
npm install bootstrap
```

La configuración se encuentra en el archivo `angular.json` en la sección de estilos:

```json
"styles": [
  "node_modules/bootstrap/dist/css/bootstrap.min.css",
  "src/styles.css"
]
```

## Template Utilizado

Este proyecto utiliza el template **"Agency"** de Start Bootstrap, un template profesional y responsivo para sitios web corporativos.

### Fuente del Template

- **Template**: [Start Bootstrap Agency](https://startbootstrap.com/theme/agency)
- **Demo**: [https://startbootstrap.github.io/startbootstrap-agency/](https://startbootstrap.github.io/startbootstrap-agency/)
- **Repositorio**: [https://github.com/StartBootstrap/startbootstrap-agency](https://github.com/StartBootstrap/startbootstrap-agency)
- **Versión**: 7.0.6
- **Licencia**: [MIT License](https://github.com/StartBootstrap/startbootstrap-agency/blob/master/LICENSE)

### Características del Template

- **Diseño responsivo** con Bootstrap 5
- **Navegación fija** con scroll suave
- **Secciones incluidas**: Hero, Servicios, Portfolio, About, Team, Contacto
- **Optimizado para SEO** y rendimiento
- **Compatible con PWA** (futura implementación)

### Fuentes y Recursos Externos

- **Bootstrap 5.3.0** - Framework CSS principal
  - Fuente: [Bootstrap Official](https://getbootstrap.com/)
  - Licencia: MIT License

- **Font Awesome 6.0.0** - Iconografía
  - Fuente: [Font Awesome](https://fontawesome.com/)
  - Licencia: Free License

- **Google Fonts** - Tipografía
  - Fuente: [Google Fonts](https://fonts.google.com/)
  - Licencia: Open Font License

### Licencias

- **Start Bootstrap Agency**: MIT License - Permite uso comercial y modificación
- **Bootstrap**: MIT License - Permite uso comercial y modificación
- **Font Awesome**: Free License - Uso gratuito con atribución
- **Google Fonts**: Open Font License - Uso gratuito

## Development server

To start a local development server, run:

```bash
ng serve
```

Once the server is running, open your browser and navigate to `http://localhost:4200/`. The application will automatically reload whenever you modify any of the source files.

## Code scaffolding

Angular CLI includes powerful code scaffolding tools. To generate a new component, run:

```bash
ng generate component component-name
```

For a complete list of available schematics (such as `components`, `directives`, or `pipes`), run:

```bash
ng generate --help
```

## Building

To build the project run:

```bash
ng build
```

This will compile your project and store the build artifacts in the `dist/` directory. By default, the production build optimizes your application for performance and speed.

## Running unit tests

To execute unit tests with the [Karma](https://karma-runner.github.io) test runner, use the following command:

```bash
ng test
```

## Running end-to-end tests

For end-to-end (e2e) testing, run:

```bash
ng e2e
```

Angular CLI does not come with an end-to-end testing framework by default. You can choose one that suits your needs.

## PWA (Progressive Web App) - Funcionalidad Offline

Este proyecto está configurado como una PWA que funciona sin conexión a internet. La funcionalidad offline está habilitada solo en modo producción.

### Configuración de Precaching

El Service Worker está configurado para precachear los siguientes recursos críticos:

#### Assets Precacheados:
- **HTML**: `index.html`, `index.csr.html`
- **CSS**: Todos los archivos CSS del proyecto + Bootstrap + Agency template
- **JavaScript**: Todos los archivos JS compilados
- **Manifest**: `manifest.webmanifest`
- **Íconos**: Favicon y todos los íconos PWA
- **Fuentes**: Font Awesome, Google Fonts (Montserrat, Roboto Slab)
- **Assets críticos**: `agency.css`, componentes de Home

#### Estrategias de Cache:
- **App assets**: `prefetch` (instalación y actualización)
- **Assets generales**: `prefetch` (imágenes, fuentes, etc.)
- **Assets críticos**: `prefetch` (componentes de Home)
- **API calls**: `freshness` strategy (1 día de cache)

### Pruebas de Funcionalidad Offline

#### 1. Construir para Producción
```bash
ng build --configuration production
```

#### 2. Servir la Aplicación de Producción
```bash
# Opción 1: Usar un servidor local
npx http-server dist/proyecto-segundo-parcial -p 8080

# Opción 2: Usar Angular CLI
ng serve --configuration production
```

#### 3. Verificar Service Worker
1. Abrir **DevTools** (F12)
2. Ir a la pestaña **Application**
3. En el panel izquierdo, expandir **Service Workers**
4. Verificar que el Service Worker esté **activo** y **running**
5. En la pestaña **Network**, marcar **Offline** para simular sin conexión

#### 4. Pruebas Offline Específicas

##### Prueba 1: Navegación Offline
- ✅ **Home page** (`/`) debe cargar completamente
- ✅ **Navegación** entre secciones debe funcionar
- ✅ **Estilos** (Bootstrap + Agency) deben aplicarse correctamente
- ✅ **Fuentes** (Google Fonts, Font Awesome) deben mostrarse

##### Prueba 2: Assets Precacheados
- ✅ **Imágenes** del template deben cargar
- ✅ **Íconos** Font Awesome deben mostrarse
- ✅ **CSS personalizado** (`agency.css`) debe aplicarse
- ✅ **JavaScript** de Bootstrap debe funcionar

##### Prueba 3: Funcionalidad PWA
- ✅ **Manifest** debe estar disponible
- ✅ **Íconos PWA** deben cargar correctamente
- ✅ **Cache** debe mostrar recursos precacheados
- ✅ **Offline indicator** debe aparecer en DevTools

#### 5. Verificar Cache en DevTools
1. **Application** → **Storage** → **Cache Storage**
2. Verificar que existan caches para:
   - `ngsw:1:data:dynamic:app:cache`
   - `ngsw:1:data:dynamic:assets:cache`
   - `ngsw:1:data:dynamic:critical-assets:cache`

#### 6. Pruebas de Rendimiento Offline
- **Tiempo de carga**: < 2 segundos
- **Recursos críticos**: Precacheados al 100%
- **Navegación**: Fluida sin conexión
- **Interactividad**: Botones y enlaces funcionan

### Comandos de Desarrollo

```bash
# Desarrollo (Service Worker deshabilitado)
ng serve

# Producción (Service Worker habilitado)
ng build --configuration production
ng serve --configuration production

# Verificar PWA
ng build --configuration production
npx http-server dist/proyecto-segundo-parcial -p 8080
```

### Notas Importantes

- ⚠️ **Service Worker solo funciona en producción**
- ⚠️ **HTTPS requerido** para PWA en producción
- ⚠️ **Precaching** se activa en la primera carga
- ✅ **Funcionalidad offline** garantizada para Home page
- ✅ **Assets críticos** siempre disponibles

## Additional Resources

For more information on using the Angular CLI, including detailed command references, visit the [Angular CLI Overview and Command Reference](https://angular.dev/tools/cli) page.
