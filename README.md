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
