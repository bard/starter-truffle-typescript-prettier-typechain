A `truffle`-based Solidity development starter optimized for tight feedback loops and smooth teamwork.

# Features

- tests and migrations in TypeScript
- test watcher for red-green-refactor style workflow (see [below](#suggested-workflow))
- type checking and autocompletion on contract invocations (courtesy of [TypeChain](https://github.com/dethcrypto/TypeChain))
- choise between [chai](./test/Counter-chai.ts) or [jest-expect](./test/Counter-jest.ts) for assertions
- consistent environment across the team by bundling `truffle` and [pinning](https://github.com/bard/starter-truffle-typescript-prettier-typechain/blob/2a6a450666c38cee3d5c3dfd2bebd3c5aa8b2b26/truffle-config.js#L90) `solc` version
- consistent style across the team for both TypeScript and Solidity sources through [prettier](https://prettier.io/) and [lint-staged](https://github.com/okonet/lint-staged)

# Suggested workflow

(All instances of `yarn` below can be replaced with `npm run`)

1. run `yarn start:localchain` (runs `truffle`'s development blockchain)
1. run `yarn build:watch` (rebuilds types whenever Solidity sources change)
1. run `yarn test:watch` (re-runs tests whenever tests or contracts change)
1. after creating a contract and a migration, run `yarn deploy` (transpiles migrations and runs them)

Tests are run in [debug mode](https://trufflesuite.com/docs/truffle/getting-started/using-the-truffle-debugger/#in-test-debugging) by default, so wrapping `debug()` around a contract invocation will drop you into the debugger.

# chai or jest-expect?

`jest-expect` is what most modern JavaScript developers are familiar with due to being used in popular starters such as [Create React App](https://create-react-app.dev/).

`chai` is `truffle`'s default and makes it easier to follow its documentation, plus it has a plugin with assertions for BigNumber.

If you don't care about JavaScript/TypeScript beyond testing Solidity contracts, `chai` might be the path of least resistance, otherwise the lower cognitive load of `jest-expect` more than makes up for the occasional mental translation when reading `chai`-based examples.

# Note for monorepos: type clash between jest and mocha

Regardless of which assertion library you choose, if you use this starter inside a monorepo where Jest is already used, you might run into this error:

```
../../node_modules/@types/jest/index.d.ts:35:13 - error TS2403: Subsequent variable declarations must have the same type.  Variable 'beforeEach' must be of type 'HookFunction', but here has type 'Lifecycle'.

35 declare var beforeEach: jest.Lifecycle;
               ~~~~~~~~~~
```

This happens because `mocha` (the test runner used by `truffle`) and `jest` define the same top-level variables. To fix:

1. create an empty `overrides/jest/index.d.ts` folder
2. modify `tsconfig.json`. Assuming you placed this starter in `<rootDir>/packages/truffle`:

```diff
     "esModuleInterop": true
+    "typeRoots": ["overrides", "../../node_modules/@types"]
   }
```

This essentially "blanks out" the type definition for jest, allowing `@types/mocha` to take precedence ([source](https://medium.com/@elenasufieva/handling-type-declarations-clash-in-typescript-b05b10723f47)).
