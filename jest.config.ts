import type { Config } from 'jest'

const config: Config = {
  rootDir: './',
  testEnvironment: 'jsdom',
  setupFilesAfterEnv: ["<rootDir>/test/jest.setup.ts"],
  transform: {
    "^.+\\.tsx?$": "ts-jest"
  },
  moduleNameMapper: {
    '\\.(gif|tff|eot|svg|png)$': '<rootDir>/test/mocks/fileMock.js',
  },
}

export default config