module.exports = {
	overrides: [
		{
			files: ['*.js', '*.ts', '*.jsx', '*.tsx'],
			plugins: ['@typescript-eslint', 'eslint-comments'],
			extends: [
				'airbnb-typescript',
				'airbnb/hooks',
				'eslint:recommended',
				'plugin:eslint-comments/recommended',
				'plugin:@typescript-eslint/recommended',
				'plugin:@typescript-eslint/recommended-requiring-type-checking',
				'plugin:prettier/recommended',
				'prettier/react',
				'prettier/@typescript-eslint',
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
			files: ['*.json'],
			extends: ['plugin:json/recommended', 'plugin:prettier/recommended'],
		},
		{
			files: ['*.ts', '*.tsx'],
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
