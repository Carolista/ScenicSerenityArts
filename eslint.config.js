export default [
	{
		languageOptions: {
			ecmaVersion: 'latest',
			sourceType: 'module',
			globals: {
				window: 'readonly',
				document: 'readonly',
				console: 'readonly',
				navigator: 'readonly',
				IntersectionObserver: 'readonly',
				setTimeout: 'readonly',
				clearTimeout: 'readonly',
			},
		},
		rules: {
			// Indentation - use tabs
			indent: ['error', 'tab', { SwitchCase: 1 }],

			// Quotes
			quotes: ['error', 'single', { avoidEscape: true }],
			'quote-props': ['error', 'as-needed'],

			// Semicolons
			semi: ['error', 'always'],

			// Best Practices
			eqeqeq: ['error', 'always'],
			'no-var': 'error',
			'prefer-const': 'error',
			'no-unused-vars': ['warn', { argsIgnorePattern: '^_' }],
			'no-console': 'off',
			'no-undef': 'error',

			// Code Quality
			'no-duplicate-imports': 'error',
			'eol-last': ['error', 'always'],
			'prefer-template': 'error',
			'object-shorthand': 'error',

			// Disable formatting rules handled by Prettier
			'no-trailing-spaces': 'off',
			'comma-spacing': 'off',
			'key-spacing': 'off',
			'space-before-blocks': 'off',
			'space-before-function-paren': 'off',
			'space-infix-ops': 'off',
			'arrow-spacing': 'off',
			'no-multiple-empty-lines': 'off',
		},
	},
	{
		ignores: [
			'node_modules/**',
			'dist/**',
			'build/**',
			'*.min.js',
			'coverage/**',
		],
	},
];
