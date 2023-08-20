import { Roboto } from 'next/font/google';
import { ThemeProvider } from '../components/themeProvider/theme-provider';
import './global.css';
import { Providers } from '../components/Providers';

const roboto = Roboto({
  weight: '400',
  subsets: ['latin-ext'],
});

export const metadata = {
  title: 'Elbrus Bootcamp',
  description: 'Generated by create-nx-workspace',
};

export default function RootLayout({ children }: { children: React.ReactNode }): JSX.Element {
  return (
    <html lang="en" className="dark">
      <body className={`${roboto.className}`}>
        <Providers>
          <ThemeProvider attribute="class">
            <div className="container">{children}</div>
          </ThemeProvider>
        </Providers>
      </body>
    </html>
  );
}
