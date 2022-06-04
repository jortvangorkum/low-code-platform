module.exports = {
    env: {
        browser: true,
        es6: true,
        node: true
      },
    parser: '@typescript-eslint/parser',
    parserOptions: {
        ecmaFeatures: {
            jsx: true
        },
        ecmaVersion: "latest",
        sourceType: "module"
    },
    plugins: [
        'react',
        '@typescript-eslint'
    ],
    extends: [
        'eslint:recommended',
        'plugin:react/recommended',
        "plugin:@typescript-eslint/eslint-recommended",
        'plugin:@typescript-eslint/recommended',
        "plugin:react/jsx-runtime",
        "plugin:import/recommended",
        "plugin:import/electron",
        "plugin:import/typescript"
    ],
    ignorePatterns: ['*.js'],
    rules: {},
};