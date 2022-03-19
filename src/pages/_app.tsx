/* eslint-disable react/jsx-props-no-spreading */
import { ReactElement, useState } from 'react';
import { QueryClient, QueryClientProvider } from 'react-query';
import { ReactQueryDevtools } from 'react-query/devtools';

import { ThemeProvider } from '@emotion/react';
import type { AppProps } from 'next/app';
import { SessionProvider } from 'next-auth/react';
import { RecoilRoot } from 'recoil';

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
            <Component {...pageProps} />
          </ThemeProvider>
        </RecoilRoot>
        <ReactQueryDevtools initialIsOpen={false} />
      </QueryClientProvider>
    </SessionProvider>
  );
}

export default MyApp;
