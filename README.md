# Introduction

This is a sample repo to reproduce systemjs bundling issue [#1343](https://github.com/valor-software/ng2-bootstrap/issues/1343) for [ng2-bootstrap](https://github.com/valor-software/ng2-bootstrap) 1.1.16-9 and Angular 2.4.0

This build routine is based on [angular-seed](https://github.com/mgechev/angular-seed)

ng2-bootstrap Systemjs config: **tools/config/project.config.ts**
ng2-bootstrap in ngModule: **src/client/app/shared/shared.module.ts**

# Steps to reproduce the issue

```bash
# install node modules and runs seed preinstall routine
$ npm i

# ( WORKS ) run dev build without bundling on port 3000, serve files from node_modules
$ npm start

# ( FAILS ) create prod build with systemjs bundling
# see tools/tasks/seed/build.bundles.app.ts
$ npm run build.prod

# ( FAILS ) create prod build with AoT compilation and systemjs bundling
# see tools/tasks/seed/build.bundles.app.exp.ts
$ npm run build.prod.exp
```
