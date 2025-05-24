'use client';

import { useTheme } from '@/app/context/ThemeContext';
import { Moon, Sun } from 'lucide-react';
import styles from './ThemeSwitcher.module.scss';

export function ThemeSwitcher() {
	const { theme, toggleTheme } = useTheme();

	return (
		<>
			{theme === 'light' ? (
				<div onClick={toggleTheme} className={styles.theme}>
					<Moon width={16} height={16} /> Dark Mode
				</div>
			) : (
				<div onClick={toggleTheme} className={styles.theme}>
					<Sun width={16} height={16} /> Light Mode
				</div>
			)}
		</>
	);
}
