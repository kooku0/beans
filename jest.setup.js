import { setLogger } from 'react-query';

import timezoneMock from 'timezone-mock';

import '@testing-library/jest-dom/extend-expect';
import 'jest-plugin-context/setup';
import 'given2/setup';

setLogger({
  log: console.log,
  warn: console.warn,
  // ✅ no more errors on the console
  error: () => {},
});

timezoneMock.register('UTC');
