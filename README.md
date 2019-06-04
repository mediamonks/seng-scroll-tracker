[![Travis](https://img.shields.io/travis/mediamonks/seng-scroll-tracker.svg?maxAge=2592000)](https://travis-ci.org/mediamonks/seng-scroll-tracker)
[![Code Climate](https://img.shields.io/codeclimate/github/mediamonks/seng-scroll-tracker.svg?maxAge=2592000)](https://codeclimate.com/github/mediamonks/seng-scroll-tracker)
[![Coveralls](https://img.shields.io/coveralls/mediamonks/seng-scroll-tracker.svg?maxAge=2592000)](https://coveralls.io/github/mediamonks/seng-scroll-tracker?branch=master)
[![npm](https://img.shields.io/npm/v/seng-scroll-tracker.svg?maxAge=2592000)](https://www.npmjs.com/package/seng-scroll-tracker)
[![npm](https://img.shields.io/npm/dm/seng-scroll-tracker.svg?maxAge=2592000)](https://www.npmjs.com/package/seng-scroll-tracker)

# seng-scroll-tracker

Add a description here...


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

### manual

Check the **build** section below to see your you can build for all the
targets yourself.

## Usage

```ts
import ScrollTracker, { ScrollTrackerEvent } from 'seng-scroll-tracker';
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
yarn typings         # install .d.ts dependencies (done on install)
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


