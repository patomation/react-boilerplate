//@ts-check
const path = require('path')
const fetch = require('node-fetch')

module.exports = {
  verbose: true,
  clearMocks: true,
  coverageDirectory: 'coverage',
  moduleDirectories: ['node_modules', 'src'],
  moduleFileExtensions: [
    'js',
    'json',
    'jsx',
    'ts',
    'tsx',
    'node',
  ],
  moduleNameMapper: {
    '\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$':
      '<rootDir>/__mocks__/fileMock.js',
    '\\.(css)$':
      '<rootDir>/__mocks__/styleMock.js',
  },
  roots: [path.resolve('src')],
  setupFiles: ['./jest.setup.js'],
  testEnvironment: 'node',
  testPathIgnorePatterns: [
    '\\\\node_modules\\\\',
  ],
  testRegex:
    '(/__tests__/.*|(\\.|/)(test|spec))\\.tsx?$',
  transform: {
    '^.+\\.tsx?$': 'ts-jest',
  },
  // ReferenceError: fetch is not defined https://github.com/mswjs/msw/issues/686
  globals: { fetch },
}
