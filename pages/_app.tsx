import '../styles/globals.scss';
import styles from '../styles/App.module.scss';
import type { AppProps } from 'next/app';
import Link from 'next/link';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <div className={styles.pageLayout}>
      <div className={styles.navbar}>
        <Link href="/" className={styles.home}>
          schwan-outdoor.shop
        </Link>
      </div>
      <div className={styles.content}>
        <Component {...pageProps} />
      </div>
      <div className={styles.footer}>Made by ehrenschwan</div>
    </div>
  );
}
