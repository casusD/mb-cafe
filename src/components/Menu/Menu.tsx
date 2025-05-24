'use client';

import { useLanguage } from '@/app/context/LanguageContext';
import { MenuProps } from '@/app/items/itemsData';
import { useState } from 'react';
import { FoodModal } from '../FoodModal/FoodModal';
import styles from './Menu.module.scss';

interface Props {
	menu: MenuProps[];
	section: string;
}

const Menu: React.FC<Props> = ({ menu, section }) => {
	const { t } = useLanguage();

	const [selectedItem, setSelectedItem] = useState<MenuProps | null>(null);

	const handleCardClick = (item: MenuProps) => {
		setSelectedItem(item);
	};

	const closeModal = () => {
		setSelectedItem(null);
	};

	return (
		<>
			{/* <div id={section}></div> */}
			<section data-marquee id={section} className={styles.categories}>
				{section === 'breakfast' ? <div className={styles.invis}></div> : null}
				<div className={styles.grid}>
					{menu.map(item => {
						return (
							<div
								className={styles.dinnerCard}
								key={item.id}
								onClick={() => handleCardClick(item)}
							>
								<div
									className={styles.item}
									style={{
										backgroundImage: `url(${item.url})`,
									}}
								></div>
								<div className={styles.price}>
									<b>{item.price}.00</b>
									<span>TMT</span>
								</div>
								<p>{t(`${section}.${item.name}`)}</p>
							</div>
						);
					})}
				</div>
				{section === 'pastane' ? <div className={styles.invis}></div> : null}
			</section>

			{selectedItem && (
				<FoodModal item={selectedItem} onClose={closeModal} section={section} />
			)}
		</>
	);
};

export default Menu;
