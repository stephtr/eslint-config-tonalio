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
			},
			extends: [
				'airbnb-typescript',
				'airbnb/hooks',
				'plugin:@typescript-eslint/eslint-recommended',
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
	],
	reportUnusedDisableDirectives: true,
};
