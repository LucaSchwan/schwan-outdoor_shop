import '../styles/globals.css';
import type { AppProps } from 'next/app';
import Link from 'next/link';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <div className="content-bg">
      <nav>
        <Link href="/" className="logo">
          schwan-outdoor.shop
        </Link>
      </nav>
      <Component {...pageProps} />
      <footer>
        <div className="dev">Made by ehrenschwan</div>
      </footer>
    </div>
  );
}
