import styles from './Components.module.css';

/* eslint-disable-next-line */
export interface ComponentsProps {}

export function Components(props: ComponentsProps) {
  return (
    <div className={styles['container']}>
      <h1>Welcome to Components!</h1>
    </div>
  );
}

export default Components;
