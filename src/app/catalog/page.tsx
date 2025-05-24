'use client';

import { CallModal } from '@/components/CallModal/CallModal';
import Categories from '@/components/Categories/Categories';
import { ChevronLeft } from 'lucide-react';
import Link from 'next/link';
import { useContext } from 'react';
import { CallModalContext } from '../context/CallModalContext';
import { useLanguage } from '../context/LanguageContext';
import styles from './page.module.scss';

export default function Catalog() {
	const { t } = useLanguage();
	const { openModal, setOpenModal } = useContext(CallModalContext);

	return (
		<section className={styles.catalog}>
			<header className={styles.categoriesHeader}>
				<nav className={styles.nav}>
					<span>
						<Link href='/' className={styles.goBack}>
							<ChevronLeft size={24} />
						</Link>
					</span>

					<h4>{t('categories.title')}</h4>

					<span></span>
				</nav>
			</header>

			<Categories />

			<div onClick={() => setOpenModal(true)} className={styles.call}>
				<svg
					width={24}
					height={24}
					viewBox='0 0 24 24'
					fill='none'
					xmlns='http://www.w3.org/2000/svg'
				>
					<path
						d='M24 6.23999C24 13.88 13.87 24 6.24 24C4.57 24 3.01 23.37 1.86 22.22L0.860004 21.07C-0.299996 19.91 -0.299996 17.95 0.910004 16.74C0.940004 16.71 3.35 14.86 3.35 14.86C4.55 13.72 6.44 13.72 7.63 14.86L9.09 16.03C12.29 14.67 14.56 12.39 16.02 9.07999L14.86 7.61999C13.71 6.42999 13.71 4.52999 14.86 3.33999C14.86 3.33999 16.71 0.929993 16.74 0.899993C17.95 -0.310007 19.91 -0.310007 21.12 0.899993L22.17 1.80999C23.37 2.99999 24 4.55999 24 6.22999V6.23999Z'
						fill='white'
					></path>
				</svg>
			</div>

			{openModal ? <CallModal /> : null}
		</section>
	);
}
