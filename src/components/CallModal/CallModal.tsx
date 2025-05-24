'use client';

import { CallModalContext } from '@/app/context/CallModalContext';
import { X } from 'lucide-react';
import { useContext, useEffect } from 'react';
import styles from './CallModal.module.scss';

export function CallModal() {
	const { setOpenModal } = useContext(CallModalContext);

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
			<div
				onClick={() => setOpenModal(false)}
				className={styles.modalBack}
			></div>
			<div className={styles.callModal}>
				<h2>Call</h2>

				<span onClick={() => setOpenModal(false)} className={styles.close}>
					<X size={20} />
				</span>

				<div className={styles.callBtn}>+99312 469646</div>
				<div className={styles.callBtn}>+99365 720630</div>
			</div>
		</>
	);
}
