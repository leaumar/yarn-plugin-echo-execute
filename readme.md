# About

Echoes a `package.json` script's commandline before yarn executes it. This patches the design decision in yarn v2 to
omit the commandline echo that traditionally occurs before execution. An official setting to restore this behavior
natively will not be implemented: see [#1215](https://github.com/yarnpkg/berry/issues/1215).

# Building

1. `yarn install`
2. `yarn build`
3. copy `bundles/@yarnpkg/plugin-echo-execute.cjs` to your project
4. add `plugins: ["path/to/plugin-echo-execute.cjs"]` to your `.yarnrc.yml`
5. profit
