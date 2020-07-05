[![CircleCI](https://circleci.com/gh/s-barrah/react-component-library.svg?style=svg&circle-token=dbd3768989213f5e3b96fc33c5f289e18d2fd2d5)](https://app.circleci.com/pipelines/github/s-barrah/react-component-library)
[![semantic-release](https://img.shields.io/badge/%20%20%F0%9F%93%A6%F0%9F%9A%80-semantic--release-e10079.svg)](https://github.com/semantic-release/semantic-release)
[![semantic-release](https://badge.fury.io/js/rcl-demo.svg)](https://www.npmjs.com/package/rcl-demo)

React Component Library
--------------

React components to be shared across applications

### Use

CL has a dependency of `styled-components`.

#### Install the package
```
$ yarn add rcl-demo
```

#### Wrap app with the ThemeProvider and theme
```
 import { ThemeProvider, theme } from 'rcl-demo';
```

#### Import components
```
 import { Button } from 'rcl-demo';
```

#### Develop

To install CL locally run
```
$ yarn install
```

To start
```
$ yarn styleguide
```

To test
```
$ yarn test
```
_Test will run through all jest tests and watch for any changes on snapshots._

To publish
```
$ npm publish
```

#### Build

To create a production build
```
$ yarn build
```

To create a production build of the static library
```
$ yarn styleguide:build
```

### Preview

- [gv-component-library.netlify.app](https://gv-component-library.netlify.app)
