module.exports = {
  env: {
    node: true,
    browser: true
  },
  extends: [
    'plugin:vue/essential',
    'eslint:recommended',
    'plugin:vue/recommended',
    '@vue/typescript/recommended',
  ],
  plugins: ['@typescript-eslint'],
  parserOptions: {
    ecmaVersion: 2020,
    parser: '@typescript-eslint/parser',
  },
  rules: {
    'no-console': 'warn',
    'no-debugger': 'warn',
    'no-unused-vars': 'off',
    semi: 'off',
    camelcase: ['off'],
    'arrow-parens': 'off',
    'arrow-spacing': 'error',
    'array-bracket-spacing': [
      'error',
      'always',
      {
        singleValue: false,
        arraysInArrays: false,
        objectsInArrays: false
      }
    ],
    'default-param-last': 'off',
    'dot-notation': [2, { allowPattern: '^[a-z]' }],
    'explicit-member-accessibility': 'off',
    'no-useless-constructor': 'off',
    'object-curly-spacing': 'off',
    'no-multi-spaces': [
      'error',
      {
        ignoreEOLComments: true
      }
    ],
    'keyword-spacing': 'error',
    'key-spacing': 'error',
    'no-trailing-spaces': 'error',
    'switch-colon-spacing': 'error',
    'space-before-function-paren': ['error', 'always'],
    'no-multiple-empty-lines': ["error", {
      max: 1,
      maxBOF: 0,
      maxEOF: 0
    }],
    'yoda': ['error', 'never'],
    'max-params': ['error', {
      max: 4
    }],
    'comma-spacing': 'error',
    '@typescript-eslint/ban-ts-comment': 'off',
    '@typescript-eslint/explicit-function-return-type': 'off',
    '@typescript-eslint/explicit-module-boundary-types': 'off',
    '@typescript-eslint/no-explicit-any': 'off',
    "@typescript-eslint/no-this-alias" : 'off',
    'vue/no-v-html': 'off',
    'vue/no-reserved-keys': 'off',
    'vue/component-name-in-template-casing': [
      'error',
      'kebab-case',
    ],
    'vue/padding-line-between-blocks': ['error', 'always'],
    'vue/keyword-spacing': 'error',
    'vue/key-spacing': 'error',
    'vue/arrow-spacing': 'error',
    'vue/singleline-html-element-content-newline': 'off',
    'vue/require-default-prop': 'off',
    'vue/no-multiple-template-root': 'off',
    'vue/no-v-model-argument': 'off'
  },
  overrides: [
    {
      files: ['src/**/*.{ts,vue,tsx}'],
      parserOptions: {
        project: ['./tsconfig.json']
      },
      rules: {
        '@typescript-eslint/explicit-function-return-type': ['error'],
        '@typescript-eslint/explicit-module-boundary-types': ['error'],
        '@typescript-eslint/no-unnecessary-boolean-literal-compare': 'error',
        '@typescript-eslint/no-explicit-any': 'error',
        '@typescript-eslint/ban-ts-comment': 'off',
        '@typescript-eslint/class-literal-property-style': ['error', 'fields'],
        '@typescript-eslint/default-param-last': ['error'],
        '@typescript-eslint/member-delimiter-style': ['error', {
          multiline : {
            delimiter: 'none',
            requireLast: false
          },
          singleline: {
            requireLast: false
          }
        }],
        '@typescript-eslint/method-signature-style': ['error', 'method'],
        '@typescript-eslint/no-empty-interface': ['error', { allowSingleExtends: false }],
        '@typescript-eslint/no-for-in-array': 'error',
        '@typescript-eslint/no-invalid-void-type': 'error',
        '@typescript-eslint/no-misused-new': 'error',
        '@typescript-eslint/no-useless-constructor': ['error'],
        '@typescript-eslint/object-curly-spacing': [
          'error',
          'always',
          {
            arraysInObjects: false,
            objectsInObjects: false
          }
        ]
      }
    },
    {
      files: ['*.vue'],
      rules: {
        'vue/attribute-hyphenation': ['error', 'always'],
      }
    }
  ]
}
