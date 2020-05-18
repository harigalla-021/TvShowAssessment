# tvshow-assessment
A single‐page web application using the open Tvmaze API which allows users to get information on 
their favorite Tv Shows. External links to get more information are also provided.


## Steps 
Here are the steps for running the project.
Note: For further clarification on each step refer below

1) Install npm package manager and vue cli
2) Install Git and clone the repo from the link- https://github.com/harigalla-021/TvShowAssessment.git
3) Inside the tvshow-assessment folder install the project dependecies using npm install
4) Run the code to view the output

## Choice of framework
For this project, I have chosen the VueJS framework. It was first released in 2013 and since then had exploded
onto the screen having 130549 starts on Github and downloaded a number of times this year. The main advantage 
of Vue is that it is fresh and has little baggage. It has been learning from the mistakes and successes of React & Angular. It has two-way data binding facility like Angular and Virtual DOM like React.  Vue is lightweight & easy to learn.

I have also used Vuetify for designing. Vuetify is a reusable semantic component framework for Vue.js that aims to provide clean, semantic and reusable components. It supports all the modern browsers and is compatible with Vue CLI-3. It also follows the Material Design standard.

## Installation of npm 
NPM is a “package manager” that makes installing Node “packages” fast and easy. A package is just a code library that extends Node by adding useful features. NPM is installed when you install Node.js®

Download the windows installer from- https://nodejs.org/en/download/

To see if NPM is installed, type the following  in Terminal.

```
npm -v

```

## Installation of git and cloning repositry
Refer- https://git-scm.com/book/en/v2/Getting-Started-Installing-Git and install it based on your OS. Then for 
initialising  a folder as git repositry use -

```
 git init

```

Then use following link to clone the repo

```
git clone https://github.com/harigalla-021/TvShowAssessment.git

```

For more information visit- https://git-scm.com/book/en/v2/Git-Basics-Getting-a-Git-Repository 

## Installation of vue/cli
Note: You need administrator privileges to execute these unless npm was installed on your system through a Node.js version manager.

```
npm install -g @vue/cli

```
Note: You can check you have the right version with this command:
vue --version


## Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```

### Run your unit tests
```
npm run test:unit
```

### Lints and fixes files
```
npm run lint
```

### Project Guidelines
* This application uses camelCase convention for naming mehtods and variables
Example : getShowsByName() , shows etc..

* This application also uses PascalCase for naming vue components. Small case has been used for folder naming 
convention and some .js files.


### Project dependencies and devDependencies ------------
1. axios:
   Promise based HTTP client for the browser.
   Please refer below url for more details:
   https://www.npmjs.com/package/axios   

2. vuetify:
   Vuetify is a Vue UI Library with beautifully handcrafted Material Components. No design skills required — everything you need to create amazing applications is at your fingertips. More information:
   https://vuetifyjs.com/en/introduction/guide/

3. jest:
   Jest is a delightful JavaScript Testing Framework with a focus on simplicity.
   https://jestjs.io/docs/en/getting-started  


### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).
