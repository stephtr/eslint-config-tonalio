module.exports = {
	overrides: [
		{
			files: ['*.js', '*.jsx'],
			plugins: ['eslint-comments'],
			extends: [
				'airbnb',
				'airbnb/hooks',
				'eslint:recommended',
				'plugin:import/recommended',
				'plugin:eslint-comments/recommended',
				'plugin:prettier/recommended',
				'prettier',
				'./rules',
			],
			settings: {
				react: {
					version: 'detect',
				},
			},
		},
		{
			files: ['*.ts', '*.tsx'],
			plugins: ['@typescript-eslint', 'eslint-comments'],
			extends: [
				'airbnb',
				'airbnb-typescript',
				'airbnb/hooks',
				'eslint:recommended',
				'plugin:import/recommended',
				'plugin:eslint-comments/recommended',
				'plugin:@typescript-eslint/recommended',
				'plugin:@typescript-eslint/recommended-requiring-type-checking',
				'plugin:prettier/recommended',
				'prettier',
				'./rules',
			],
			parserOptions: {
				project: './tsconfig.json',
			},
			settings: {
				react: {
					version: 'detect',
				},
			},
		},
		{
			files: ['*.svelte'],
			processor: 'svelte3/svelte3',
			plugins: ['svelte3', '@typescript-eslint', 'eslint-comments'],
			extends: [
				'airbnb-base',
				'airbnb-typescript/base',
				'eslint:recommended',
				'plugin:import/recommended',
				'plugin:eslint-comments/recommended',
				'plugin:@typescript-eslint/recommended',
				'plugin:@typescript-eslint/recommended-requiring-type-checking',
				'plugin:prettier/recommended',
				'prettier',
				'./rules',
			],
			parserOptions: {
				project: './tsconfig.json',
				extraFileExtensions: ['.svelte'],
			},
			settings: {
				'svelte3/typescript': true,
			},
			rules: {
				'import/no-mutable-exports': 'off',
				'import/no-unresolved': [2, { ignore: ['^\\$lib'] }],
				'no-undef': 'off',
				'import/first': 'off',
			},
		},
		{
			files: ['*.json'],
			extends: ['plugin:json/recommended', 'plugin:prettier/recommended'],
		},
		{
			files: ['*.ts', '*.tsx'],
			rules: {
				'consistent-return': 'off',
				'no-undef': 'off',
				'react/prop-types': 'off',
			},
		},
		{
			files: ['*.jsx', '*.tsx'],
			rules: {
				'@typescript-eslint/explicit-module-boundary-types': 'off',
			},
		},
	],
	reportUnusedDisableDirectives: true,
};
