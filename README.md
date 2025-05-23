# Native Federation

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 19.2.11.

# Main assumptions:
- [ ] Creating an Angular workspace:
`ng new project_name_native_federation --create-application=false`

- [ ] Splitting the application by functionality:
`ng generate application application_name`

- [ ] Creating the main (host) application by specifying in the command:
```
ng g @angular-architects/native-federation:init --project application_name --port local_application_port --type remote_or_dynamic-host
```
of type `--type dynamic-host`

- [ ] Creating a remote application by specifying the type `--type remote` in the command.
- [ ] In the main application in the `federation.manifest.json` file there should be a list of applications, e.g:
```
    {
        "products": "http://localhost:4201/remoteEntry.json",
        "employees": "http://localhost:4202/remoteEntry.json"
    }

```
- [ ] Each application should have a `federation.config.js` configuration file.
- [ ] Remote applications in the `federation.config.js` configuration file should include the `exposes` property. Below is a sample configuration for a remote application:
```
    exposes: {
    './Component': './projects/employees/src/app/app.component.ts',
    },

```

## Steps to run the micro frontend with Native Federation

1. Clone the repository:
- [ ] git clone https://github.com/KasiaKasia/angular-micro-frontends-with-native-federation.git

2. In the project directory, run the following commands:
- [ ] `npm i`
- [ ] `npm run build_shell`
- [ ] `npm run build_products` 
- [ ] `npm run build_employees` 
- [ ] `npm run start_shell`
- [ ] `npm run start_products`
- [ ] `npm run start_employees`

3. Next, open a web browser and navigate to the following addresses: 
- [ ] http://localhost:4200/ 
- [ ] http://localhost:4201/
- [ ] http://localhost:4202/


## Code scaffolding

Run `ng generate component component-name --project application-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module --project application-name`.

The command `ng generate application application_name` adds a new application. To integrate the application with Native Federation, use the following command:
`ng g @angular-architects/native-federation:init --project application_name --port local_application_port --type remote_or_dynamic-host`.

## Build

Run `npm run build_shell` and `npm run build_product` to build the project micro frontends with Native Federation. The build artifacts will be stored in the `dist/shell` and `dist/products` directory.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via a platform of your choice. To use this command, you need to first add a package that implements end-to-end testing capabilities.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.
