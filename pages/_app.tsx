import '../styles/globals.scss';
import styles from '../styles/App.module.scss';
import type { AppProps } from 'next/app';
import Link from 'next/link';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <div className={styles.content_bg}>
      <nav>
        <Link href="/" className={styles.logo}>
          schwan-outdoor.shop
        </Link>
      </nav>
      <div className={styles.page_wrapper}>
        <Component {...pageProps} />
      </div>
      <footer>
        <div className={styles.dev}>Made by ehrenschwan</div>
      </footer>
    </div>
  );
}
