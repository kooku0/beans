module.exports = {
  setupFiles: [
    '<rootDir>/__mocks__/setEnvVars.js',
  ],
  setupFilesAfterEnv: [
    '<rootDir>/jest.setup.js',
  ],
  moduleNameMapper: {
    '@/(.*)': '<rootDir>/src/$1',
    '\\.(css|less)$': '<rootDir>/__mocks__/styleMock.js',
    '\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$': '<rootDir>/__mocks__/fileMock.js',
  },
  testPathIgnorePatterns: [
    'node_modules',
    '<rootDir>.*/public',
    '<rootDir>/.next/',
    'cypress',
  ],
  testEnvironment: 'jsdom',
};
