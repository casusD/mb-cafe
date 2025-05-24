import Link from 'next/link';
import styles from './Footer.module.scss';

export function Footer() {
	return (
		<footer className={styles.footer}>
			<Link href='https://pikir.biz/projects.html'>Powered by Pikir.</Link>
		</footer>
	);
}
