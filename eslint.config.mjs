import { fixupConfigRules, fixupPluginRules } from '@eslint/compat'
import react from 'eslint-plugin-react'
import typescriptEslint from '@typescript-eslint/eslint-plugin'
import prettier from 'eslint-plugin-prettier'
import reactRefresh from 'eslint-plugin-react-refresh'
import globals from 'globals'
import tsParser from '@typescript-eslint/parser'
import path from 'node:path'
import { fileURLToPath } from 'node:url'
import js from '@eslint/js'
import { FlatCompat } from '@eslint/eslintrc'

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)
const compat = new FlatCompat({
    baseDirectory: __dirname,
    recommendedConfig: js.configs.recommended,
    allConfig: js.configs.all
})

export default [
    {
        ignores: ['**/dist', '**/.eslintrc.cjs']
    },
    ...fixupConfigRules(
        compat.extends(
            'eslint:recommended',
            'plugin:@typescript-eslint/recommended',
            'plugin:react-hooks/recommended',
            'prettier',
            'plugin:react/recommended'
        )
    ),
    {
        plugins: {
            react: fixupPluginRules(react),
            '@typescript-eslint': fixupPluginRules(typescriptEslint),
            prettier,
            'react-refresh': reactRefresh
        },

        languageOptions: {
            globals: {
                ...globals.browser
            },

            parser: tsParser,
            ecmaVersion: 2020,
            sourceType: 'module'
        },

        settings: {
            react: {
                version: 'detect'
            }
        },

        rules: {
            'react/react-in-jsx-scope': 'off',
            semi: ['error', 'never'],
            quotes: ['error', 'single'],

            'react-refresh/only-export-components': [
                'warn',
                {
                    allowConstantExport: true
                }
            ],

            'prettier/prettier': 'error'
        }
    }
]
