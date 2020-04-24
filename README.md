# Angular Storybook App

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 9.1.1. It is intended to showcase how components can be built and used both within a mock application aswell as in Storybook using Angular.

Currently the Button is the best component to showcase this functionality, along with the tokens which feed into it. For a quick demo of how efficient this setup can be, run both the mock app and storybook app and change a primary token from within `app/tokens`.

There are two seperate development servers that you can run:

## Storybook server

Run `npm run storybook` for a dev server. Navigate to `http://localhost:6006/`. The app will automatically reload if you change any of the source files.

## Mock app server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Extra Mock App Commands

### Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

### Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

### Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

### Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

### Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).

## To do

- Currently the buttons primary and secondary styling is still being implemented.

- The Search Input component needs moving from the story into the components folder.

- Carbon Angular components are being imported but currently aren't being used.