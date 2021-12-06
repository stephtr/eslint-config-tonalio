# eslint-config-tonalio

A custom eslint config supporting TypeScript, React and JSON.

[This configuration](./index.js) is based on [airbnb](https://github.com/airbnb/javascript/tree/master/packages/eslint-config-airbnb) and [typescript-eslint](https://github.com/typescript-eslint/typescript-eslint). For supporting JSON files [`eslint-plugin-json`](https://github.com/azeemba/eslint-plugin-json) is being used, support for [Prettier](https://github.com/prettier) has been also added.

In addition, a [few rules](./rules.js) have been customized.

## Usage

In order to use this configuration, one also has to install the peer dependencies `eslint`, `prettier` and `typescript`. After installing `eslint-config-tonalio`, adding `"extends": "tonalio"` to your eslint configuration file should be sufficient. You may also want to add a prettier config.

## Changelog

### 5.1.1

-   Enable TypeScript in Svelte

### 5.1.0

-   Initial support for svelte

### 5.0.3

-   Bump `eslint-plugin-json` and `eslint-config-prettier`

### 5.0.2

-   include missing dependency

### 5.0.1

-   remove react default prop requirement

### 5.0.0

-   Bump `@typescript-eslint` to support TypeScript v4, updated `eslint-config-airbnb-typescript` to v12

### 4.0.0

-   Updated `eslint-config-airbnb-typescript` to v9, eslint to v7 and prettier to v2

### 3.0.0

-   Switch enumMember casing from camelCase to PascalCase

### 2.0.5

-   Disable `@typescript-eslint/naming-convention` for unused `_` parameters

### 2.0.4

-   Disable `@typescript-eslint/explicit-module-boundary-types` for React files
-   Enable PascalCasing e.g. for React functional components

### 2.0.3

-   Relax `@typescript-eslint/naming-convention` rule

### 2.0.2

-   Fix `@typescript-eslint/naming-convention`
-   Disable `@typescript-eslint/no-unsafe-*` rules

### 2.0.1

-   Fix not existing `camelcase` rule

### 2.0.0

-   Bump `typescript-eslint` to v3, which drops support for Node v8 and TypeScript v3.2

### 1.1.0

-   In order to prevent a React version warning from appearing when not using React, it's version has been fixed to `latest`.

### 1.0.0

-   Initial release
