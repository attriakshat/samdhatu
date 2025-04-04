import styles from './CTCButton.module.scss';

export default function CTCButton({ children }) {
	return <button className={styles.actionButton}>{children}</button>;
}
