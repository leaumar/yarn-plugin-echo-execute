# About

Echoes a `package.json` script's commandline before Yarn executes it. This patches the design decision in Yarn v2 to
omit the commandline echo that traditionally occurs before execution. An official setting to restore this behavior
natively will not be implemented: see [#1215](https://github.com/yarnpkg/berry/issues/1215).

## Discretion

The main motivation for this design decision in Yarn v2 is compatibility with tools that parse console output from other
tools: test report scanners, JSON readers, etc. Using `yarn-plugin-echo-execute` is thus not recommended if your project
includes tools that parse console output. If such a tool fails while this plugin is enabled, verify that it isn't the
cause before contacting the Yarn developers for support.

# Building

1. `yarn install`
2. `yarn build`
3. copy `bundles/@yarnpkg/plugin-echo-execute.js` to your project
4. add `plugins: ["path/to/plugin-echo-execute.js"]` to your `.yarnrc.yml`
5. profit
