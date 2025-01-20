import Link from 'next/link';
import styles from './sidebar.module.scss';

export const Sidebar = () => {
  return (
    <div className={styles.container}>
      <nav>
        <ul>
          <li className={styles.content}>
            <Link href='/'>ストック</Link>
          </li>
          <li className={styles.content}>
            <Link href='/addFoods'>追加</Link>
          </li>
          <li className={styles.content}>
            <Link href='/useFoods'>作る</Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};
