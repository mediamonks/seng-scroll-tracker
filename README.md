[![Travis](https://img.shields.io/travis/mediamonks/seng-scroll-tracker.svg?maxAge=2592000)](https://travis-ci.org/mediamonks/seng-scroll-tracker)
[![Code Climate](https://img.shields.io/codeclimate/github/mediamonks/seng-scroll-tracker.svg?maxAge=2592000)](https://codeclimate.com/github/mediamonks/seng-scroll-tracker)
[![Coveralls](https://img.shields.io/coveralls/mediamonks/seng-scroll-tracker.svg?maxAge=2592000)](https://coveralls.io/github/mediamonks/seng-scroll-tracker?branch=master)
[![npm](https://img.shields.io/npm/v/seng-scroll-tracker.svg?maxAge=2592000)](https://www.npmjs.com/package/seng-scroll-tracker)
[![npm](https://img.shields.io/npm/dm/seng-scroll-tracker.svg?maxAge=2592000)](https://www.npmjs.com/package/seng-scroll-tracker)

# seng-scroll-tracker

## Installation

### yarn / npm

```sh
yarn add seng-scroll-tracker
```

```sh
npm i -S seng-scroll-tracker
```

### other

We also have browser, amd, commonjs, umd, systemjs and es6 versions of
this module available attached to the [Github Releases](https://github.com/mediamonks/seng-scroll-tracker/releases).

<!---

Note: The below cannot be used yet, as there is no way to link to a
specific version yet without updating this readme manually after each
new version.


### browser

```html
<script src="http://mediamonks-development.s3.amazonaws.com/seng/libs/seng-scroll-tracker/1.2.0/seng-scroll-tracker.min.js"></script>
```
```js
console.log(window.SengScrollTracker)
```

### other

Besides the browser version, there are other versions available for
download as well:

- [browser](http://mediamonks-development.s3.amazonaws.com/seng/libs/seng-scroll-tracker/1.2.0/seng-scroll-tracker.js) (and [minified](http://mediamonks-development.s3.amazonaws.com/seng/libs/seng-scroll-tracker/1.2.0/seng-scroll-tracker.min.js))
- [umd](http://mediamonks-development.s3.amazonaws.com/seng/libs/seng-scroll-tracker/1.2.0/seng-scroll-tracker.js) (and [minified](http://mediamonks-development.s3.amazonaws.com/seng/libs/seng-scroll-tracker/1.2.0/seng-scroll-tracker-umd.min.js))
- [amd](http://mediamonks-development.s3.amazonaws.com/seng/libs/seng-scroll-tracker/1.2.0/seng-scroll-tracker-amd.js)
- [commonjs](http://mediamonks-development.s3.amazonaws.com/seng/libs/seng-scroll-tracker/1.2.0/seng-scroll-tracker-commonjs.js)
- [systemjs](http://mediamonks-development.s3.amazonaws.com/seng/libs/seng-scroll-tracker/1.2.0/seng-scroll-tracker-system.js)
- [es6](http://mediamonks-development.s3.amazonaws.com/seng/libs/seng-scroll-tracker/1.2.0/seng-scroll-tracker-es6.zip)

-->

### manual

Check the **build** section below to see your you can build for all the
targets yourself.

## Usage

```ts
import { ScrollTracker, ScrollTrackerEvent } from 'seng-scroll-tracker';
...
const scrollTracker = new ScrollTracker();
const scrollTrackerPoint = scrollTracker.addPoint(100, 100);
scrollTrackerPoint.addEventListener(ScrollTrackerEvent.ENTER_VIEW, () => {})
scrollTrackerPoint.addEventListener(ScrollTrackerEvent.LEAVE_VIEW, () => {})
scrollTrackerPoint.addEventListener(ScrollTrackerEvent.SCROLLED_BEYOND, () => {})
...
```

## Documentation

View the [generated documentation](http://mediamonks.github.io/seng-scroll-tracker/).


## Building

In order to build seng-scroll-tracker, ensure that you have [Git](http://git-scm.com/downloads)
and [Node.js](http://nodejs.org/) installed.

Clone a copy of the repo:
```sh
git clone https://github.com/mediamonks/seng-scroll-tracker.git
```

Change to the seng-scroll-tracker directory:
```sh
cd seng-scroll-tracker
```

Install dev dependencies:
```sh
yarn
```

Use one of the following main scripts:
```sh
yarn build           # build this project
yarn dev             # run dev-watch mode, serving example/index.html in the browser
yarn generate        # generate all artifacts (compiles ts, webpack, docs and coverage)
yarn test:unit       # run the unit tests
yarn validate        # runs validation scripts, including test, lint and coverage check
yarn lint            # run tslint on this project
yarn doc             # generate typedoc documentation
```

When installing this module, it adds a pre-push hook, that runs the `validate`
script before committing, so you can be sure that everything checks out.

If you want to create the distribution files yourself, you can run the
`build-dist` script, and the following files will get generated in the
`dist` folder:

- **/dist/seng-scroll-tracker.js**: bundled with webpack, can be loaded from
	a script tag, available as `window.SengScrollTracker`
- **/dist/seng-scroll-tracker.min.js**: same as above, but minified
- **/dist/seng-scroll-tracker-amd.js**: bundled with webpack, can be used
	with e.g. requirejs
- **/dist/seng-scroll-tracker-commonjs.js**: bundled with webpack, can be
	used in systems that support commonjs, but you should just use npm
- **/dist/seng-scroll-tracker-umd.js**: bundled with webpack, works in the
	browser, with requirejs, and in a commonjs system
- **/dist/seng-scroll-tracker-umd.min.js**: same as above, but minified
- **/dist/seng-scroll-tracker-system.js**: bundled with typescript, can be
	used in systems	that support systemjs
- **/dist/seng-scroll-tracker-es6.zip**: transpiled with typescript, only
	types are removed from the source files

## Contribute

View [CONTRIBUTING.md](./CONTRIBUTING.md)


## Changelog

View [CHANGELOG.md](./CHANGELOG.md)


## Authors

View [AUTHORS.md](./AUTHORS.md)


## LICENSE

[MIT](./LICENSE) © MediaMonks

