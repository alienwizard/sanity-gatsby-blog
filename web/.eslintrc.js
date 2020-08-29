module.exports = {
  parser: '@typescript-eslint/parser',
  extends: [
    'standard',
    'standard-react',
    'plugin:import/errors',
    'plugin:import/warnings',
    'prettier',
    'plugin:react/recommended'
  ],
  rules: {
    'object-curly-spacing': ['error', 'never'],
    'prettier/prettier': 2 // Means error
  },
  settings: {
    react: {
      pragma: 'React',
      version: '16.8.4'
    }
  },
  plugins: ['prettier'],
  parserOptions: {
    ecmaVersion: 2018, // Allows for the parsing of modern ECMAScript features
    sourceType: 'module', // Allows for the use of imports
    ecmaFeatures: {
      jsx: true // Allows for the parsing of JSX
    }
  }
}
