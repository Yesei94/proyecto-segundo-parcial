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

## Additional Resources

For more information on using the Angular CLI, including detailed command references, visit the [Angular CLI Overview and Command Reference](https://angular.dev/tools/cli) page.
