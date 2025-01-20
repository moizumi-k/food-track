import { Header } from '@/components/header/header';
import styles from './page.module.scss';

export default function Home() {
  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <Header title='ストック' />
      </div>
      <div className={styles.category}></div>
      <div className={styles.list}></div>
    </div>
  );
}
