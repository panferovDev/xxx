import { Roboto } from 'next/font/google';
import { ThemeProvider } from '../components/themeProvider/theme-provider';
import './global.css';
import { Providers } from '../components/Providers';
import Header from '../components/UI/NavBar/Header';
import { preloadState } from '../utils/preloadSate';

const roboto = Roboto({
  weight: '400',
  subsets: ['latin-ext'],
});

export const metadata = {
  title: 'Elbrus Bootcamp',
  description: 'Generated by create-nx-workspace',
};

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}): Promise<JSX.Element> {
  const preloadedState = await preloadState();
  return (
    <html lang="en" className="dark">
      <body className={`${roboto.className}`}>
        <Providers preloadedState={preloadedState}>
          <ThemeProvider attribute="class">
            <div className="container">
              <Header />
              {children}
            </div>
          </ThemeProvider>
        </Providers>
      </body>
    </html>
  );
}
