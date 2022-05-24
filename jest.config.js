/** @type {import('ts-jest/dist/types').InitialOptionsTsJest} */
module.exports = {
  preset: 'ts-jest',
  testEnvironment: 'jsdom',
  resetMocks: false,
  moduleNameMapper: {
    ".+\\.(css|styl|less|sass|scss)$": "identity-obj-proxy", // mock style files
    ".+\\.(png|jpg|ttf|woff|woff2|gif)$": "<rootDir>/__mocks__/fileMock.js", // mock images
    "^@bridger/(.+)": "<rootDir>/src/$1"
  },
  transform: {
    "^.+\\.tsx?$": "ts-jest",
 },
  collectCoverageFrom: [
    "src/**/*.{tsx,ts,js}",
    "!src/stories/**",
    "!src/config-overrides.js",
    "!src/global.d.ts",
    "!src/react-app-env.d.ts",
    "!src/i18n.js",
    "!src/reportWebVitals.js",
    "!**/node_modules/**"
  ],
  coverageReporters: ["text", "text-summary", "cobertura"],
  coverageDirectory: "<rootDir>/coverage",
  maxWorkers: '50%',
  testTimeout: 10000, // display an error if a test lasts more than this value
};
