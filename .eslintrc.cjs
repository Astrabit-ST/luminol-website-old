module.exports = {
	extends: ['eslint:recommended', 'plugin:@typescript-eslint/recommended'],
	parser: '@typescript-eslint/parser',
	plugins: ['@typescript-eslint'],
	root: true,

	rules: {
		'@typescript-eslint/ban-types': 'error',
		'@typescript-eslint/naming-convention': [
			'error',
			{
				format: ['PascalCase'],
				selector: [
					'class',
					'enum',
					'enumMember',
					'interface'
				]
			},
			{
				format: ['camelCase'],
				selector: ['function', 'classProperty']
			},
			{
				format: ['UPPER_CASE'],
				selector: ['variable'],
				modifiers: ['const', 'exported'],
				filter: {
					regex: '^[a-z][^]+',
					match: true
				}
			}
		],
		'no-duplicate-imports': 'error',
		'no-with': 'error',
		'prefer-const': 'error',
		'prefer-spread': 'error',
		'indent': ['error', 4],
		'max-len': ['error', { code: 80 }],
		'keyword-spacing': [
			'error', 
			{
				overrides: {
					if: { after: false },
					for: { after: false },
					while: { after: false },
					catch: { after: false }
				}
			}
		],
		'max-statements-per-line': ['error', { max: 1 }],
		'no-extra-parens': 'error',
		'no-trailing-spaces': 'error',
		'quotes': 'error',
		'semi': ['error', 'never']
	}
}