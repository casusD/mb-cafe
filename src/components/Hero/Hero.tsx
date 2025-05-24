'use client';

import { Language, useLanguage } from '@/app/context/LanguageContext';
import Image from 'next/image';
import Link from 'next/link';
import Marquee from '../Marquee/Marquee';
import { NavButton } from '../NavButton/NavButton';
import { ThemeSwitcher } from '../ThemeSwitcher/ThemeSwitcher';
import styles from './Hero.module.scss';

export function Hero() {
	const { setLanguage } = useLanguage();

	const handleClickLick = (lang: Language) => {
		// e.preventDefault();
		setLanguage(lang);
	};

	return (
		<section className={styles.hero}>
			<h1>MENU</h1>

			<button className={styles.offlineMenuBtn}>Offline Menu</button>

			<Image
				src='/logo.png'
				alt='Nippon Global Energy'
				width={176}
				height={146}
			></Image>

			<nav className={styles.navBtn}>
				<h3>Choose language</h3>
				<NavButton onClick={() => handleClickLick('tm')}>Türkmen</NavButton>
				<NavButton onClick={() => handleClickLick('ru')}>Русский</NavButton>
				<NavButton onClick={() => handleClickLick('en')}>English</NavButton>
				<NavButton onClick={() => handleClickLick('tr')}>Türkçe</NavButton>
			</nav>

			<ThemeSwitcher />

			<Marquee text='Contact us' />

			<div className={styles.contact}>
				<div>
					<p>Instagram</p>
					<Link href='https://www.instagram.com/mb.patisserie/'>
						@mb.patisserie
					</Link>
				</div>
				<div>
					<p>Tiktok</p>
					<Link href='https://www.instagram.com/mb.patisserie/'>
						@mbresturants
					</Link>
				</div>{' '}
				<div>
					<p>Website</p>
					<Link href='https://www.instagram.com/mb.patisserie/'>
						www.mbgrouptm.com
					</Link>
				</div>{' '}
				<div>
					<p>Phone</p>
					<Link href='https://www.instagram.com/mb.patisserie/'>
						+99312 469646
					</Link>
					<Link href='https://www.instagram.com/mb.patisserie/'>
						+99365 720630
					</Link>
				</div>{' '}
				<div>
					<p>Address</p>
					<Link href='https://maps.app.goo.gl/SuEngYYuDeAaw94T9'>
						{"Ashgabat city TC Berkarar 2nd floor 'MB patisserie'"}
					</Link>
				</div>
			</div>
		</section>
	);
}
