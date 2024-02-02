module.exports = {
    env: { browser: true, es2020: true, node: true },
    extends: ['next/core-web-vitals'],
    ignorePatterns: ['dist', '.eslintrc.cjs'],
    parserOptions: { ecmaVersion: 'latest', sourceType: 'module' },
    rules: {
        'react-hooks/rules-of-hooks': 'warn',
        'react/display-name': 'warn',
        'no-unused-vars': 'warn',
        'react-hooks/exhaustive-deps': 'off',
        'react/prop-types': 'off',
        'react/jsx-key': 'warn',
    },
};
