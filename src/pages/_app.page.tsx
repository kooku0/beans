/* eslint-disable react/jsx-props-no-spreading */
import { ReactElement, useState } from 'react';
import { QueryClient, QueryClientProvider } from 'react-query';
import { ReactQueryDevtools } from 'react-query/devtools';

import { ThemeProvider } from '@emotion/react';
import dayjs from 'dayjs';
import timezone from 'dayjs/plugin/timezone';
import utc from 'dayjs/plugin/utc';
import type { AppProps } from 'next/app';
import { SessionProvider } from 'next-auth/react';
import { RecoilRoot } from 'recoil';

import Navbar from '@/components/common/Navbar';
import GlobalStyles from '@/styles/GlobalStyles';
import lightTheme from '@/styles/theme';

function MyApp({ Component, pageProps }: AppProps): ReactElement {
  const [queryClient] = useState(() => new QueryClient({
    defaultOptions: {
      queries: {
        retry: false,
      },
    },
  }));

  return (
    <SessionProvider session={pageProps.session}>
      <QueryClientProvider client={queryClient}>
        <RecoilRoot>
          <ThemeProvider theme={lightTheme}>
            <GlobalStyles />
            <Navbar />
            <Component {...pageProps} />
          </ThemeProvider>
        </RecoilRoot>
        <ReactQueryDevtools initialIsOpen={false} />
      </QueryClientProvider>
    </SessionProvider>
  );
}

export default MyApp;

dayjs.extend(utc);
dayjs.extend(timezone);
