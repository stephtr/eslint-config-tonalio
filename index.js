module.exports = {
	plugins: ['eslint-comments'],
	extends: [
		'airbnb',
		'airbnb/hooks',
		'eslint:recommended',
		'plugin:eslint-comments/recommended',
		'plugin:json/recommended',
		'plugin:prettier/recommended',
		'prettier/react',
		'./rules',
	],
	settings: {
		react: {
			version: 'latest',
		},
	},
	overrides: [
		{
			files: ['*.ts', '*.tsx'],
			parser: '@typescript-eslint/parser',
			plugins: ['@typescript-eslint'],
			parserOptions: {
				project: './tsconfig.json',
			},
			settings: {
				'import/parsers': {
					'@typescript-eslint/parser': ['.ts', '.tsx'],
				},
				react: {
					version: 'latest',
				},
			},
			extends: [
				'airbnb-typescript',
				'airbnb/hooks',
				'plugin:@typescript-eslint/recommended',
				'plugin:@typescript-eslint/recommended-requiring-type-checking',
				'plugin:prettier/recommended',
				'prettier/react',
				'prettier/@typescript-eslint',
				'./rules',
			],
			rules: {
				'consistent-return': 'off',
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
