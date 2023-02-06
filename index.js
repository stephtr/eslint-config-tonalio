module.exports = {
	overrides: [
		{
			files: ['*.js', '*.ts', '*.jsx', '*.tsx'],
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
					version: 'latest',
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
