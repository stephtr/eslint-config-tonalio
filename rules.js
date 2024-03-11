module.exports = {
	rules: {
		'max-classes-per-file': ['error', 3],
		'eslint-comments/disable-enable-pair': [
			'error',
			{ allowWholeFile: true },
		],
		'import/no-extraneous-dependencies': [
			'error',
			{
				devDependencies: [
					'**/webpack.config.ts',
					'**/*.test.tsx',
					'**/*.test.ts',
				],
			},
		],
		'import/no-cycle': 'off',
		'import/prefer-default-export': 'off',
		'prefer-const': ['error', { destructuring: 'all' }],
		'no-param-reassign': 'off',
		'no-promise-executor-return': 'off',
		'no-plusplus': 'off',
		'import/no-unresolved': [
			'error',
			{ ignore: ['\\.(svg|png|jpg)(\\?asFile)?$'] },
		],
		'dot-notation': 'off',
		'class-methods-use-this': 'off',
		'react/require-default-props': [0],
		'react/function-component-definition': 'off',
		'react/react-in-jsx-scope': 'off',
	},
};
