import Link from 'next/link';
import styles from './blogHeader.module.scss';
import CTCButton from '../ui/ctcbutton/CTCButton';

export default function BlogHeader() {
	return (
		<div className={styles.headerContainer}>
			<div className={styles.logoContainer}>
				<h1>Logo Goes here</h1>
			</div>
			<div className={styles.headerContentContainer}>
				<nav>
					<ul className={styles.navContainer}>
						<li>
							<Link href='/'>Link-1</Link>
						</li>
						<li>
							<Link href='/'>Link-2</Link>
						</li>
						<li>
							<Link href='/'>Link-3</Link>
						</li>
						<li>
							<Link href='/'>Link-4</Link>
						</li>
					</ul>
				</nav>

				<div>
					<form className={styles.actionContainer}>
						<CTCButton>Action Button</CTCButton>
					</form>
				</div>
			</div>
		</div>
	);
}
