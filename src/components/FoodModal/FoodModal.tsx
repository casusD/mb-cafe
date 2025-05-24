import { useLanguage } from '@/app/context/LanguageContext';
import { MenuProps } from '@/app/items/itemsData';
import { X } from 'lucide-react';
import { useEffect } from 'react';
import styles from './FoodModal.module.scss';

interface IFood {
	item: MenuProps;
	section: string;
	onClose: () => void;
}

export function FoodModal({ item, onClose, section }: IFood) {
	const { t } = useLanguage();

	useEffect(() => {
		// Отключаем скролл
		document.documentElement.style.overflow = 'hidden';

		return () => {
			// Возвращаем скролл при размонтировании
			document.documentElement.style.overflow = '';
		};
	}, []);

	return (
		<>
			<div onClick={onClose} className={styles.foodBack}></div>
			<div id={section} className={styles.foodModal}>
				<span className={styles.close}>
					<X onClick={onClose} />
				</span>
				<div>
					<img src={item.url} alt='Food' />
				</div>
				<div className={styles.modalInner}>
					<h2>{t(`${section}.${item.name}`)}</h2>
					<span className={styles.price}>{item.price}.00TMT</span>
				</div>
			</div>
		</>
	);
}
