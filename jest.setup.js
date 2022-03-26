import { setLogger } from 'react-query';

import dayjs from 'dayjs';
import timezone from 'dayjs/plugin/timezone';
import utc from 'dayjs/plugin/utc';
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

dayjs.extend(utc);
dayjs.extend(timezone);

dayjs.tz.setDefault('Asia/Seoul');
