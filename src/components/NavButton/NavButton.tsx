import Link from 'next/link';
import styles from './NavButton.module.scss';

interface Props {
	children: string;
	onClick?: () => void;
}

export function NavButton({ children, onClick }: Props) {
	return (
		<Link href='/catalog' className={styles.btn} onClick={onClick}>
			{children}
		</Link>
	);
}
