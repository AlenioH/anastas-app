import { Montserrat } from 'next/font/google';
import './globals.css';

const montserrat = Montserrat({
  variable: '--font-montserrat',
  subsets: ['latin', 'cyrillic'],
});

export default function RootLayout({ children }) {
  return (
    <html lang="ru">
      <body
        className={`${montserrat.variable} antialiased grid grid-rows-[20px_1fr_20px] p-8 pb-20 gap-16 min-h-screen`}
      >
        <header>header</header>
        {children}
        <footer className="row-start-3 flex gap-6 flex-wrap items-center justify-center">
          footer
        </footer>
      </body>
    </html>
  );
}
