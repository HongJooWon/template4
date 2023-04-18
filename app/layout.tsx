import Footer from '@/components/layout/footer';
import Header from '@/components/layout/header';
import ScrollToTopBtn from '@/components/layout/scroll-to-top-btn';
import { Nanum_Gothic } from 'next/font/google';
import './globals.css';
import Providers from '@/components/layout/providers';

export const metadata = {
  title: {
    default: 'Home | Jellie Blog',
    template: '%s | Jellie Blog',
  },
  description: 'Jellie의 기술 블로그입니다.',
  icons: '/favicon.ico',
};

const nanum_gothic = Nanum_Gothic({
  weight: ['400', '700', '800'],
  subsets: ['latin'],
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang='en'>
      <body
        className={`${nanum_gothic.className} bg-bg text-text overscroll-none`}
      >
        <Providers>
          <Header />
          <main className='relative md:px-20 lg:px-40 mx-auto pb-28 selection:bg-[rgb(186,200,255)]'>
            {children}
            <ScrollToTopBtn />
          </main>
          <Footer />
        </Providers>
      </body>
    </html>
  );
}
