import styles from './header.module.scss';

interface props {
  title: string;
}

export const Header = (props: props) => {
  return (
    <div className={styles.container}>
      <div className={styles.wrapper}>
        <div className={styles.title}>{props.title}</div>
        <div className={styles.menu}>三</div>
      </div>
    </div>
  );
};
