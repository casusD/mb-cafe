'use client';

import { useLanguage } from '@/app/context/LanguageContext';
import Link from 'next/link';
import styles from './Categories.module.scss';
import { categories } from './categoriesData';

function Categories() {
	const { t } = useLanguage();

	return (
		<section className={styles.categories}>
			<div className={styles.grid}>
				{categories.map(item => {
					return (
						<Link key={item.id} href={`/items#${item.name}`}>
							<div
								className={styles.item}
								style={{
									backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.25), rgba(0, 0, 0, 0.25)) ,url(${item.url})`,
								}}
							>
								<h3>{t(`categories.${item.name}`)}</h3>
							</div>
						</Link>
					);
				})}
			</div>
		</section>
	);
}

export default Categories;
