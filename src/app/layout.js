import { Geist, Geist_Mono, Philosopher } from 'next/font/google';
import './globals.css';

const philosopher = Philosopher({
  variable: '--font-philosopher',
  subsets: ['latin', 'cyrillic'],
  weight: ['400', '700'],
});

// const geistMono = Geist_Mono({
//   variable: '--font-geist-mono',
//   subsets: ['latin'],
// });

export const metadata = {
  title: 'Анастасия Давыдос',
  description: 'Психология и немецкий',
};

export default function RootLayout({ children }) {
  return (
    <html lang="ru">
      <body
        className={`${philosopher.variable} antialiased grid grid-rows-[20px_1fr_20px] p-8 pb-20 gap-16 min-h-screen`}
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
