const path = require('path')

module.exports = {
  extends: ['standard', 'standard-react'],
  parser: 'babel-eslint',
  rules: {
    'object-curly-spacing': ['error', 'never'],
    'space-before-function-paren': ['error', 'never']
  },
  settings: {
    react: {
      pragma: 'React',
      version: '16.2.0'
    }
  }
}
