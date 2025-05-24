'use client';

import { CallModal } from '@/components/CallModal/CallModal';
import { categories } from '@/components/Categories/categoriesData';
import Marquee from '@/components/Marquee/Marquee';
import Menu from '@/components/Menu/Menu';
import { ChevronLeft } from 'lucide-react';
import Link from 'next/link';
import { useContext, useEffect, useState } from 'react';
import { CallModalContext } from '../context/CallModalContext';
import { useLanguage } from '../context/LanguageContext';
import {
	beverages,
	breakfasts,
	burger,
	courseChicken,
	courseFish,
	courseMeat,
	creepsSandwiches,
	crispyMeals,
	dietary,
	extraGarnish,
	grilledMeals,
	kidsMenu,
	pastane,
	pastas,
	pide,
	pizza,
	salads,
	soups,
	starters,
	texMex,
	toasts,
} from './itemsData';
import styles from './page.module.scss';

export default function Items() {
	const { t } = useLanguage();
	const { openModal, setOpenModal } = useContext(CallModalContext);

	const [activeId, setActiveId] = useState<string | null>(null);

	useEffect(() => {
		let animationId: number;

		const checkActiveSection = () => {
			const marquees = document.querySelectorAll('[data-marquee]');
			const viewportCenter = window.innerHeight / 2;
			const offset = 100;
			let closestId = null;
			let closestDistance = Infinity;

			marquees.forEach(el => {
				const rect = el.getBoundingClientRect();
				const elCenter = rect.top + rect.height / 2;
				const distance = Math.abs(viewportCenter + offset - elCenter);

				if (distance < closestDistance) {
					closestDistance = distance;
					closestId = el.id;
				}
			});

			if (closestId) {
				setActiveId(closestId);
			}

			animationId = requestAnimationFrame(checkActiveSection);
		};

		// стартуем анимацию
		animationId = requestAnimationFrame(checkActiveSection);

		return () => {
			// останавливаем анимацию при размонтировании компонента
			cancelAnimationFrame(animationId);
		};
	}, []);

	useEffect(() => {
		if (!activeId) return;

		const categoriesList = document.querySelector(
			`.${styles.categoriesList}`
		) as HTMLElement | null;
		const activeLink = document.querySelector(
			`.${styles.categoriesLink}[href="#${activeId}"]`
		) as HTMLElement | null;

		if (categoriesList && activeLink) {
			const navRect = categoriesList.getBoundingClientRect();
			const linkRect = activeLink.getBoundingClientRect();

			// Проверяем, выходит ли активная ссылка за левую видимую границу навигации
			if (linkRect.left < navRect.left) {
				// Скроллим так, чтобы активная ссылка оказалась в начале контейнера (слева)
				categoriesList.scrollBy({
					left: linkRect.left - navRect.left,
					behavior: 'smooth',
				});
			}
			// Проверяем, выходит ли активная ссылка за правую видимую границу навигации
			else if (linkRect.right > navRect.right) {
				// Скроллим так, чтобы активная ссылка оказалась в конце контейнера (справа)
				categoriesList.scrollBy({
					left: linkRect.right - navRect.right,
					behavior: 'smooth',
				});
			}
		}
	}, [activeId]);

	return (
		<section className={styles.catalog}>
			<div className={styles.categoriesHeader}>
				<nav className={styles.nav}>
					<span className={styles.goBack}>
						<Link href='/catalog'>
							<ChevronLeft size={24} />
						</Link>
					</span>

					<div className={styles.categoriesList}>
						{categories.map(item => {
							return (
								<div key={item.id}>
									<Link
										className={`${styles.categoriesLink} ${
											activeId === item.name ? styles.activeLink : ''
										}`}
										href={'#' + item.name}
									>
										{t(`categories.${item.name}`)}
									</Link>
								</div>
							);
						})}
					</div>
				</nav>
			</div>

			<Menu menu={breakfasts} section='breakfast' />
			<Marquee text={'Toast'} id='toast' />
			<Menu menu={toasts} section='toast' />
			<Marquee text={'Soups'} id='soup' />
			<Menu menu={soups} section='soup' />
			<Marquee text={'Starters'} id='starter' />
			<Menu menu={starters} section='starter' />
			<Marquee text={'Crispy Meals'} id='crispyMeal' />
			<Menu menu={crispyMeals} section='crispyMeal' />
			<Marquee text={'Dietary'} id='dietary' />
			<Menu menu={dietary} section='dietary' />
			<Marquee text={'Salads'} id='salad' />
			<Menu menu={salads} section='salad' />
			<Marquee text={'Pasta'} id='pasta' />
			<Menu menu={pastas} section='pasta' />
			<Marquee text={'Main course: meat'} id='courseMeat' />
			<Menu menu={courseMeat} section='courseMeat' />
			<Marquee text={'Main course: chicken'} id='courseChicken' />
			<Menu menu={courseChicken} section='courseChicken' />
			<Marquee text={'Main course: fish'} id='courseFish' />
			<Menu menu={courseFish} section='courseFish' />
			<Marquee text={'Extra Garnısh'} id='extraGarnish' />
			<Menu menu={extraGarnish} section='extraGarnish' />
			<Marquee text={'TEX- MEX cusine'} id='texMex' />
			<Menu menu={texMex} section='texMex' />
			<Marquee text={'CREEPS-SANDWICHES'} id='creepsSandwiches' />
			<Menu menu={creepsSandwiches} section='creepsSandwiches' />
			<Marquee text={'Burgers'} id='burger' />
			<Menu menu={burger} section='burger' />
			<Marquee text={'Pizza'} id='pizza' />
			<Menu menu={pizza} section='pizza' />
			<Marquee text={'Pide'} id='pide' />
			<Menu menu={pide} section='pide' />
			<Marquee text={'Grilled meals'} id='grilledMeals' />
			<Menu menu={grilledMeals} section='grilledMeals' />
			<Marquee text={'Kid’s menu'} id='kidsMenu' />
			<Menu menu={kidsMenu} section='kidsMenu' />
			<Marquee text={'Beverages'} id='beverages' />
			<Menu menu={beverages} section='beverages' />
			<Marquee text={'Pastane'} id='pastane' />
			<Menu menu={pastane} section='pastane' />

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
