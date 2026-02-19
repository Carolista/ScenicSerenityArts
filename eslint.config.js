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
            },
        },
        rules: {
            // Indentation
            indent: ['error', 4, { SwitchCase: 1 }],

            // Quotes
            quotes: ['error', 'single', { avoidEscape: true }],
            'quote-props': ['error', 'as-needed'],

            // Semicolons
            semi: ['error', 'always'],

            // Spacing
            'no-trailing-spaces': 'error',
            'comma-spacing': ['error', { before: false, after: true }],
            'key-spacing': ['error', { beforeColon: false, afterColon: true }],
            'space-before-blocks': 'error',
            'space-before-function-paren': [
                'error',
                {
                    anonymous: 'always',
                    named: 'never',
                    asyncArrow: 'always',
                },
            ],
            'space-infix-ops': 'error',
            'arrow-spacing': ['error', { before: true, after: true }],

            // Best Practices
            eqeqeq: ['error', 'always'],
            'no-var': 'error',
            'prefer-const': 'error',
            'no-unused-vars': ['warn', { argsIgnorePattern: '^_' }],
            'no-console': 'off',
            'no-undef': 'error',

            // Code Quality
            'no-duplicate-imports': 'error',
            'no-multiple-empty-lines': ['error', { max: 1, maxEOF: 0 }],
            'eol-last': ['error', 'always'],
            'prefer-template': 'error',
            'object-shorthand': 'error',
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
